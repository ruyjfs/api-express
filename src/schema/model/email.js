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
  name: 'Email',
  fields: () => ({
    id: {type: GraphQLInt},
    userId: {type: new GraphQLNonNull(GraphQLInt)},
    name: {type:  new GraphQLNonNull(GraphQLString)},
    createdAt: {type: GraphQLString},
  })
})