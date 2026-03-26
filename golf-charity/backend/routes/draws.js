const express = require('express');
const router = express.Router();

router.post('/run', (req, res) => res.json({ message: "Draw executed" }));

module.exports = router;
