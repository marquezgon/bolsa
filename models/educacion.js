const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Educacion = new Schema({
    school: { type: String, required: [true, 'El nombre del centro educativo es obligatorio'] },
    level: { type: String, enum: ['Secundaria', 'Bachillerato / Preparatoria', 'Técnico Superior', 'Certificación', 'Diplomado / Curso', 'Licenciatura', 'Maestría', 'Doctorado', 'Postgrado'], required: [true, 'El nivel de estudios es obligatorio'] },
    status: { type: String, enum: ['Terminado', 'Cursando', 'Abandonado'], required: [true, 'El estado de tu educación es obligatorio']},
    started: {type: Date, required: [true, 'La fecha de inicio es obligatoria'] },
    ended: {type: Date, required: [true, 'La fecha de culminación es obligatoria'] },
});

module.exports = Educacion;
