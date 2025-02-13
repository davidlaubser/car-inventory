const Car = require('../models/Car');

// Add a new car to the database
exports.createCar = async (req, res) => {
    try {
        const { model, make, year, registration, owner, address } = req.body;
        const newCar = await Car.create({ model, make, year, registration, owner, address });
        res.status(201).json(newCar);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all cars
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a single car by ID
exports.updateCar = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedCar = await Car.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedCar) return res.status(404).json({ error: 'Car not found' });
        res.json(updatedCar);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update multiple cars
exports.updateMultipleCars = async (req, res) => {
    try {
        const { criteria, updates } = req.body;
        const result = await Car.updateMany(criteria, updates);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a specific car by ID
exports.deleteCar = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCar = await Car.findByIdAndDelete(id);
        if (!deletedCar) return res.status(404).json({ error: 'Car not found' });
        res.json({ message: 'Car deleted successfully', deletedCar });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// List cars older than 5 years (based on current year)
exports.getOldCars = async (req, res) => {
    try {
        const currentYear = new Date().getFullYear();
        const cutoffYear = currentYear - 5;
        const oldCars = await Car.find(
            { year: { $lt: cutoffYear } },
            'model make year registration owner address' 
        );
        res.json(oldCars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

