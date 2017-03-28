const graphql = require('graphql');
const GraphQLDate = require('graphql-date');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;
const GraphQLFloat = graphql.GraphQLFloat;
const GraphQLBoolean = graphql.GraphQLBoolean;

const ExperienciaType = new GraphQLObjectType({
  name: 'ExperienciaType',
  fields: () => ({
    empresa: { type: GraphQLString },
    giro: { type: GraphQLString },
    puesto: { type: GraphQLString },
    inicio: { type: GraphQLDate },
    termino: { type: GraphQLDate },
    descripcion: { type: GraphQLString },
    salario: { type: GraphQLFloat },
    sigue_laborando: { type: GraphQLBoolean }
  })
});

module.exports = ExperienciaType;
