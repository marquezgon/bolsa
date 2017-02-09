var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    username: {type: String, required: true, unique: true, lowercase: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    gender: {type: String, enum: ['m', 'f'], default: 'm', required: true},
    scope: {type: String, required: true},
    status: {type: Number, required: true},
    created: {type: Date, required: true},
    updated: {type: Date, required: true}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);
