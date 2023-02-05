/*Create an array of 10 random numbers and write several functions to work with it.*/

let arrayVar = [1, 5, 6, 85, 47, 63, 99, 2, 12, 19];

//1. the function takes an array and displays it on the screen

function displayOnScreen() {
  document.querySelector(".display").innerHTML = arrayVar;
}

//displayOnScreen();

//2. the function takes an array and and outputs only even elements

let evenArray = [];

function evenOnly(arrayVar) {
  for (let i = 0; i < arrayVar.length; i++) {
    if (arrayVar[i] % 2 === 0) {
      evenArray.push(arrayVar[i]);
    }
  }
  return evenArray;
}

//evenOnly(arrayVar);
//console.log(evenArray);

//3. the function takes an array and returns the sum of all elements of the array

let sumArray = 0;

function sumAll(arrayVar) {
  for (let i = 0; i < arrayVar.length; i++) {
    sumArray = sumArray + arrayVar[i];
  }
  return sumArray;
}

//console.log(sumAll(arrayVar));

//4. the function takes an array and returns its maximum element

let randomArray = [3, 5, 8];

function getMax(randomArray) {
  const max = Math.max(randomArray);
  return max;
}

console.log(getMax(randomArray));
console.log(typeof randomArray[1]);

//5. the function of adding a new element to the array by the specified index
//6. the function of removing an element from an array by the specified index,
