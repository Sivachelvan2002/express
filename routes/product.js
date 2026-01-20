const express = require('express');
const route = express.Router();

route.get('/getproduct', (req, res) => {
    res.status(200).json({ message: "Product route works!" });
})