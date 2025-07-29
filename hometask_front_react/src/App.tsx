import './App.css'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Components/HomePage/HomePage'
import { NewUsernameForm } from './Components/NewUsernameForm/NewUsernameForm'
import { DisplayUsername } from './Components/DisplayUsername/DisplayUsername'


function App() {

  return (
    <div className='App'>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/new_username' element={<NewUsernameForm/>} />
            <Route path='/display_username' element={<DisplayUsername/>} />
        </Routes>
    </div>
  )
}

export default App
