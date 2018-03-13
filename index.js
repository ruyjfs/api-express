const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const mongoose = require('mongoose')

const schema = require('./graphql/schema.js')


var app = express()

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!'
  },
}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

// var MongoClient = require('mongodb').MongoClient;

// import schema from 'schema'

// Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }))

// mongoose.connect('mongodb://172.17.0.2:27017/local')
// var db = mongoose.connection;
// db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
// db.once('open', () => {
//  console.log( '+++Connected to mongoose')
// })


app.use((req, res, next) => {
  res.status(404).send('Sorry cant find that!')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


// app.post('/save-user',(req,res)=>{
//   // Insert into TodoList Collection
//   var userItem = new ToDo({
//    id:1,
//    name: "Ruy teste",
//   })
//   userItem.save((err,result)=> {
//    if (err) {console.log("---TodoItem save failed " + err)}
//    console.log("+++TodoItem saved successfully "+todoItem.item)
//  res.redirect('/')
//   })
//  })

const port = process.env.PORT || 4000
app.listen(port, console.log(`Running a GraphQL API server at localhost:${port}/graphql`))