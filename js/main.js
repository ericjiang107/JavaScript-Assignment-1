//==================Exercise #1 ==========//
/* 
Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]


// Loops through the list 
// Checks that the current name is in the string
// Output --> "Matched dog_name"
// If no matches are in the string --> output: "No Matches"

let findWords = () => {
    //Your code goes here
    for(let i = 0; i < dog_names.length; i++){
        if(dog_string.includes(dog_names[i])) {
            return "Matched dog_name"
        } else {
            return "No matches"
        }
    }
};
console.log(findWords())
//Call method here with parameters

// Another way of doing it for accounting camel cases
let findWords2 = () =>{
    //Your code goes here
    let new_Array = []
    for(let i = 0; i < dog_names.length; i++){
        if(dog_string.includes(dog_names[i])) {
            new_Array.push(dog_names[i])
        }
    }
    return new_Array
};
console.log(findWords2())


//============Exercise #2 ============//
/*
Write a fucntion that takes in an array and removes every value that's double is over 50.
*/
let given_arr = [13, 22, 26, 40, 1, 10]

// iterate through array
// double that value and compare to 50
// if that value is less than 50, go to next one

let replaceEvens = (arr) => {
    //code goes here
    var new_Array = []
    for(let i = 0; i < given_arr.length; i++) {
        if(given_arr[i]*2 < 50) {
            new_Array.push(given_arr[i])
        }
    }
    return new_Array
}
console.log(replaceEvens())

//Expected output
//Given arr == [13, 22, 26, 40, 1, 10]
//Output arr == [13, 22, 1, 10]
//Explanation: 13*2 < 50, 22*2 < 50, 26*2 > 50, etc...


// CodeWar Problems Using Javascript:
// Link: https://www.codewars.com/kata/515e271a311df0350d00000f/solutions/javascript
// My Solution: 
function squareSum(numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i++) {
      sum += numbers[i]**2
    }
    return sum
};
// Test Cases:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(squareSum([1,2]), 5)
//   Test.assertEquals(squareSum([0, 3, 4, 5]), 50)
//   });
//   });
  
// Link: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/solutions/javascript
// My Solution: 
function even_or_odd(number) {
    if(number % 2 == 0) {
      return "Even"
    } else {
      return "Odd"
    }
};
// Test Cases:
// describe("Tests", () => {
//     it("test", () => {
//   Test.assertEquals(even_or_odd(2), "Even")
//   Test.assertEquals(even_or_odd(0), "Even")
//   Test.assertEquals(even_or_odd(7), "Odd")
//   Test.assertEquals(even_or_odd(1), "Odd")
//     });
//   });
  