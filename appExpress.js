const express = require('express')
const app = express()

const usuarios = [
  "Juan",
  "Jocelyn",
  "Astrid",
  "María",
  "Ignacia",
  "Javier",
  "Brian"
]

app.listen(3000, () => {
  console.log('localhost/servidorExpress OK')
})
app.use(express.static('vista'))

app.get('/abracadabra/usuarios', (req, res) => {
  res.send(usuarios)
})

app.use('/abracadabra/juego/:usuario', (req, res, next) => {
  const usuario = req.params.usuario
  const revisarUsuario = usuarios.includes(usuario)

  revisarUsuario
  ? next() 
  : res.sendFile(__dirname + '/vistas/who.jpeg')
})
app.get('/abracadabra/juego/:usuario', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/abracadabra/conejo/:n', (req, res) => {
  const randomNumber = Math.floor(Math.random() *4) +1
  const numberParam = Number(req.params.n)

  numberParam ===randomNumber
  ? res.sendFile(__dirname + '/vista/conejito.jpg')
  : res.sendFile(__dirname + '/vista/voldemort.jpg')
})

app.get('*', (req, res) => {
  res.send('<center><h1>Esta página no existe</h1></center>')
})