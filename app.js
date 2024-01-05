const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middleware/error.js');
const bodyParser = require('body-parser');
const app = express();

// Load environment variables
dotenv.config({ path: "backend/config/config.env" })

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))


// Routes
const user = require("./routes/QRRoute.js")

app.use('/api/v1', user);

// Error handling middleware
app.use(errorMiddleware);

module.exports = app
