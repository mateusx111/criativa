//usei o express para criar configurar meu servidor
const express = require("express")
const server = express()

//configura arquivos estaticos:(css,scripts, imagens)
server.use(express.static("public"))

//Criewi uima rota "/"
// e capturei o pedido do cliente para responder
server.get("/", function (req, res) {
  return res.sendFile(__dirname + "/index.html")
})

server.get("/ideias", function (req, res) {
  return res.sendFile(__dirname + "/ideias.html")
})

//liguei meu servidor na porta 3000
server.listen(3000)
