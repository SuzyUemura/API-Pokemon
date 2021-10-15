const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API Pokémon online',
  })
})

app.use(
  express.json(),
  cors(),
  routes
  )

app.listen(3030, () => {
  console.log('API Iniciada: Porta 3030');
})