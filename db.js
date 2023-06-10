const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./criativa.db')

db.serialize(function () {

  //Cria a tabela
  db.run(`
      CREATE TABLE IF NOT EXISTS ideas(
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           image TEXT,
           title TEXT,
           category TEXT,
           description TEXT,
           link TEXT
      );
  `)

  //Inserir dados na tabela
//   const query = `
//   INSERT INTO ideas(
//     image, title, category, description, link
//   ) VALUES(?,?,?,?,?);
// `
//   const values = [
//     "https://cdn-icons-png.flaticon.com/128/8263/8263115.png",
//     "Cursos de Programção",
//     "Estudo",
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae",
//     "https://github.com/"
//   ]
//   db.run(query, values, function (err) {
//     if (err) return console.log(err)

//     console.log(this)
//   })

  //Deletar dado na tabela
  // db.run(`DELETE FROM ideas WHERE id = ?`, [ 1 ], function (err) {
  //   if (err) return console.log(err)

  //   console.log("Deletei", this)
  // });

  //consultar dado na tabela
  // db.all(`SELECT * FROM ideas`, function (err, rows) {
  //   if (err) return console.log(err)

  //   console.log(rows)
  // })



})

module.exports = db