import { type JSX } from "react";
import css from "./DisplayUsername.module.css";
import { useUsername } from "../../Context/UsernameContextValues";
import { useNavigate } from "react-router-dom";
import { usernameService } from "../../Services/UsernameService";

export function DisplayUsername(): JSX.Element {

    const { user } = useUsername();
    const navigate = useNavigate();

    async function clearUsernames() {
        try {
            const response = await usernameService.clearAllUsernames()
            console.log("clear successfully!: ", response);
            navigate('/', { replace: true, state: { toastMessage: response.message } });
        } catch (error) {
            console.error("Error clearing all usernames: ", error);
        }
    }


    return (
        <div className={css.DisplayUsername}>
            {
                user ? <div className={css.DisplayWrapper}>
                    <h1>Hello, {user?.username}</h1>
                    <div className={css.ButtonsDIsplay}>
                        <button type="button" onClick={() => navigate('/new_username')} >Enter Another Username</button>
                        <button type="button" onClick={(clearUsernames)}>Clear all usernames</button>
                        <button type="button" onClick={() => navigate('/')} >Home Page</button>
                    </div>

                </div> : <div className={css.DisplayWrapper}>
                    <h3>No username available to display...</h3>
                    <div className={css.ButtonsDIsplay}>
                        <button type="button" onClick={() => navigate('/new_username', { replace: true })} >Lets try again</button>
                        <button type="button" onClick={() => navigate('/', { replace: true })} >Home Page</button>
                    </div>
                </div>
            }
        </div>
    );
}
