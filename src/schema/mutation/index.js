const {GraphQLObjectType} = require('graphql/type')
const userMutation = require('./user')

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    user: userMutation,
  },
})
