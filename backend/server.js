require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const carRoutes = require('./src/routes/carRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.error("Error connecting to the database", err);
});

// API Routes
app.use('/api/cars', carRoutes);

// Serve static files from the React frontend build folder
app.use(express.static(path.join(__dirname, 'build')));

// Catch-all route to serve React's index.html for non-API requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 5003;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
