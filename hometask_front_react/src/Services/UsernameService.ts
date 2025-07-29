import axios from 'axios';
import { appConfig } from '../Utils/AppConfig';
import type { UsernameInterface, ClearUsernamesInterface } from '../Types/UsernameType';

class UsernameService {
    async saveNewUsername(username: string): Promise<UsernameInterface> {
        const response = await axios.post<UsernameInterface>(appConfig.saveNewUsername, {username});
        console.log("UsernameService.saveNewUsername response: ", response.data);
        return response.data;
    }

    async clearAllUsernames(): Promise<ClearUsernamesInterface> {
        const response = await axios.delete<ClearUsernamesInterface>(appConfig.clearAllUsernames);
        console.log("UsernameService.clearAllUsernames: All usernames cleared successfully! ", response.data);
        return response.data
    }
};

export const usernameService = new UsernameService();