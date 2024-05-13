const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/job', {
            socketTimeoutMS: 60000
        });
        console.log('Connected to MongoDB Compass');
        return connection;
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
};

module.exports = connectDB;