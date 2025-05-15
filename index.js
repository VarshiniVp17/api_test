const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors()); 
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Finally deployed my api🥹🥹');
});

app.get('/greet', (req, res) => {
  res.json({ message: 'testttt' });
});

app.post('/greet', (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Name is required!' });
    }
    res.json({ message: `Hello ${name}! This is Varshini’s API.` });
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
