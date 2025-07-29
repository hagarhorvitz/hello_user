import React, { useState} from "react";
import type { UsernameInterface } from "../Types/UsernameType";
import { UsernameContext } from "./UsernameContextValues";


export const UsernameProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [user, setUser] = useState<UsernameInterface>({
        id: null,
        username: '',
    });

    return(
        <UsernameContext.Provider value={{user, setUser}}>
            {children}
        </UsernameContext.Provider>
    )
};




  