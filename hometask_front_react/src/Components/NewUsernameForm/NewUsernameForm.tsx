import { useState, type JSX } from "react";
import css from "./NewUsernameForm.module.css";
import { useNavigate } from "react-router-dom";
import { usernameService } from "../../Services/UsernameService";
import { useUsername } from "../../Context/UsernameContextValues";

export function NewUsernameForm(): JSX.Element {

    const { setUser } = useUsername();
    const [newName, setNewName] = useState<string>('');
    
    const navigate = useNavigate();

    async function submitNewUsername (){
        try{
            const user = await usernameService.saveNewUsername(newName);
            console.log("New username submitted successfully!: ", user);
            setUser({...user})
            navigate('/display_username', { replace: true });
        } catch (error) {
            console.error("Error submitting new username: ", error);
        }
    }

    return (
        <div className={css.NewUsernameForm}>
            <form>
                <label htmlFor="username_box" >New username:</label>
                <input 
                    type="text" 
                    id="username_box"
                    placeholder="Enter username here" 
                    onChange={(e) => {setNewName(e.target.value); console.log("e.target.value: ", e.target.value)}} 
                />
                <button type="button" onClick={submitNewUsername}>Send</button>
            </form>
            <button type="button" onClick={() => navigate('/')} >Back Home</button>
        </div>
    );
}
