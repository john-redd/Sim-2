require('dotenv').config();

const express = require('express'),
      massive = require('massive'),
      app = express(),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      ctrl = require('./controllers/controller');

app.use(express.json());

massive(CONNECTION_STRING)
.then(db => {
  app.set('db', db)
  console.log('Database connected.')
})
.catch(err => console.log(err))

app.get('/api/houses', ctrl.getAllHouses);

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));