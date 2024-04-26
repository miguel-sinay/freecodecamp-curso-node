const fs = require('fs')

// Lectura de archivo
console.log('Antes de leer el archivo')
fs.readFileSync('index.html', 'utf-8', (err, contenido) => {
  if (err) throw err
  console.log('Archivo leído')
})
console.log('Después de leer el archivo')

// Cambiar nombre de archivo
fs.renameSync('index.html', 'main.html', (err) => {
  if (err) throw err
  console.log('Nombre cambiado exitosamente')
})
console.log('Después de cambiar nombre al archivo')

// Agregación de contenido al archivo
fs.appendFileSync('index.html', '<p>Hola</p>', (err) => {
  if (err) throw err
  console.log('Archivo actualizado')
})
console.log('Después de agregar contenido al archivo')

// Reemplazo de contenido del archivo
fs.writeFileSync('index.html', 'Contenido nuevo', (err) => {
  if (err) throw err
  console.log('Contenido reemplazado satisfactoriamente')
})
console.log('Después de reemplazar contenido del archivo')

// Eliminación de archivo
fs.unlinkSync('main.html', (err) => {
  if (err) throw err
  console.log('Archivo eliminado')
})
console.log('Después de eliminar archivo')