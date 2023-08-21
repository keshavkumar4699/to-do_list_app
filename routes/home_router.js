const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.use(express.urlencoded());

router.get('/', homeController.home);
router.post('/addTask', homeController.addTask);
router.get('/deleteTask', homeController.deleteTask);

module.exports = router;