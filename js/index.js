//Ejemplo de callback

const candidatos = ['Victor', 'Josue', 'Armando', 'Jorge', 'Fernanda']

function nuevoCandidato(candidato, callback) {

  setTimeout(() => {
    candidatos.push(candidato)
    callback()
  }, 2000);

}

function mostrarCandidatos() {

  setTimeout(() => {
    candidatos.forEach(candidato => {
      console.log(candidato)
    })
  }, 1000);

}

mostrarCandidatos()
nuevoCandidato('Alejandra', mostrarCandidatos)