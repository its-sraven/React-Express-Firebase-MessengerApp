const express = require('express')
const connectDB = require('./src/config/db-config');  
const middleware = require('../backend/src/middleware/middleware');
const cors = require("cors");

// Initialize Express.js application
const app = express()

// Middleware to parse JSON bodies
app.use(express.json()); 
app.use(middleware.decodeToken);

// Enable CORS
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: "GET,POST",
        allowedHeaders: "Content-Type,Authorization"
    })
);

// Connect to MongoDB
connectDB()
    .then(() => {
        console.log('Connection successfull');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    });

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
