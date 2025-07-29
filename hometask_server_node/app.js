const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

const usernameRoutes = require('./username_api/routes/usernameRoute');
app.use('/api/username', usernameRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

app.listen(3000, () => {
    console.log(`Server running on http://localhost:${3000}`);
});