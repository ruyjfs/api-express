const mongoose = require('mongoose')
const MONGO_URL = 'mongodb://172.17.0.3:27017/local'
mongoose.connect(MONGO_URL)
const db = mongoose.connection;
db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
db.once('open', () => {
 console.log( '+++Connected to mongoose')
})

// const {MongoClient, ObjectId} = require('mongodb')
// const MONGO_URL = 'mongodb://172.17.0.2:27017/local'
// const db = await MongoClient.connect(MONGO_URL)
// db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
// db.once('open', () => {
//  console.log( '+++Connected to mongoose')
// })

module.exports = db
// const Posts = db.collection('posts')
// const Comments = db.collection('comments')