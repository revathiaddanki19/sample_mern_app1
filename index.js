const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/sample_mern_app1")
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(3000, () => {
            console.log("Server running on http://localhost:3000");
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed:");
        console.log(error);
    });