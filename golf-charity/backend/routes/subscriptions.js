const express = require('express');
const router = express.Router();

router.post('/checkout', (req, res) => res.json({ message: "Checkout initiated" }));

module.exports = router;
