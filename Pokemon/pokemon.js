function infoPokemon() {
  const nomePokemon = document
    .getElementById("nomePokemon")
    .value.toLowerCase();

  console.log(nomePokemon);
  const boxInfoPokemon = document.getElementById("boxInfoPokemon");
  //console.log(nomePokemon);
  fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokemon não encontrado!");
      }
      return response.json();
    })
    .then((data) => {
      const dadosPokemon = `
            <h2>${data.name}</h2>
            <img
              src="${data.sprites.front_default}" alt = "${data.name}">
            
            <p><strong>Altura: </strong>${data.height /10 }M</p>
            <p><strong>Peso: </strong>${data.weight/ 10 }Kg</p>
            <p><strong>Tipo: </strong>${data.types.map(typeInfo => typeInfo.type.name).join (', ')}</p>
            <p><strong>Tipo de Habilidade: </strong>${data.abilities.map(abilityInfo => abilityInfo.ability.name).join (', ')}</p>
            <p><strong>Habilidades: </strong>${data.moves.map(moveInfo => moveInfo.move.name).join(', ')}</p>
            `;

            boxInfoPokemon.innerHTML = dadosPokemon;
    })
    .catch(error => {
        boxInfoPokemon.innerHTML = `<p>${error.message}</p>`
    });
}