const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql/type')

// import User from 'users'

/**
 * generate projection object for mongoose
 * @param  {Object} fieldASTs
 * @return {Project}
 */
// export function getProjection (fieldASTs) {
//   return fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
//     projections[selection.name.value] = true;
//     return projections;
//   }, {});
// }

// Data User Mock
const users = [
  {id:1, name: "Ryu", email:"", age: 28},
  {id:1, name: "Ken", email:"", age: 28},
  {id:1, name: "Shunli", email:"", age: 28},
]

// User type
const userType = new GraphQLObjectType({
  name: 'user',
  description: 'user collection',
  fields: () => ({
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    age: {type: GraphQLInt}
  })
})

const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      user: {
        type: new GraphQLList(userType),
        args: {
          id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve: (root, args) => {
          return users
        }
        // resolve: (root, {id}, source, fieldASTs) => {
        //   var projections = getProjection(fieldASTs);
        //   var foundItems = new Promise((resolve, reject) => {
        //       User.find({id}, projections,(err, users) => {
        //           err ? reject(err) : resolve(users)
        //       })
        //   })
        //   return foundItems
        // }
      }
    }
  })
  
});

module.exports = Schema
