const graphql = require('graphql');
const GraphQLDate = require('graphql-date');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLList = graphql.GraphQLList;
const GraphQLString = graphql.GraphQLString;
const GraphQLNonNull = graphql.GraphQLNonNull;
const GraphQLFloat = graphql.GraphQLFloat;
const GraphQLBoolean = graphql.GraphQLBoolean;
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
        school: { type: GraphQLString },
        level: { type: GraphQLString },
        status: { type: GraphQLString },
        started: { type: GraphQLDate },
        ended: { type: GraphQLDate }
      },
      resolve(parentValue, args) {
        return (
          Candidato.findById('58daa2b43553b285e95d5cdc').then((candidato) => {
            candidato.education.push({ school: args.school, level: args.level, status: args.status, started: new Date(), ended: new Date() });
            candidato.save();
            return candidato;
          })
        )
      }
    },
    addExperienciaLaboral: {
      type: CandidatoType,
      args: {
        empresa: { type: GraphQLString },
        giro: { type: GraphQLString },
        puesto: { type: GraphQLString },
        inicio: { type: GraphQLDate },
        termino: { type: GraphQLDate },
        descripcion: { type: GraphQLString },
        salario: { type: GraphQLFloat },
        sigue_laborando: { type: GraphQLBoolean }
      },
      resolve(parentValue, args) {
        return (
          Candidato.findById('58daa2b43553b285e95d5cdc').then((candidato) => {
            candidato.experience.push({ empresa: args.empresa, giro: args.giro, puesto: args.puesto, inicio: new Date(), termino: new Date(), descripcion: args.descripcion, salario: args.salario, sigue_laborando: args.sigue_laborando });
            candidato.save();
            return candidato;
          })
        )
      }
    }
  }
})

module.exports = mutation;
