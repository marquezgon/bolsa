const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IdiomaSchema = new Schema({
    name: { type: String, enum: ['Inglés', 'Español', 'Francés', 'Portugués', 'Ruso', 'Chino', 'Alemán'], required: [true, 'El idioma es obligatorio'] },
    level: {type: String, enum: ['Básico', 'Intermedio', 'Nativo', 'Avanzado'], required: [true, 'El nivel del idioma es obligatorio']}
});

module.exports = IdiomaSchema;
