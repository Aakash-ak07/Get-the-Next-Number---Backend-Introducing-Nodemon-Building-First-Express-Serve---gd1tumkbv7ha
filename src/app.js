const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// GET Request to get the next number from the input 'num'.
// Endpoint: /api/get-next-num
// Return the response as { message: , status: }

app.get('/api/get-next-num', (req, res) => {
    const num = parseInt(req.body.num);

    // Check if num is a valid number
    if (isNaN(num)) {
        res.status(400).json({ message: "Invalid number", status: "failure" });
    } 
    else {
        const nextNum = num + 1;
        res.json({ message: nextNum, status: "success" });
    }
});

module.exports = app;