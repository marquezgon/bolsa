const graphql = require('graphql');
const EducacionType = require('./educacion_type');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLList = graphql.GraphQLList;
const GraphQLString = graphql.GraphQLString;
const GraphQLID = graphql.GraphQLID;
const Candidato = require('../models/candidato');

const CandidatoType = new GraphQLObjectType({
  name:  'CandidatoType',
  fields: () => ({
    id: { type: GraphQLID },
    identity: { type: GraphQLString },
    email: { type: GraphQLString },
    education: {
      type: new GraphQLList(EducacionType)
    }
  })
});

module.exports = CandidatoType;
