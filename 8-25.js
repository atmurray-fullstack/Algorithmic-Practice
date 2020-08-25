// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas

// function solution(input, markers) {
//     let string = ''
//     let arr = input.split('\n');
//     for (let i = 0; i < markers.length; i++) {
//         arr = arr.map(el => {
//             return el.indexOf(markers[i]) != -1 ?
//                 el.slice(0, el.indexOf(markers[i])).trim() :
//                 el
//         })
//     }
//     for (let i = 0; i < arr.length - 1; i++) {
//         string += arr[i] + '\n'
//     }
//     string += arr[arr.length - 1]
//     return string
// };
// solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])




/////////////////////////////////////////////////////
////////////////////////////////////////////////////
/////////////////////////////////////////////////////


// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// var moveZeros = function (arr) {
//     // TODO: Program me
//     let newArr = [];
//     newArr = arr.filter(el => {
//         return el !== 0
//     })
//     for (let i = newArr.length; i < arr.length; i++) {
//         newArr.push(0)
//     }
//     return newArr
// }
// moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])