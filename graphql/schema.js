const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql/type')


// const { buildSchema } = require('graphql')
// const mongoose = require('mongoose')

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

// mongoose.connect('mongodb://172.17.0.2:27017/local')
// var db = mongoose.connection;
// db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
// db.once('open', () => {
//  console.log( '+++Connected to mongoose')
// })

// Data User Mock
const users = [
  {id:1, name: "Ryu", username: "ryu", email:"", age: 28},
  {id:1, name: "Ken", username: "ken", email:"", age: 28},
  {id:1, name: "Shunli", username: "shunli", email:"", age: 28},
]

// User type
const userType = new GraphQLObjectType({
  name: 'user',
  description: 'user collection',
  fields: () => ({
    id: {type: GraphQLInt},
    username: {type: new GraphQLNonNull(GraphQLString)},
    password: {type: GraphQLString},
    name: {type: GraphQLString},
    lastName: {type: GraphQLString},
    date: {type: GraphQLInt},
    // email: {type: GraphQLList},
    // adress: {type: GraphQLList},
    createdAt: {type: GraphQLString},
  })
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    user: {
      type: new GraphQLObjectType({
        name: 'userCrud',
        fields: {
          save: {
            type: new GraphQLList(userType),
            args: {
              id: {
                name: 'id',
                type: GraphQLInt
              }
            },
            resolve: (parentValues, args) => {
              return users
            }
          },
          delete: {
            type: new GraphQLList(userType),
            args: {
              id: {
                name: 'id',
                type: GraphQLInt
              }
            },
            resolve: (parentValues, args) => {
              return users
            }
          }
        }
      })
    },
  }
})
// const mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     userSave: {
//       type: new GraphQLList(userType),
//       args: {
//         id: {
//           name: 'id',
//           type: GraphQLInt
//         }
//       },
//       resolve: (parentValues, args) => {
//         return users
//       }
//     },
//     userDelete: {
//       type: new GraphQLList(userType),
//       args: {
//         id: {
//           name: 'id',
//           type: GraphQLInt
//         }
//       },
//       resolve: (parentValues, args) => {
//         return users
//       }
//     },
//   }
// })

const schema = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      user: {
        type: new GraphQLList(userType),
        args: {
          id: {
            name: 'id',
            type: GraphQLInt
          }
        },
        resolve: (parentValues, args) => {
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
      },
      email: {
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
      },
      address: {
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
      },
      contact: {
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
      },
      message: {
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
      }
    }
});

module.exports = new GraphQLSchema({  
  query: schema,  
  mutation: mutation
})
