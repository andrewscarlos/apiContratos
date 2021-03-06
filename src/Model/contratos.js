const mongoose = require('mongoose')

// cria uma colection no mongo

const ContratosSchema = new mongoose.Schema({

    state:{type: String, default: 'Create'},

    nome: { type: String, required: true },
    email: { type: String, required: true },
    cpf: { type: String, required: true },
    valorEmprestimo: { type: Number, required: true },

    rendaMensal: { type: Number, default: null},
    dataNascimento: { type: Date, default: null }, 
    estadoCivil: { type: String , default: null},
    endereco: {type: String, default: null},
    
    cNHorCPF: {type: String, default: null},
    comprovanteRenda: {type: String, default: null},
    imovel: { type: String, default: null},

    status: {type: String, default:'Analise'},
},{
    timestamps: true
})

const Contratos = mongoose.model('Contratos', ContratosSchema)

module.exports = Contratos