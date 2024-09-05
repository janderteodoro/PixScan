const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.json({ limit: '10mb'}))
app.use(routes)

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})