// const Schema = mongoose.Schema;
// // create a schema
// const newSchema = new Schema({
//     id: Number,
//     name: String,
//     username: String
// }, {collection:"user"});
// // we need to create a model using it
// let User = mongoose.model('user', newSchema)
// export default User

var userType = new GraphQLObjectType({
  name: 'User',
  description: 'user collection',
  fields: () => ({
    id: {
      type: (GraphQLInt),
      description: 'The id.',
    },
    name: {
      type: GraphQLString,
      description: 'The name.',
    }
  })
});