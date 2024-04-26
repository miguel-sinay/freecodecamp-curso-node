function mostrarTema(tema) {
  console.log(`Extoy aprendiendo ${tema}`)
}

function sumar(a, b) {
  console.log(a + b)
}

setTimeout(mostrarTema, 2000, 'Node.js')
setTimeout(sumar, 3000, 5, 6);

console.log('Proceso raíz completado ;-)')