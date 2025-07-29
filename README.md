# Username Home Task Small App


## What It Does

* Frontend: React + TypeScript app to add, view and clear usernames.
* Backend: Node.js + Express API storing data in a JSON file (in-memory).


## How to Run

1. **Start backend**

   ```bash
   cd hometask_server_node
   npm install
   node app.js
   ```

   * Server URL: `http://localhost:3000`

2. **Start frontend**

   ```bash
   cd hometask_front_react
   npm install
   npm run dev
   ```

   * App URL: `http://localhost:5173`


> **Note:** 
> If your backend/frontend runs at a different URL, update the CORS origin array in app.js under:
>
>```js
>app.use(cors({
>  origin: ['<your-backend-url>', '<your-frontend-url>'],
>  methods: ['GET', 'POST', 'PUT', 'DELETE'],
>}));
>```
>
> Replace http://localhost:3000 / http://localhost:5173 with your actual backend/frontend URLs or use '*' to allow all origins.


## Core Features

* Add a new username through an intuitive form.
* View your saved username on its own page, fetched from the server right after submission.
* Clear all stored usernames with a single click.
* Smooth UI animations and toast notifications for feedback.

---

## License

This project is licensed under the MIT License.  
See the [LICENSE](./LICENSE) file for details.