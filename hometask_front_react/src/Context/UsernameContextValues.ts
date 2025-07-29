import {createContext, useContext} from "react";
import type { UsernameInterface } from "../Types/UsernameType";


interface UsernameContextProps {
    user: UsernameInterface ;
    setUser: (user: UsernameInterface) => void;
}

export const UsernameContext = createContext<UsernameContextProps>({
    user: {} as UsernameInterface,
    setUser() {},
});

export function useUsername() {
    const context = useContext(UsernameContext);
    if (!context) {
        throw new Error('useUsername must be used within an UsernameProvider');
    }
    return context;
};
