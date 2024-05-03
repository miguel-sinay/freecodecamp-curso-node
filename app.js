const http = require('http')

const servidor = http.createServer((req, res) => {
  console.log('===> res (solicitud)')
  console.log(res.getHeaders())
  console.log(res.statusCode)
  res.setHeader('content-type', 'application/json')
  console.log(res.getHeaders())
  res.end('Hola mundo')
})

const puerto = 3000
servidor.listen(puerto, () => {
  console.log('[INFO] Servidor listo a la espera de conexiones')
  console.log(`El servidor está escuchando en el puerto http://localhost:${puerto}...`)
})