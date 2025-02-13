const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

router.post('/', carController.createCar);
router.get('/', carController.getAllCars);
router.put('/:id', carController.updateCar);
router.put('/multiple', carController.updateMultipleCars);
router.delete('/:id', carController.deleteCar);
router.get('/old', carController.getOldCars);

module.exports = router;
