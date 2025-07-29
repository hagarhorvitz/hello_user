const express = require('express');
const router = express.Router();

const { saveUsername, clearAllUsernames } = require('../controllers/usernameController');

router.post('/save', saveUsername);
router.delete('/clear', clearAllUsernames);

module.exports = router;