const fs = require('fs')

// Lectura de archivo
console.log('Antes de leer el archivo')
const archivo = fs.readFileSync('index.html', 'utf-8')
console.log(archivo)
console.log('Después de leer el archivo')

// Cambiar nombre de archivo
fs.renameSync('index.html', 'main.html')
console.log('Después de cambiar nombre al archivo')

// Agregación de contenido al archivo
fs.appendFileSync('index.html', '<p>Hola</p>')
console.log('Después de agregar contenido al archivo')

// Reemplazo de contenido del archivo
fs.writeFileSync('index.html', 'Contenido nuevo')
console.log('Después de reemplazar contenido del archivo')

// Eliminación de archivo
fs.unlinkSync('main.html')
console.log('Después de eliminar archivo')