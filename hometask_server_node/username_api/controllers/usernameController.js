const fs = require("fs")
const path = require("path")


const filePath = path.join(__dirname, "../usernames.json")
console.log("filePath: ", filePath)

function loadUsernamesData() {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8")
    const dataList = JSON.parse(fileContent)
    return Array.isArray(dataList) ? dataList : []
  } catch {
    return []
  }
};

function saveDataToFile(arr) {
    fs.writeFileSync(filePath, JSON.stringify(arr, null, 2), "utf8")
    console.log("saveDataToFile(arr) ✅")
;}


exports.saveUsername =  async function (req, res) {
    try{
        const { username } = req.body
        console.log("{ username } = req.body: ", username)
        if (!username) {
            return res.status(400).json({ error: 'Missing Username' })
        }

        const usernamesList = loadUsernamesData() 

        const createId = usernamesList.length ? usernamesList[usernamesList.length - 1].id : 0
        const id = createId + 1
        console.log("new username id: ", id)

        const newName = Object.assign( { id: +id }, {username : username } )
        usernamesList.push(newName)
        saveDataToFile(usernamesList)

        console.log("usernamesList: ", usernamesList)
        res.status(201).json(newName);
    } catch (error) {
        res.status(500).json({ message: 'Error saving the username, try again soon...🦖', error: error.message });
    }
};


exports.clearAllUsernames = async function (req, res) {
    try{
        saveDataToFile([])
        console.log('All usernames cleared successfully 🌻')
        res.status(200).json({ message: 'All usernames cleared successfully 🌻' });
    } catch (error) {
        res.status(500).json({ message: 'Error clearing akk usernames, try again soon...🦖', error: error.message });
    }
};