const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase(); 
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`
    fetch(URL).then((res) => {
        if(res.status != 200){
            console.log("No")
            alert("Dato erroneo, intenta con un pokémon")
            pokeImage("img/no.png")
        }else{
            return res.json();
        }
        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeN = data.name.toLowerCase();
        let pokeMoves = data.moves;
        
        
        updateListMove();
        for(let i = 0; i < pokeMoves.length; i++){
            
            getPokeMoves(pokeMoves[i].move['name']);
            
        }
        getStadisticsPoke(data.stats);
        getPokeType(data.types)
        pokeImage(pokeImg);
        getPokeName(pokeN)
    })

}

const getPokeMoves = (move) =>{
    let list = document.getElementById("moveList");
    let li = document.createElement("li")
    let liText = document.createTextNode(move)
    li.classList.add("list-group-item")
    li.appendChild(liText);
    list.appendChild(li)
    console.log(move);
    
}

const updateListMove = () =>{
    let element = document.getElementById("moveList");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const getPokeName = (pokeName) => {
    let pokeN = document.getElementById("showPokeName")
    pokeN.value = pokeName;
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg")
    pokeImg.src = url;
    pokeImg.style.width = "50%";
}

const getPokeType = (types) =>{
    let type1 = document.getElementById("type1");
    let type2 = document.getElementById("type2"); 
    if(types[1] != null){
        type1.value = types[0].type['name']; 
        type2.value = types[1].type['name'];

        pokeColor1(type1.value,type1);
        pokeColor1(type2.value,type2);
    }else{
        type1.value = types[0].type['name'];
        type2.value = '';

        pokeColor1(type1.value, type1);
        type2.style.backgroundColor = "white";
    }
}

const pokeColor1 = (text, textC) =>{
    switch (text){
        case "electric":
            textC.style.backgroundColor = "yellow";
            textC.style.color ="black"
        break;
        case "bug":
            textC.style.backgroundColor = "#96FE45";
            textC.style.color ="black"
        break;
        case "dark":
            textC.style.backgroundColor = "black";
            textC.style.color ="white"
        break;
        case "dragon":
            textC.style.backgroundColor = "#2AB9CA";
            textC.style.color ="white"

        break;
        case "fairy":
            textC.style.backgroundColor = "#EB8DFA";
            textC.style.color ="white"
        break;
        case "fighting":
            textC.style.backgroundColor = "#B30606";
            textC.style.color ="white"
        break;
        case "fire":
            textC.style.backgroundColor = "#D70000";
            textC.style.color ="white"
        break;
        case "flying":
            textC.style.backgroundColor = "#A0A0A0";
            textC.style.color ="white"
        break;
        case "ghost":
            textC.style.backgroundColor = "#4D5682";
            textC.style.color ="white"
        break;
        case "grass":
            textC.style.backgroundColor = "#58B114";
            textC.style.color ="white"
        break;
        case "ground":
            textC.style.backgroundColor = "#9F7903";
            textC.style.color ="white"
        break;
        case "ice":
            textC.style.backgroundColor = "#03B2B9";
            textC.style.color ="white"
        break;
        case "normal":
            textC.style.backgroundColor = "#C1C1C1";
            textC.style.color ="black"
        break;
        case "poison":
            textC.style.backgroundColor = "#875AB9";
            textC.style.color ="white"
        break;
        case "psychic":
            textC.style.backgroundColor = "#A21CA1";
            textC.style.color ="white"
        break;
        case "rock":
            textC.style.backgroundColor = "#825319";
            textC.style.color ="white"
        break;
        case "steel":
            textC.style.backgroundColor = "#5C9797";
            textC.style.color ="white"
        break;
        case "water":
            textC.style.backgroundColor = "#86C1FF";
            textC.style.color ="white"
        break;
        default: 
            console.log("error, color no encontrado");

    }
}

const getStadisticsPoke = (stadistics) => {
    let health = document.getElementById("HP");
    let healtTxt = document.getElementById("hpField")

    let attack = document.getElementById("Attack");
    let attackTxt = document.getElementById("attackField")

    let defense = document.getElementById("Defense");
    let defenseTxt = document.getElementById("defenseField")

    let sAttack = document.getElementById("S-attack");
    let sAttackTxt = document.getElementById("sAttackField")

    let sDefense = document.getElementById("S-defense");
    let sDefenseTxt = document.getElementById("sDefenseField")

    let speed = document.getElementById("Speed");
    let speedTxt = document.getElementById("speedField")

    health.value = stadistics[0].base_stat;
    healtTxt.value = stadistics[0].base_stat;

    attack.value = stadistics[1].base_stat;
    attackTxt.value = stadistics[1].base_stat;

    defense.value = stadistics[2].base_stat;
    defenseTxt.value = stadistics[2].base_stat;

    sAttack.value = stadistics[3].base_stat;
    sAttackTxt.value = stadistics[3].base_stat;

    sDefense.value = stadistics[4].base_stat;
    sDefenseTxt.value = stadistics[4].base_stat;

    speed.value = stadistics[5].base_stat;
    speedTxt.value = stadistics[5].base_stat;

}
//pokeImage('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png')


