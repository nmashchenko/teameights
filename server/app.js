require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT || 5000

const app = express()

app.get('/test', (req, res) => {
  res.json({
    answer: 'server is up and working!'
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})