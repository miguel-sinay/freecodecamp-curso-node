const fs = require('fs')

fs.appendFile('index.html', '<p>Hola</p>', (err) => {
  if (err) throw err
  console.log('Archivo actualizado')
})