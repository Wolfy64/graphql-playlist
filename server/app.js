const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true
  })
)

app.get('/', function(req, res) {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log(`Server running on port: 3000`)
})
