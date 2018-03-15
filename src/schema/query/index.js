const {GraphQLObjectType} = require('graphql/type')
const userQuery = require('./user')
const emailQuery = require('./email')
module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: userQuery,
    email: emailQuery,
  }
})
