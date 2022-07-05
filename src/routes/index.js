const express = require("express");
const router = express.Router();
const axios = require('axios')
const {Roupa, Cliente} = require("../models/lojavue");



async function ShowProducts(req, res) {
  const products = await Roupa.find();
  console.log(products);
  res.json(products);
}
async function ShowRoupa(req, res) {
    const valor = req.params.id
    const roupa = await Roupa.findOne({_valor: valor});
    console.log(roupa);
    res.json(roupa);
}

async function AddCliente(req, res) {
  const {nome, datadenascimento, CPF, endereco} = req.body
  const cliente = {
    nome,
    datadenascimento,
    CPF,
    endereco
  }
  try {
      console.log(cliente)
      await Cliente.create(cliente)
      res.status(201).json({ message: 'Cliente inserida no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  
}

async function AddRoupa(req, res) {
    const {tipo, quantidade, valor} = req.body
    const roupa = {
      tipo,
      quantidade,
      valor
    }
    try {
        console.log(roupa)
        await Roupa.create(roupa)
        res.status(201).json({ message: 'Roupa inserida no sistema com sucesso!' })
      } catch (error) {
        res.status(500).json({ erro: error })
      }
    
}



router.get("/", (req, res) => {
  res.status(200).send("Ok");
});

router.get("/roupas", ShowProducts);
router.get("/roupa/:id", ShowRoupa);
router.post("/roupa", AddRoupa)
router.post("/cliente", AddCliente)

module.exports = router;
