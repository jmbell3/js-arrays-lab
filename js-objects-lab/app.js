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
  
//   catchPokemon(pokemonObj) {
//   game.party.push(pokemonObj);
// }
// };
  
catchPokemon(pokemonObj) {
  game.party.push(pokemonObj);

  const pokeball = this.items.find(item => item.name === "pokeball");
  if (pokeball) {
  pokeball.quanity--;
    }
  }

  , gymStatus()  {
    const gymTally = { completed: 0, incomplete: 0 };
  
    this.gyms.forEach(gym => {
      if (gym.completed) {
        gymTally.completed++;
      } else {
        gymTally.incomplete++;
      }
    });
}
 
, partyCount() {
  return this.party.length; 

}
};


  
 
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
console.log('Exercise 3')
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
console.log('Exercise 4')
console.log("Starter Pokemon", game.party)


/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
game.party.push(pokemon[4], pokemon[7], pokemon[25]);
console

/*
Exercise 6
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 6 here:
*/

game.party.sort((Pokemon1, Pokemon2) => Pokemon1.hp - Pokemon2.hp); // this will sort through the array and the pokemon1.hp - pokemon2.hp will be 


console.log('Exercise 6')
console.log(game.party)

/*
Exercise 7
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 7 here:
*/



game.gyms.forEach((gym) => { 
  
  if (gym.difficulty < 3) {
   gym.completed = true;
  }
})

console.log('Exercise 7')
console.log(game)

/*game.party.forEach((pokemon) =>{
  console.log(pokemon)
}
)
*/


/*
Exercise 8
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. Remember that you're working with an array of objects - what array method is ideal for replacing one element with another? 

Solve Exercise 8 here:
*/
console.log(game.party)

console.log('Exercise 8')
game.party.forEach((poke, i) => {

 game.party.splice(i,1, pokemon[poke.number]) 
})


console.log(game.party)








// Exercise 9
// 1. Print the name of each Pokémon in your party.
// 2. Consider using a loop or an array method to access each Pokémon's name.

// Solve Exercise 9 here:

console.log('Exercise 9')

 game.party.forEach((pokemon)=> { //it will log the name of the pokemon that is inside of the game.party
  
  console.log(pokemon.name);
})


// 
// Exercise 10
// 1. Can you print out all the starter Pokémon from the `pokemon` array?
// 2. Think about how you can identify a starter Pokémon and then log their names.


// Solve Exercise 10 here:

console.log('Exercise 10')

const starterPokemons = pokemon.filter(p => p.starter === true); // this will filter through the pokemon class. it will check to see if p.starter class is true. 

//console.log(starterPokemons);

starterPokemons.forEach(p => { // the for each will then go through the true pokemon starters and console .log the name
  console.log(p.name);
});


/*
Exercise 11
1. Add a method called `catchPokemon` to the `game` object. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 11 here:
*/
//   catchPokemon(pokemonObj) {
//   game.party.push(pokemonObj);
// }
// };

console.log('Exercise 11')

const arbok = pokemon.filter(p => p.name === "Arbok"); //this will filter through pokemon names and display the name arbok
game.catchPokemon(arbok); // arbok will be stored inside of catch pokemon

console.log('Catch Pokemon', game.party)

const pikachu = pokemon.filter(p => p.name === "Pikachu");
game.catchPokemon(pikachu);

console.log('Catch Pokemon', game.party)

/*
Exercise 12
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 12 here:
*/

//This is the updated method
/*catchPokemon(pokemonObj) {
  game.party.push(pokemonObj);

  const pokeball = this.items.find(item => item.name === "pokeball");
  if (pokeball) {
  pokeball.quanity--;
    }
  };*/
  console.log('Exercise 12')

  const Mankey = pokemon.filter(p => p.name === "Mankey"); //this will filter mankey from pokemon name.
  game.catchPokemon(Mankey);

  console.log('Catch Pokemon', game.party) // catch pokemon is listed in the game section above
  console.log('Update Items', game.items) // update items is listed in the game section above

  /*
Exercise 13
1. Similar to Exercise 7, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 13 here:
*/
console.log('Exercise 13')

game.gyms.forEach((gym) => {  // the for each will iterate through the game.games 
  
  if (gym.difficulty < 6) { // if gym.difficulty is less than six it will display true
   gym.completed = true;
  }
})

console.log("Update Gyms", game.gyms);

/*
Exercise 14
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 14 here:
*/


// New method ceated for gym Status
// gymStatus()  {
//   const gymTally = { completed: 0, incomplete: 0 };

//   this.gyms.forEach(gym => {
//     if (gym.completed) {
//       gymTally.completed++;
//     } else {
//       gymTally.incomplete++;
//     }
//   });
// }

console.log ('Exercise 14');

//game.gymStatus();

/*
Exercise 15
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 15 here:
*/
console.log ('Exercise 15');


console.log("Number of Pokémon in the party:", game.partyCount());


/*
Exercise 16
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 16 here:
*/
console.log('Exercise 16')

game.gyms.forEach((gym) => {   // the for each will iterate through game.gyms
  
  if (gym.difficulty < 8) { // if game.difficulty is less than 8 it will change the value to true
   gym.completed = true;
  }
})


// This is very similar to the last exercises an only needs to have the number channed from 6 to 8
console.log(game.gyms);

/*
Exercise 17
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 17 here:
*/

console.log('Exercise 17');
console.log(game);