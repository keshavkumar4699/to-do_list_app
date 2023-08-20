const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');

router.get('/login', userController.user_login);

module.exports = router;
