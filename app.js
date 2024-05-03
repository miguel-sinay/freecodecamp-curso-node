const http = require('http')
const {infoCursos} = require('./cursos')

const servidor = http.createServer((req, res) => {
  const {method} = req;
  switch(method) {
    case 'GET':
      return manejarSolicitudGET(req, res)
    case 'POST':
      return manejarSolicitudPOST(req, res)
    case 'PUT':
      return manejarSolicitudPUT(req, res)
    default:
      res.statusCode = 501
      return res.end(`El método no puede ser manejado por el servidor: ${method}`)
  }
})

function manejarSolicitudGET(req, res) {
  const path = req.url

  console.log(req.statusCode) // 200 OK Asignado por defecto

  if(path === '/') {
    res.writeHead(200, {'Content-Type': 'application/json'})
    return res.end('Bienvenidos a mi primer servidor y API creados con Node.js')
  } else if (path === '/cursos') {
    res.setHeader('content-type', 'application/json')
    return res.end(JSON.stringify(infoCursos))
  } else if (path === '/cursos/programacion') {
    return res.end(JSON.stringify(infoCursos.programacion))
  } else if (path === '/cursos/matematicas') {
    return res.end(JSON.stringify(infoCursos.matematicas))
  }

  res.statusCode = 404
  return res.end('El recurso solicitado no existe.')
}

function manejarSolicitudPOST(req, res) {
  const path = req.url

  if (path === '/cursos/programacion') {
    res.statusCode = 201 // Nuevo recurso creado
    let cuerpo = ''
    req.on('data', contenido => {
      cuerpo += contenido.toString()
    })
    req.on('end', () => {
      console.log(cuerpo)
      console.log(typeof cuerpo)

      cuerpo = JSON.parse(cuerpo)
      console.log(typeof cuerpo)
      console.log(cuerpo.titulo)
      res.end(`El servidor recibió una solicitud ${req.method} para ${path}`)
    })
    //return res.end(`El servidor recibió una solicitud ${req.method} para ${path}`)
  }
}

function manejarSolicitudPUT(req, res) {
  const path = req.url

  if (path === '/cursos/programacion') {
    return res.end(`El servidor recibió una solicitud ${req.method} para ${path}`)
  }
}

const PUERTO = 3000
servidor.listen(PUERTO, () => {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}...`)
})