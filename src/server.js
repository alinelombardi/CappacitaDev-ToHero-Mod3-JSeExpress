const express = require('express')
const app = express()
const dataBase = require('./database')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))


//mostrar todos os pokemons
app.get('/pokemons',(req,res) =>{
  res.send(dataBase.mostrarPokemons())
})

//mostrar um pokemon pelo id
app.get('/pokemons/:id',(req,res) =>{
  res.send(dataBase.mostrarPokemon(req.params.id))
})

//cadastrar pokemon
app.post('/pokemons/',(req,res) =>{
  const pokemon = dataBase.salvarPokemons({
    nome: req.body.nome,
    tipo: req.body.tipo
  })
  res.send(pokemon)
})

//atualizar pokemon
app.put('/pokemons/:id',(req,res) =>{
  const pokemon = dataBase.atualizarPokemon(req.params.id,{
    nome: req.body.nome,
    tipo: req.body.tipo,
    id: parseInt(req.params.id)
  })
  res.send(pokemon)
})

app.delete('/pokemons/:id',(req,res) =>{
  res.send(dataBase.)
  
  })
  
})

app.listen(3003)