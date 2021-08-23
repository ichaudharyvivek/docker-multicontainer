const mongoose = require('mongoose');
const express = require('express');
const PORT = 3000;
const DATABASE = 'mongodb://mongodb:27017/multi-container-DB';

mongoose
  .connect(DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB Connected!');
  })
  .catch(() => {
    console.log('Error in DB Connection');
  });

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'You are visiting the root route' });
});

app.listen(PORT, () => {
  console.log('Server Started at Port:', PORT);
});
