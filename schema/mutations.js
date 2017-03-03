const graphql = require('graphql');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLList = graphql.GraphQLList;
const GraphQLString = graphql.GraphQLString;
const CandidatoType = require('./candidato_type');
const Candidato = require('../models/candidato.js');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCandidato: {
      type: CandidatoType,
      args: {
        email: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return (new Candidato({email: args.email})).save();
      }
    }
  }
})

module.exports = mutation;
