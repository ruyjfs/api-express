const {
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql/type')
const model = require('../model/email')

module.exports = {
  type: new GraphQLList(model),
  args: {
    id: {name: 'id', type: GraphQLInt}
  },
  resolve: (parentValues, args) => {
    console.info(args)
    return [
      {id:1, name: "Ryu", username: "ryu", email:"", age: 28},
      {id:1, name: "Ken", username: "ken", email:"", age: 28},
      {id:1, name: "Shunli", username: "shunli", email:"", age: 28},
    ]
  }
}