const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/yourdbname');
    console.log('MongoDB connected Successfully.');
  } catch (error) {
    console.error('MongoDB not connection error', error);
    process.exit(1);
  }
};

module.exports = connectDB;
