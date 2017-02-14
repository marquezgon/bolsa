const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConocimientosSchema = new Schema({
    skill: { type: String }
});

module.exports = ConocimientosSchema;
