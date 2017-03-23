const graphql = require('graphql');
const GraphQLDate = require('graphql-date');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLList = graphql.GraphQLList;
const GraphQLString = graphql.GraphQLString;
const GraphQLNonNull = graphql.GraphQLNonNull;
const CandidatoType = require('./candidato_type');
const Candidato = require('../models/candidato');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCandidato: {
      type: CandidatoType,
      args: {
        email: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return (new Candidato({email: args.email, identity: "kakjsajk"})).save();
      }
    },
    addEducacion: {
      type: CandidatoType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        school: { type: GraphQLString },
        level: { type: GraphQLString },
        status: { type: GraphQLString },
        started: { type: GraphQLDate },
        ended: { type: GraphQLDate }
      },
      resolve(parentValue, args) {
        return (
          Candidato.findById(args.id).then((candidato) => {
            candidato.education.push({ school: args.school, level: args.level, status: args.status, started: new Date(), ended: new Date() });
            candidato.save();
            return candidato;
          })
        )
      }
    }
  }
})

module.exports = mutation;
