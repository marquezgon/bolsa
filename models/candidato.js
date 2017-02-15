const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const Candidato = new Schema({
    email: {type: String, required: true, unique: true, lowercase: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    lastname: {type: String, required: true},
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('candidato', Candidato);
