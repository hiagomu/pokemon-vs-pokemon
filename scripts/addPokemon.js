function adicionarPokemon(btnId) {

    const inputTarefa = document.querySelectorAll('.novaTarefa');
    const ulPokemonFirst = document.querySelector('.first-ul-pkm');
    const ulPokemonSecond = document.querySelector('.second-ul-pkm');

    if (btnId === "firstPokemon" && ulPokemonFirst.innerHTML == "") {
        createCard(inputTarefa[0].value.toLowerCase(), ulPokemonFirst);
        inputTarefa[0].value = "";
    }
    
    if (btnId === "secondPokemon" && ulPokemonSecond.innerHTML == "") {
        createCard(inputTarefa[1].value.toLowerCase(), ulPokemonSecond);
        inputTarefa[1].value = "";
    }
}



function createCard(name, ul) {

    const pokemon = procurarPokemon(name)
        .then(stats => {

            const li = document.createElement('li');
            
            li.innerHTML = 
            `
            <div class="card" style="width: 18rem;">
                <img src="${stats.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${name[0].toUpperCase() + name.slice(1)}</h5>
                    <p class="card-text">NULL</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" value=${stats.hp}>HP: ${stats.hp}</li>
                    <li class="list-group-item" value=${stats.attack}>Attack: ${stats.attack}</li>
                    <li class="list-group-item" value=${stats.defense}>Defense: ${stats.defense}</li>
                </ul>
            </div>
            `
            ul.appendChild(li);
        });
}

function procurarPokemon(name) {

    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then( response => response.json())
        .then(pokemon => {
            const hp =  pokemon.stats[0].base_stat;
            const attack = pokemon.stats[1].base_stat;
            const defense = pokemon.stats[2].base_stat;
            const img = pokemon.sprites.other.dream_world.front_default;

            return {hp:hp, attack:attack, defense:defense, img:img};
        });
}