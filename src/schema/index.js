const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql/type')
const query = require('./query')
const mutation = require('./mutation')

module.exports = new GraphQLSchema({  
  query: query,  
  mutation: mutation
})



  // resolve: (root, {id}, source, fieldASTs) => {
  //   var projections = getProjection(fieldASTs);
  //   var foundItems = new Promise((resolve, reject) => {
  //       User.find({id}, projections,(err, users) => {
  //           err ? reject(err) : resolve(users)
  //       })
  //   })
  //   return foundItems
  // }

  
// const mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     userSave: {
//       type: new GraphQLList(userType),
//       args: {
//         id: {
//           name: 'id',
//           type: GraphQLInt
//         }
//       },
//       resolve: (parentValues, args) => {
//         return users
//       }
//     },
//     userDelete: {
//       type: new GraphQLList(userType),
//       args: {
//         id: {
//           name: 'id',
//           type: GraphQLInt
//         }
//       },
//       resolve: (parentValues, args) => {
//         return users
//       }
//     },
//   }
// })


// const Schema = mongoose.Schema;
// // create a schema
// const newSchema = new Schema({
//     id: Number,
//     name: String,
//     username: String
// }, {collection:"user"});
// // we need to create a model using it
// let User = mongoose.model('user', newSchema)
// export default User

// var userType = new GraphQLObjectType({
//   name: 'User',
//   description: 'user collection',
//   fields: () => ({
//     id: {
//       type: (GraphQLInt),
//       description: 'The id.',
//     },
//     name: {
//       type: GraphQLString,
//       description: 'The name.',
//     }
//   })
// });