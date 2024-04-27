let infoCurso = {
  "titulo": "Aprende Node.js",
  "numVistas": 45642,
  "numLikes": 21123,
  "temas": [
    "JavaScript",
    "Node.js"
  ],
  "esPublico": true
}
console.log(typeof infoCurso)
// Hasta aquí es un objeto de JavaScript en la memoria de la computadora,
// no es un texto adecuado para intentar transmitirlo a un servidor


// Objeto -> Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso)
console.log(infoCursoJSON)
console.log(typeof infoCursoJSON)
// Ahora sí es una cadena de texto en formato JSON apta para su transmisión

// Cadena de caracteres -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON)
console.log(infoCursoObjeto)
console.log(typeof infoCursoObjeto)
// Esto es util en caso de recibir texto en formato JSON de un servidor
// y sea necesario convertirla a objeto de JavaScript
console.log(infoCursoObjeto.titulo)