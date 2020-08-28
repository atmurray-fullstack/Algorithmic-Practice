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


////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


// In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

// Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

// josephus_survivor(7,3) => means 7 people in a circle;
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!

function josephusSurvivor(n, k) {
    let count = [];
    let index

    for (i = 1; i <= n; i++) {
        count.push(i);
    }
    index = k % n === 0 ?
        index = n - 1
        : index = (k % n) - 1
    console.log(index)
    while (count.length > 1) {

        index = index > count.length - 1 ? (k % count.length) - 1 : index
        count.splice(index, 1);
        index += k - 1



    }
    // console.log(count)
    return count[0]
}

josephusSurvivor(11, 19)
