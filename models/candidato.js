const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');
const ExperienciaLaboralSchema = require('./experiencia_laboral');
const EducacionSchema = require('./educacion');
const ConocimientosSchema = require('./conocimientos');
const IdiomaSchema = require('./idioma');

const Candidato = new Schema({
    email: {type: String, required: true, unique: true, lowercase: true},
    identity: { type: String, unique: true },
    name: String,
    lastname: String,
    gender: {type: String, enum: ['m', 'f']},
    localidad: String,
    zona: {type: String, enum: ['Alajuela', 'Cartago', 'Guanacaste', 'Heredia', 'Limón', 'Puntarenas', 'San José', 'Teletrabajo', 'Extranjero']},
    birthdate: Date,
    nationality: String,
    phone: String,
    secondary_phone: String,
    civil_status: {type: String, enum: ['Soltero', 'Casado', 'Separado', 'Viudo']},
    created: Date,
    updated: Date,
    experience: [ExperienciaLaboralSchema],
    education: [EducacionSchema],
    languages: [IdiomaSchema],
    skills: [ConocimientosSchema],
    status: {type: String, enum: ['active', 'inactive'], default: 'active'},
    scope: {type: String, default: 'candidato'}
});

Candidato.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('candidato', Candidato);
