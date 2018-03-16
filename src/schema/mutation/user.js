const {GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} = require('graphql/type')
const model = require('../model/user')
const db = require('../../db')
const collection = db.collection('user')

module.exports = {
  type: new GraphQLObjectType({
    name: 'UserMutation',
    fields: {
      save: {
        type: new GraphQLList(model),
        args: {
          id: {name: 'id', type: GraphQLInt},
          username: {name: 'username', type: new GraphQLNonNull(GraphQLString)},
          password: {name: 'password', type: new GraphQLNonNull(GraphQLString)},
          name: {name: 'name', type: new GraphQLNonNull(GraphQLString)},
          lastName: {name: 'lastName', type: new GraphQLNonNull(GraphQLString)},
          date: {name: 'date', type: new GraphQLNonNull(GraphQLString)},
        },
        resolve: (parentValues, args) => {
          const res = collection.insert(collection)
          // console.info(res)
          return prepare(collection.findOne({_id: res.insertedIds[1]}))
        }
      },
      delete: {
        type: new GraphQLList(model),
        args: {
          id: {
            name: 'id',
            type: GraphQLInt
          }
        },
        resolve: (parentValues, args) => {
          console.log(args)
          return model
        }
      }
    }
  })
}
