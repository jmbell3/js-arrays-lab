const pokemon = require("./data")

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  

  //console.log(pokemon, { maxArrayLength: null })


 // console.dir(pokemon)

 //console.log(game)




/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty ="medium";

console.log(game)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
const starterPokemon = pokemon.find(p => p.starter == true); // I created a new variable called starterPokemon. I used the .find method to sift through the array to show me the starter property

if(starterPokemon){  // if statement. If there is a starter pokemenon then push/add to the starterPokemon
  game.party.push(starterPokemon); // push will add the starter variable to game.party
}

console.log("Starter Pokemon", game.party)


/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
const starterPokemons = pokemon.filter(p => p.starter == true); // .filter Will show me all of the pokemon starters that are true

if(starterPokemons.length > 0){  // compilier checks to see iff any elements are starter elements are present
  starterPokemons.forEach(pokemon => {// the complier will run through the array and any starter elements will be pushed into game.party.push
  game.party.push(pokemon);
});
}
game.party.splice(0,1) // I had two Bulbasaur so I created a splice method to delete one of the bulbasaur

//console.log(game.party)

/*
Exercise 6
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 6 here:
*/

game.party.sort((Pokemon1, Pokemon2) => Pokemon1.hp - Pokemon2.hp); //.sort will



console.log(game.party)

/*
Exercise 7
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 7 here:
*/



game.gyms.forEach(gym => {
  if (gym.difficulty === 3) {
    gym.completed = true;
  }
});

console.log(game.gyms)








