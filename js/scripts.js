let pokemonList = [
    { name: "Bulbasaur", height: "7", type: ["grass", "poison"]},
    { name: "Charizard", height: "11", type: ["fire", "flying"]},
    { name: "Jigglypuff", height: "5", type: ["fairy", "normal"]},
    { name: "Meowth", height: "4", type: "normal"},
    { name: "Psyduck", height: "8", type: "water"},
    { name: "Pikachu", height: "4", type: "electric"}
  ];
  for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >=8){
        document.write(pokemonList[i].name + pokemonList[i].height + "- Wow, that’s big!" + "<br/>");
    }else if (pokemonList[i].height <8 && pokemonList[i].height >=5){
        document.write(pokemonList[i].name + pokemonList[i].height + "- This is an average size" + "<br/>");
    } else {
        document.write(pokemonList[i].name + pokemonList[i].height + "- This is very small!" + "<br/>");
    }
    }