const fs = require('fs')

fs.readFile('index.html', 'utf-8', (err, contenido) => {
  if (err) {
    console.error(err)
    // O también se puede emplear throw err.
    // Considerar que este detiene la ejecución completa
  }
  else console.log(contenido)
  console.log('Mensaje...')
})