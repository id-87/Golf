const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

app.use('/api/users', require('./routes/users'));
app.use('/api/scores', require('./routes/scores'));
app.use('/api/draws', require('./routes/draws'));
app.use('/api/charities', require('./routes/charities'));
app.use('/api/subscriptions', require('./routes/subscriptions'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
