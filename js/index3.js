//Pasando de callbackhell
const candidatos = []

const nuevoCandidato = candidato => new Promise(resolve => {

  setTimeout(() => {
    candidatos.push(candidato)
    resolve(`Agregado: ${candidato}`)
  }, 3000);

})

nuevoCandidato('Manuel')
  .then(resultado => {
    console.log(resultado)
    console.log(candidatos)
    return nuevoCandidato('José')
  })
  .then(resultado => {
    console.log(resultado)
    console.log(candidatos)
    return nuevoCandidato('Victor')
  })
  .then(resultado => {
    console.log(resultado)
    console.log(candidatos)
  })
