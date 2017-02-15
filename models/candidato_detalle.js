const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ExperienciaLaboralSchema = require('./experiencia_laboral');
const EducacionSchema = require('./educacion');
const ConocimientosSchema = require('./conocimientos');
const IdiomaSchema = require('./idioma');

const CandidatoDetalle = new Schema({
    candidate: { type: Schema.Types.ObjectId, ref: 'candidato' },
    gender: {type: String, enum: ['m', 'f'], default: 'm'},
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

module.exports = mongoose.model('candidatoDetalle', CandidatoDetalle);
