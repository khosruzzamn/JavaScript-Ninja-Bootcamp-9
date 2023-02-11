// when and why function is needed ?

/*  Function is used for Easy the work . When object are same and we need to use it multiple time this time we 
can use funtion. So same code we don't need to do many times . it's help to work easyer */

// write down and recap difference between console and Return -2

/*   console : Console is used for show the result 
     Returen : Return is used for function value outside sent value.
*/

// 3. write a function that takes in two parameters and returns the difference of the two : -2
function difference(num1, num2) {
  return num1 - num2;
}

console.log(difference(10, 2));
console.log(difference(0, 2));

// 4. Write a function that takes a value as argument and return the type of value -2

function myFunction(num1) {
  return typeof num1;
}

console.log(myFunction(1));
console.log(myFunction(false));
console.log(myFunction({}));
console.log(myFunction(null));
console.log(myFunction("string"));
console.log(myFunction("array"));
console.log(myFunction(["array"]));

/* 5 Write down this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is saturday , 2 is sunday , 3 is Monday etc .) . If the number is leess than 1 or greater than 7 , the function should return undefined ; Hint : you can use array to track down day of the week :) */

function printDay(day) {
  const weekDay = [
    "saterday",
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
  ];
  return weekDay[day];
}

console.log(printDay(4));
console.log(printDay(7));

/* 6.  Write Down this function takes in one parameter (an array ) and returns the last alue in array It's should return undefined if the array is empty. NB: count last element index dynamically */

function lastElement(num) {
  const lastValue = num.length - 1;
  return num[lastValue];
}

console.log(lastElement([1, 2, 3, 4]));
console.log(lastElement([1, 2, 3, 4, 10]));
console.log(lastElement([]));

function createObject(val1, val2, val3) {
  const objectCreate = { x: val1, y: val2, z: val3 };
  return objectCreate;
}

console.log(createObject(1, 2, 3));
console.log(createObject("a", "b", "c"));
console.log(createObject("ab", "bc", "ca"));
