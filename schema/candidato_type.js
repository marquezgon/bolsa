const graphql = require('graphql');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;
const GraphQLID = graphql.GraphQLID;

const CandidatoType = new GraphQLObjectType({
  name:  'CandidatoType',
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
  })
});

module.exports = CandidatoType;
