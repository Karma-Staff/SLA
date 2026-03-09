const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Root route to fix "Cannot GET /"
app.get('/', (req, res) => {
  res.send('SLA Backend is up and running!');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SLA Backend is running' });
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
