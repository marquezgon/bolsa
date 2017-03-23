const graphql = require('graphql');
const GraphQLDate = require('graphql-date');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;

const EducacionType = new GraphQLObjectType({
  name: 'EducacionType',
  fields: () => ({
    school: {type: GraphQLString },
    level: { type: GraphQLString },
    status: { type: GraphQLString },
    started: { type: GraphQLDate },
    ended: { type: GraphQLDate }
  })
})

module.exports = EducacionType;
