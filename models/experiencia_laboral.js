const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienciaLaboral = new Schema ({
    _id: { type: Schema.ObjectId },
    empresa: { type: String, required: [true, 'El nombre de la empresa es obligatorio'] },
    giro: { type: String, required: [true, 'El giro de la empresa es obligatorio'] },
    puesto: { type: String, required: [true, 'El puesto dentro de la empresa es obligatorio'] },
    inicio: {type: Date, required: [true, 'La fecha de inicio es obligatoria'] },
    termino: {type: Date },
    descripcion: { type: String },
    salario: { type: String },
    sigue_laborando: { type: Boolean, default: false }
});

module.export = ExperienciaLaboral;
