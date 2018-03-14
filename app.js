const express = require('express')

const graphqlHTTP = require('express-graphql')
const schema = require('./graphql/schema.js')

const index = require('./routes/index');
const users = require('./routes/users');
const graphql = require('./routes/graphql');

var app = express()

// Routes
app.use('/', index);
app.use('/users', users);
// app.use('/graphql', graphql);

// Graphql
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: {hello: () => {return 'Hello world!'}},
  graphiql: true,
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