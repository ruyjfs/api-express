const {
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql/type')
const model = require('../model/email')
// const db = require('../../db')
// const collection = db.collection('email')

module.exports = {
  type: new GraphQLList(model),
  args: {id: {name: 'id', type: GraphQLInt}},
  resolve: (parentValues, args) => {
    // return collection.find(args)
  }
}
