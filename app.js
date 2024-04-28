const estatusPedido = () => {
  return Math.random() < 0.8
}

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve('¡Pedido exitoso! Su pizza está en camino')
    } else {
      reject('Ocurrió un error. Por favor intente nuevamente')
    }
  }, 3000);
})

const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion)
}

const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError)
}

miPedidoDePizza.then(manejarPedido, rechazarPedido)

// Alternativa más compacta
miPedidoDePizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion)
  })
  .then(null, (mensajeDeError) => {
    console.log(mensajeDeError)
  })