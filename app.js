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
  .catch((mensajeDeError) => {
    console.log(mensajeDeError)
  })
  // Nótese que aquí se practica el Encadenamiento de Métodos (Method Chaining)

  // Y si se quiere compactar aún más, aprovechar los métodos manejadores de arriba
  miPedidoDePizza.then(manejarPedido).catch(rechazarPedido)