const {
  GraphQLList,
  GraphQLInt,
} = require('graphql/type')
const model = require('../model/user')
const db = require('../../db')
// const collection = db.collection('user')

module.exports = {
  type: new GraphQLList(model),
  args: {id: {name: 'id', type: GraphQLInt}},
  resolve: (parentValues, args) => {
    // return collection.find(args)
  }
}
