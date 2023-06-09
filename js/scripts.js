let pokemonRepository = (function () {
   let pokemonList = [
      {
         name: "Bulbasaur",
         height: "7",
         type: ["grass", "poison"]
      },
      {
         name: "Charizard",
         height: "11",
         type: ["fire", "flying"]
      },
      {
         name: "Jigglypuff",
         height: "5",
         type: ["fairy", "normal"]
      },
      {
         name: "Meowth",
         height: "4",
         type: ["normal"]
      },
      {
         name: "Psyduck",
         height: "8",
         type: ["water"]
      },
      {
         name: "Pikachu",
         height: "4",
         type: ["electric"]
      }
   ];
   return {
      add: function (pokemon) {
         pokemonList.push(pokemon);
      },
      getAll: function () {
         return pokemonList;
      },
   };
})();

pokemonRepository.add({ name: "Charmander" });

pokemonRepository.getAll().forEach(function (pokemon) {
   document.write(pokemon.name + "is" + pokemon.height + "and" + pokemon.type);
});
