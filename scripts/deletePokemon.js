function deletarPokemon(btnId) {

    const ulPokemonFirst = document.querySelector('.first-ul-pkm');
    const ulPokemonSecond = document.querySelector('.second-ul-pkm');

    console.log(btnId);
    if (btnId === "deleteFirstPokemon" && ulPokemonFirst.innerHTML !== "") {
        ulPokemonFirst.innerHTML = "";
    } 
    
    if (btnId === "deleteSecondPokemon" && ulPokemonSecond.innerHTML !== "") {
        ulPokemonSecond.innerHTML = "";
    }
}