//usei o express para criar configurar meu servidor
const express = require("express")
const server = express()

const db = require("./db.js")

//const ideas = [
//   {
//     img: "https://cdn-icons-png.flaticon.com/128/8263/8263115.png",
//     title: "Cursos de Programção",
//     category: "Estudo",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae",
//     url: "https://github.com/",
//   },
//   {
//     img: "https://cdn-icons-png.flaticon.com/128/1896/1896290.png",
//     title: "Acamp's Shalom",
//     category: "Acampamento",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae",
//     url: "https://github.com/",
//   },
//   {
//     img: "https://cdn-icons-png.flaticon.com/128/7803/7803739.png",
//     title: "Exercícios",
//     category: "Saúde",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae",
//     url: "https://github.com/",
//   },
//   {
//     img: "https://cdn-icons-png.flaticon.com/128/2558/2558332.png",
//     title: "Fotos",
//     category: "Fotografía",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae",
//     url: "https://github.com/",
//   },
//]

//configura arquivos estaticos:(css,scripts, imagens)
server.use(express.static("public"))

//confugutação do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
  express: server,
  noCache: true,
})

//Criewi uima rota "/"
// e capturei o pedido do cliente para responder
server.get("/", function (req, res) {



  db.all(`SELECT * FROM ideas`, function (err, rows) {

    if (err) {
      console.log(err)
      return res.send("Erro no banco de dados!!!")
    }

    const reversedIdeas = [ ...rows ].reverse()
    let lastIdeas = [];
    for (let idea of reversedIdeas) {
      if (lastIdeas.length < 2) {
        lastIdeas.push(idea)
      }
    }

    return res.render("index.html", { ideas: lastIdeas })
  })
})



server.get("/ideias", function (req, res) {

  db.all(`SELECT * FROM ideas`, function (err, rows) {
    if (err) {
      console.log(err)
      return res.send("Erro no banco de dados!!!")
    }

    const reversedIdeas = [ ...rows ].reverse()
    return res.render("ideias.html", { ideas: reversedIdeas })
  })
})

//liguei meu servidor na porta 3000
server.listen(3000)
