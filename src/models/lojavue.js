const mongoose = require('../db/conection')
const { Schema } = mongoose

const Roupa = mongoose.model(
  'roupas',
  new Schema({
    tipo: {
      type: String,
      required: true,
    },
    quantidade: {
      type: Number,
      required: true,
    },
    valor: {
      type: Number,
      required: true,
    }
  }),
)
const Cliente = mongoose.model(
  'clientes',
  new Schema({
    nome: {
      type: String,
      required: true,
    },
    datadenascimento: {
      type: Date,
      required: true,
    },
    CPF: {
      type: Number,
      required: true,
    },
    endereco:{  
      rua: String,
      bairro: String,
      estado: String,
      CEP: String
    }
  }),
)
module.exports = {Roupa, Cliente}