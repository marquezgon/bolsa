const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');
const ExperienciaLaboralSchema = require('./experiencia_laboral');
const EducacionSchema = require('./educacion');
const ConocimientosSchema = require('./conocimientos');
const IdiomaSchema = require('./idioma');

const Candidato = new Schema({
    email: {type: String, required: true, unique: true, lowercase: true},
    name: String,
    lastname: String,
    gender: {type: String, enum: ['m', 'f']},
    city: String,
    zip: {type: String, maxlength: 5},
    state: String,
    country: String,
    birthdate: Date,
    nationality: String,
    phone: String,
    secondary_phone: String,
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
