const {GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} = require('graphql/type')
const model = require('../model/user')
const db = require('../../db')
// const collection = db.collection('user')
console.info(db)
module.exports = {
  userSave: {
    type: model,
    args: {
      id: {type: GraphQLInt},
      username: {type: new GraphQLNonNull(GraphQLString)},
      password: {type: new GraphQLNonNull(GraphQLString)},
      name: {type: new GraphQLNonNull(GraphQLString)},
      lastName: {type: new GraphQLNonNull(GraphQLString)},
      date: {type: new GraphQLNonNull(GraphQLString)},
    },
    resolve: (parentValues, args) => {
      // const res = collection.insert(collection).then((teste) =>{
      //   console.info(teste)
      // })
      // console.log(res)
      // return prepare(collection.findOne({_id: res.insertedIds[1]}))
    }
  },
}
// module.exports = {
//   type: new GraphQLObjectType({
//     name: 'UserMutation',
//     fields: {
//       save: {
//         type: model,
//         args: {
//           id: {type: GraphQLInt},
//           username: {type: new GraphQLNonNull(GraphQLString)},
//           password: {type: new GraphQLNonNull(GraphQLString)},
//           name: {type: new GraphQLNonNull(GraphQLString)},
//           lastName: {type: new GraphQLNonNull(GraphQLString)},
//           date: {type: new GraphQLNonNull(GraphQLString)},
//         },
//         resolve: (parentValues, args) => {
//           const res = collection.insert(collection)
//           console.log(res)
//           return prepare(collection.findOne({_id: res.insertedIds[1]}))
//         }
//       },
//       delete: {
//         type: model,
//         args: {
//           id: {
//             name: 'id',
//             type: GraphQLInt
//           }
//         },
//         resolve: (parentValues, args) => {
//           console.log(args)
//           return model
//         }
//       }
//     }
//   })
// }
