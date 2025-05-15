const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Varshini\'s API!');
});

app.get('/greet', (req, res) => {
  res.json({ message: 'Hi, this is a public API by Varshini!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
