class AppConfig {
    public readonly saveNewUsername = 'http://localhost:3000/api/username/save';
    public readonly clearAllUsernames = 'http://localhost:3000/api/username/clear';
}

export const appConfig = new AppConfig();
