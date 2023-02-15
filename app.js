let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");
let pokeType = document.getElementById("types");
let pokeWeight = document.getElementById("weight")

const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150) + 1;

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    let data = await fetch(requestString);

    let response = await data.json();


    image.src = response.sprites.front_default;
    pokeNumber.textContent = `#${response.id}`;
    pokeName.textContent = response.name;
    pokeType.textContent = 'Type :' + ' ' + response.types[0].type.name;
    pokeWeight.textContent = 'Poids :' + ' ' + response.weight;

};

changePokemon();

button.addEventListener("click", changePokemon);


