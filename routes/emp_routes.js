const express = require("express");
const router = express.Router();

const { users } = require("../models/users");

router.post("/register", async (req, res) => {
    try {
        const newUser = new users(req.body);
        const result = await newUser.save();

        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/login", (req, res) => {
    res.send("Login page called");
});

router.get("/viewtask", (req, res) => {
    res.send("View task page called");
});

router.put("/updatestatus", (req, res) => {
    res.send("Update status page called");
});

module.exports = router;