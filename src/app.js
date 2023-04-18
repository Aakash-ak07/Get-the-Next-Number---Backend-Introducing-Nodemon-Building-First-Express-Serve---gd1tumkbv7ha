const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

//GET request to get the next number from the input 'num'
app.get('/api/get-next-num', (req, res) => {
    const num = req.body.num;
    if (!num || isNaN(num)) {
        res.status(400).json({ message: "Invalid number", status: "failure" });
    }
    else {
        const nextNum = num + 1;
        res.status(200).json({ message: nextNum, status: "success" });
    }
});

module.exports = app;
