const aplicarEvaluacion = new Promise((resolve, reject) => {

  const evaluacion = true

  if(evaluacion) {
    resolve('Evaluación aplicada')
  } else {
    reject('No se puedo aplicar la evaluación')
  }

})

aplicarEvaluacion
  .then(resultado => evaluacion(resultado))
  .catch(error => console.log(error))

function evaluacion(mensaje) {
  console.log(mensaje)
}