const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ExperienciaLaboralSchema = require('./experiencia_laboral');
const EducacionSchema = require('./educacion');
const ConocimientosSchema = require('./conocimientos');
const IdiomaSchema = require('./idioma');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const Candidato = new Schema({
    email: {type: String, required: true, unique: true, lowercase: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    gender: {type: String, enum: ['m', 'f'], default: 'm'},
    city: String,
    zip: {type: String, maxlength: 5},
    state: String,
    country: String,
    birthdate: Date,
    nationality: String,
    phone: String,
    created: Date,
    updated: Date,
    experience: [ExperienciaLaboralSchema],
    education: [EducacionSchema],
    languages: [IdiomaSchema],
    skills: [ConocimientosSchema],
    status: {type: String, enum: ['active', 'inactive'], default: 'active'},
    scope: {type: String, default: 'candidato'}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('candidato', Candidato);
