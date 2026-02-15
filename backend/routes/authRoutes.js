const express = require('express');
const router = express.Router();
const { registerUser, itemAuth } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', itemAuth);

module.exports = router;
