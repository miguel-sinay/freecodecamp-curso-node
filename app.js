const fs = require('fs')

fs.readFile('index.html', 'utf-8', (err, contenido) => {
  if (err) throw err
  console.log(contenido)
})