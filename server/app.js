require('dotenv').config()
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

// connect to mongoDB Atlas database
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('Connected to database')
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.get('/', function(req, res) {
  res.send('Hello World')
})

app.listen(4000, () => {
  console.log(`Server running on port: 4000`)
})
