const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql/type')

module.exports = new GraphQLObjectType({
  name: 'User',
  description: 'user collection',
  fields: {
    id: {type: GraphQLInt},
    username: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: new GraphQLNonNull(GraphQLString)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    lastName: {type: new GraphQLNonNull(GraphQLString)},
    date: {type: new GraphQLNonNull(GraphQLInt)},
    // email: {type: GraphQLList},
    // adress: {type: GraphQLList},
    createdAt: {type: GraphQLString},
  }
})

