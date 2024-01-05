const express = require('express')
const mongoose = require('mongoose')
const { mongoURI, PORT } = require('./config')
const app = require('./app.js');



mongoose.connect(mongoURI).then(() => {
    console.log("Mongo is connected...")
}).catch((error) => {
    console.log("Error in connecting mongo", error)
})


app.listen(PORT, () => {
    console.log(`server is running on the port: ${PORT}`)
})

