require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello my dear husbanddd❤️❤️❤️❤️');
});

app.get('/greet', (req, res) => {
  res.json({ message: 'Finally deployed my api🥹🥹 done my punishment😌😌😌' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
