const express = require('express')

const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

var app = express()

// Graphql
const isDev = process.env.NODE_ENV !== 'production'
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: {hello: () => {return 'Hello world!'}},
  graphiql: isDev,
}))

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).send('Sorry cant find that!')
})

// render the error page
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const port = process.env.PORT || 4000
app.listen(port, console.log(`Running a GraphQL API server at localhost:${port}/graphql`))