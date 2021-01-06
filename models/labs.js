const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')


const labSchema = new mongoose.Schema({

    nome: { type: String },
    endereco: {type: String},
    status: { type: Boolean, required: [false, 'Informe o status do Laborátorio!']},
    exames: {type:Array, default:[]},

})

module.exports = mongoose.model('Labs', labSchema)