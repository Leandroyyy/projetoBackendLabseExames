const mongoose = require('mongoose')

const examesSchema = new mongoose.Schema({

    nome: {type : String},
    tipo: {type: String, required: true},
    status:{type: Boolean, required: true, default: 1}

}) 

module.exports = mongoose.model("Exames" , examesSchema)