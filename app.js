function mostrarTema(tema) {
  console.log(`Extoy aprendiendo ${tema}`)
}

console.log('Antes de setImmediate()')
setImmediate(mostrarTema, 'Node.js')
console.log('Después de setImmediate()')