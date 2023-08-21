const express = require('express');
const router = express.Router();

//importing controller
const homeController = require('../controllers/home_controller.js');

//url parser for post request
router.use(express.urlencoded());

//methods
router.get('/', homeController.home);
router.post('/addTask', homeController.addTask);
router.get('/deleteTask', homeController.deleteTask);

module.exports = router;