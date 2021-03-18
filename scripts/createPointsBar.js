function createAtributePointsBar() {

    const ulPokemonFirst = document.querySelector('.first-ul-pkm');
    const ulPokemonSecond = document.querySelector('.second-ul-pkm');
    const atributePoints = document.querySelector('.container-atribute-points');

    if (ulPokemonFirst.innerHTML !== "" && ulPokemonSecond.innerHTML !== "") {
        const infoPokemon = document.querySelectorAll(".list-group-item");
        const values = [];
        infoPokemon.forEach(info => {
            values.push(info.value);
        });
    
        const infoPoke1 = {hp:values[0], attack:values[1], defense:values[2]};
        const infoPoke2 = {hp:values[3], attack:values[4], defense:values[5]};
        
        let percent = 0; 
        if (infoPoke1.hp > infoPoke2.hp) {
            percent += 33;
        }
        if (infoPoke1.attack > infoPoke2.attack) {
            percent += 33;
        }
        if (infoPoke1.defense > infoPoke2.defense) {
            percent += 34;
        }

        atributePoints.innerHTML = `<span style="width:${percent}%;"></span>`
    }



}