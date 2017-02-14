const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienciaLaboralSchema = new Schema ({
    company: { type: String, required: [true, 'El nombre de la empresa es obligatorio'] },
    area: { type: String, required: [true, 'El area dentro de la empresa es obligatorio'] },
    position: { type: String, required: [true, 'El cargo dentro de la empresa es obligatorio'] },
    started: {type: Date, required: [true, 'La fecha de inicio es obligatoria'] },
    ended: {type: Date, required: [true, 'La fecha de culminación es obligatoria'] },
    stillWorking: { type: Boolean, default: false }
});

module.export = ExperienciaLaboralSchema;
