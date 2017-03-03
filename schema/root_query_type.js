const graphql = require('graphql');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLList = graphql.GraphQLList;
const GraphQLID = graphql.GraphQLID;
const GraphQLNonNull = graphql.GraphQLNonNull;
const CandidatoType = require('./candidato_type');
const Candidato = require('../models/candidato.js');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    candidatos: {
      type: new GraphQLList(CandidatoType),
      resolve() {
        return Candidato.find({});
      }
    },
  })
});

module.exports = RootQuery;
