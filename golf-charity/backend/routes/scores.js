const express = require('express');
const router = express.Router();

router.post('/', (req, res) => res.json({ message: "Score submitted" }));
router.get('/', (req, res) => res.json({ message: "Scores retrieved" }));

module.exports = router;
