const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  model: { type: String, required: [true, 'Model is required'] },
  make: { type: String, required: [true, 'Make is required'] },
  year: {
    type: Number,
    required: [true, 'Year is required'],
    min: [1886, 'Year must be greater than or equal to 1886'], 
    max: [new Date().getFullYear(), `Year must be less than or equal to ${new Date().getFullYear()}`],
  },
  registration: { type: String, required: [true, 'Registration is required'] },
  owner: { type: String, required: [true, 'Owner is required'] },
  address: { type: String, required: [true, 'Address is required'] }
});


module.exports = mongoose.model('Car', CarSchema);
