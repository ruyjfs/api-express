const {GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} = require('graphql/type')
const userMutation = require('./user')
const model = require('../model/user')

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: userMutation
})
