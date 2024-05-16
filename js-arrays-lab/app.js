/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods.push ('pizza');// foods.push puts pizza in the array
foods.push ('cheeseburger');


console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift('taco') // .unshift will put put the taco at the front of array

console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

console.log(foods[1]) // index of pizza

favFood = foods[1] // index of pizza is assigned to favFood


console.log('Exercise 4 result:', favFood);


/*
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item0)
splice(start, deleteCount, item0, item1)
splice(start, deleteCount, item0, item1, …, itemN)*?

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

foods.splice(2,0, 'tofu') // is the index where the 


console.log('Exercise 5 result:', foods);


/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/
foods.splice(1, 1, 'sushi', 'cupcake');

 // the first one will show where we want to modifiy the array, the second 1 will remove pizza since it is at index 1. Next 'sushi and 'cupcake will be inserted into the array.

console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

foods.slice(1,3); // 1 - 3 will print up to 3 but will not print 3 so you will end up with index 1,2

const yummy = foods.slice(1,3); // this is a shortened array of index 1,2 that is now assined to const yummy

console.log('Exercise 7 result:', yummy);


/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

console.log(foods.indexOf('tofu')) // indexOf will find the index of what item of the array is passed
const soyIdx = foods.indexOf('tofu') // foods.indexOf will be assigned to const soyIdx


console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

console.log(foods.join(' -> ')) // .join will concatenate the strings together with the -> string
const allFoods = foods.join(' -> ') // foods.join(' -> ') will now be assigned to allFoods

console.log('Exercise 9 result:', allFoods); // prints the results of foods.join(' -> ')


/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

console.log(foods.includes('soup'))  // includes will see check to see if soup is present in the array
const hasSoup = foods.includes('soup') // the result will be inside of the variable hasSoup


console.log('Exercise 10 result:', hasSoup); // hasSoup will print the result in true or false// the answer returns false




 /*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]; // nums arrays all numbers

const odds = [];  //odds array

nums.forEach(element =>{   //for each loop with go through all the elements => will extract the elements
      if(element % 2!==0){ // the element will return false if not = 0 then it returns odd numbers
         odds.push(element); // the if statement result will then be pushed inside of the odds array.
         
      }
   });
      

console.log('Exercise 11 result:', odds);


/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

let fizz =[];
let buzz = [];
let fizzbuzz = [];

nums.forEach(element => {   //for each loop with go through all the elements => will extract the elements
 
    if(element % 3 === 0 && element % 5 === 0 ){ //This will check if we can divide three and 5
         fizzbuzz.push(element); //This will store all of the elements that can be divided by 3 & 5 and push into fizz buzz

    } else if (element % 3 === 0 ){ //This will check if we can divide 3
      fizz.push(element);  //the result will be stored in the fizz variable
    }
      else if (element % 5 === 0 ){ //This will check if we can divide by 5
         buzz.push(element);     // the result will be stored in buzz variable
   } 
   
   });
   


console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);



