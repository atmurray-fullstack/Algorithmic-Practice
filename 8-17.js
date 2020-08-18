// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing 
// second character of the final pair with an 
// underscore ('_').

// function solution(str) {
//     let arr = []
//     for (let i = 0; i < str.length; i += 2) {
//         if (str[i + 1] === undefined) {
//             arr.push(str[i] + '_')
//         } else {
//             arr.push(str[i] + str[i + 1])

//         }
//     }
//     return arr
// }

// solution('apple')


//////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// This time we want to write calculations using functions and get the results.Let's have a look at some examples:

// seven(times(five()));  must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:







// function zero() {
//     let num = 0;
//     if (arguments.length === 0) {
//         return num;
//     } else {
//         switch (arguments[0][0]) {
//             case '+':
//                 console.log(num + parseInt(arguments[0][1]))
//                 return num + parseInt(arguments[0][1])
//             case '-':
//                 console.log(num - parseInt(arguments[0][1]))
//                 return num - parseInt(arguments[0][1]);
//             case '*':
//                 console.log(num * parseInt(arguments[0][1]))
//                 return num * parseInt(arguments[0][1])
//             case '/':
//                 console.log(num / parseInt(arguments[0][1]))
//                 return Math.floor(num / parseInt(arguments[0][1]));
//             default: return
//         }
//     }
// }
// function one() {
//     let num = 1;
//     if (arguments.length === 0) {
//         return num;
//     } else {
//         switch (arguments[0][0]) {
//             case '+':
//                 console.log(num + parseInt(arguments[0][1]))
//                 return num + parseInt(arguments[0][1])
//             case '-':
//                 console.log(num - parseInt(arguments[0][1]))
//                 return num - parseInt(arguments[0][1]);
//             case '*':
//                 console.log(num * parseInt(arguments[0][1]))
//                 return num * parseInt(arguments[0][1])
//             case '/':
//                 console.log(num / parseInt(arguments[0][1]))
//                 return Math.floor(num / parseInt(arguments[0][1]));
//             default: return
//         }
//     }
// }
// function two() {
//     let num = 2;
//     if (arguments.length === 0) {
//         return num;
//     } else {
//         switch (arguments[0][0]) {
//             case '+':
//                 console.log(num + parseInt(arguments[0][1]))
//                 return num + parseInt(arguments[0][1])
//             case '-':
//                 console.log(num - parseInt(arguments[0][1]))
//                 return num - parseInt(arguments[0][1]);
//             case '*':
//                 console.log(num * parseInt(arguments[0][1]))
//                 return num * parseInt(arguments[0][1])
//             case '/':
//                 console.log(num / parseInt(arguments[0][1]))
//                 return Math.floor(num / parseInt(arguments[0][1]));
//             default: return
//         }
//     }
// }
// function three() {
//     let num = 3;
//     if (arguments.length === 0) {
//         return num;
//     } else {
//         switch (arguments[0][0]) {
//             case '+':
//                 console.log(num + parseInt(arguments[0][1]))
//                 return num + parseInt(arguments[0][1])
//             case '-':
//                 console.log(num - parseInt(arguments[0][1]))
//                 return num - parseInt(arguments[0][1]);
//             case '*':
//                 console.log(num * parseInt(arguments[0][1]))
//                 return num * parseInt(arguments[0][1])
//             case '/':
//                 console.log(num / parseInt(arguments[0][1]))
//                 return Math.floor(num / parseInt(arguments[0][1]));
//             default: return
//         }
//     }
// }
// function four() {
//     let num = 4;
//     if (arguments.length === 0) {
//         return num;
//     } else {
//         switch (arguments[0][0]) {
//             case '+':
//                 console.log(num + parseInt(arguments[0][1]))
//                 return num + parseInt(arguments[0][1])
//             case '-':
//                 console.log(num - parseInt(arguments[0][1]))
//                 return num - parseInt(arguments[0][1]);
//             case '*':
//                 console.log(num * parseInt(arguments[0][1]))
//                 return num * parseInt(arguments[0][1])
//             case '/':
//                 console.log(num / parseInt(arguments[0][1]))
//                 return Math.floor(num / parseInt(arguments[0][1]));
//             default: return
//         }
//     }
// }
// function five() {
//     let num = 5;
//     if (arguments.length === 0) {
//         return num;
//     } else {
//         switch (arguments[0][0]) {
//             case '+':
//                 console.log(num + parseInt(arguments[0][1]))
//                 return num + parseInt(arguments[0][1])
//             case '-':
//                 console.log(num - parseInt(arguments[0][1]))
//                 return num - parseInt(arguments[0][1]);
//             case '*':
//                 console.log(num * parseInt(arguments[0][1]))
//                 return num * parseInt(arguments[0][1])
//             case '/':
//                 console.log(num / parseInt(arguments[0][1]))
//                 return Math.floor(num / parseInt(arguments[0][1]));
//             default: return
//         }
//     }
// }
// function six() {
//     let num = 6;
//     if (arguments.length === 0) {
//         return num;
//     } else {
//         switch (arguments[0][0]) {
//             case '+':
//                 console.log(num + parseInt(arguments[0][1]))
//                 return num + parseInt(arguments[0][1])
//             case '-':
//                 console.log(num - parseInt(arguments[0][1]))
//                 return num - parseInt(arguments[0][1]);
//             case '*':
//                 console.log(num * parseInt(arguments[0][1]))
//                 return num * parseInt(arguments[0][1])
//             case '/':
//                 console.log(num / parseInt(arguments[0][1]))
//                 return Math.floor(num / parseInt(arguments[0][1]));
//             default: return
//         }
//     }
// }
// function seven() {
//     let num = 7;
//     if (arguments.length === 0) {
//         return num;
//     } else {
//         switch (arguments[0][0]) {
//             case '+':
//                 console.log(num + parseInt(arguments[0][1]))
//                 return num + parseInt(arguments[0][1])
//             case '-':
//                 console.log(num - parseInt(arguments[0][1]))
//                 return num - parseInt(arguments[0][1]);
//             case '*':
//                 console.log(num * parseInt(arguments[0][1]))
//                 return num * parseInt(arguments[0][1])
//             case '/':
//                 console.log(num / parseInt(arguments[0][1]))
//                 return Math.floor(num / parseInt(arguments[0][1]));
//             default: return
//         }
//     }
// }
// function eight() {
//     let num = 8;
//     if (arguments.length === 0) {
//         return num;
//     } else {
//         switch (arguments[0][0]) {
//             case '+':
//                 console.log(num + parseInt(arguments[0][1]))
//                 return num + parseInt(arguments[0][1])
//             case '-':
//                 console.log(num - parseInt(arguments[0][1]))
//                 return num - parseInt(arguments[0][1]);
//             case '*':
//                 console.log(num * parseInt(arguments[0][1]))
//                 return num * parseInt(arguments[0][1])
//             case '/':
//                 console.log(num / parseInt(arguments[0][1]))
//                 return Math.floor(num / parseInt(arguments[0][1]));
//             default: return
//         }(arguments)
//     }
// }
// function nine() {
//     let num = 9;
//     if (arguments.length === 0) {
//         return num;
//     } else {
//         switch (arguments[0][0]) {
//             case '+':
//                 console.log(num + parseInt(arguments[0][1]))
//                 return num + parseInt(arguments[0][1])
//             case '-':
//                 console.log(num - parseInt(arguments[0][1]))
//                 return num - parseInt(arguments[0][1]);
//             case '*':
//                 console.log(num * parseInt(arguments[0][1]))
//                 return num * parseInt(arguments[0][1])
//             case '/':
//                 console.log(num / parseInt(arguments[0][1]))
//                 return Math.floor(num / parseInt(arguments[0][1]));
//             default: return
//         }
//     }
// }

// function plus(num2) {
//     return '+' + num2
// }
// function minus(num2) {
//     return '-' + num2
// }
// function times(num2) {
//     return '*' + num2
// }
// function dividedBy(num2) {
//     return '/' + num2
// }

///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit,
//  continue reducing in this way until a single-digit number is produced. This is only 
//  applicable to the natural numbers.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function digital_root(num) {
//     let sum = 0;

//     if (num.toString().length === 1) {
//         return num
//     }
//     num.toString().split('').forEach(el => {
//         sum += parseInt(el);
//     });

//     return digital_root(sum)

// }
//////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// The new "Avengers" movie has just been released! There are a lot of people at the cinema 
// box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill.
//  An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person 
// in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money 
// and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the 
// bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES 
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

function tickets(line) {
    let billCount = [0, 0, 0];

    for (let i = 0; i < line.length; i++) {
        if (line[i] === 25) {
            billCount[0] += 1;
        } else if (line[i] === 50) {
            billCount[1] += 1;
            billCount[0] -= 1;
        } else if (line[i] === 100) {
            if (billCount[1] === 0) {
                billCount[0] -= 3
            } else {
                billCount[1] -= 1
                billCount[0] -= 1
            }
        }
        if (billCount[0] < 0) {
            return 'NO'
        }

    }
    return 'YES'
}
