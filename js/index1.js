//Un ejemplo de callbackhell
const candidatos = []

function nuevoCandidato(candidato, callback) {
  candidatos.push(candidato)
  console.log(`Agregado: ${candidato}`)
  callback()
}

function mostrarCandidatos() {
  console.log(candidatos)
}

function iniciarCallBackHell() {

  setTimeout(() => {
    nuevoCandidato('Aranza', mostrarCandidatos)

    setTimeout(() => {
      nuevoCandidato('José', mostrarCandidatos)

      setTimeout(() => {
        nuevoCandidato('Ana', mostrarCandidatos)
      }, 3000);

    }, 3000);

  }, 3000);

}

iniciarCallBackHell()