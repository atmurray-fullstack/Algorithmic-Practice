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







function zero() {
    let num = 0;
    if (arguments.length === 0) {
        return num;
    } else {
        switch (arguments[0][0]) {
            case '+':
                console.log(num + parseInt(arguments[0][1]))
                return num + parseInt(arguments[0][1])
            case '-':
                console.log(num - parseInt(arguments[0][1]))
                return num - parseInt(arguments[0][1]);
            case '*':
                console.log(num * parseInt(arguments[0][1]))
                return num * parseInt(arguments[0][1])
            case '/':
                console.log(num / parseInt(arguments[0][1]))
                return num / parseInt(arguments[0][1]);
            default: return
        }
    }
}
function one() {
    let num = 1;
    if (arguments.length === 0) {
        return num;
    } else {
        switch (arguments[0][0]) {
            case '+':
                console.log(num + parseInt(arguments[0][1]))
                return num + parseInt(arguments[0][1])
            case '-':
                console.log(num - parseInt(arguments[0][1]))
                return num - parseInt(arguments[0][1]);
            case '*':
                console.log(num * parseInt(arguments[0][1]))
                return num * parseInt(arguments[0][1])
            case '/':
                console.log(num / parseInt(arguments[0][1]))
                return num / parseInt(arguments[0][1]);
            default: return
        }
    }
}
function two() {
    let num = 2;
    if (arguments.length === 0) {
        return num;
    } else {
        switch (arguments[0][0]) {
            case '+':
                console.log(num + parseInt(arguments[0][1]))
                return num + parseInt(arguments[0][1])
            case '-':
                console.log(num - parseInt(arguments[0][1]))
                return num - parseInt(arguments[0][1]);
            case '*':
                console.log(num * parseInt(arguments[0][1]))
                return num * parseInt(arguments[0][1])
            case '/':
                console.log(num / parseInt(arguments[0][1]))
                return num / parseInt(arguments[0][1]);
            default: return
        }
    }
}
function three() {
    let num = 3;
    if (arguments.length === 0) {
        return num;
    } else {
        switch (arguments[0][0]) {
            case '+':
                console.log(num + parseInt(arguments[0][1]))
                return num + parseInt(arguments[0][1])
            case '-':
                console.log(num - parseInt(arguments[0][1]))
                return num - parseInt(arguments[0][1]);
            case '*':
                console.log(num * parseInt(arguments[0][1]))
                return num * parseInt(arguments[0][1])
            case '/':
                console.log(num / parseInt(arguments[0][1]))
                return num / parseInt(arguments[0][1]);
            default: return
        }
    }
}
function four() {
    let num = 4;
    if (arguments.length === 0) {
        return num;
    } else {
        switch (arguments[0][0]) {
            case '+':
                console.log(num + parseInt(arguments[0][1]))
                return num + parseInt(arguments[0][1])
            case '-':
                console.log(num - parseInt(arguments[0][1]))
                return num - parseInt(arguments[0][1]);
            case '*':
                console.log(num * parseInt(arguments[0][1]))
                return num * parseInt(arguments[0][1])
            case '/':
                console.log(num / parseInt(arguments[0][1]))
                return num / parseInt(arguments[0][1]);
            default: return
        }
    }
}
function five() {
    let num = 5;
    if (arguments.length === 0) {
        return num;
    } else {
        switch (arguments[0][0]) {
            case '+':
                console.log(num + parseInt(arguments[0][1]))
                return num + parseInt(arguments[0][1])
            case '-':
                console.log(num - parseInt(arguments[0][1]))
                return num - parseInt(arguments[0][1]);
            case '*':
                console.log(num * parseInt(arguments[0][1]))
                return num * parseInt(arguments[0][1])
            case '/':
                console.log(num / parseInt(arguments[0][1]))
                return num / parseInt(arguments[0][1]);
            default: return
        }
    }
}
function six() {
    let num = 6;
    if (arguments.length === 0) {
        return num;
    } else {
        switch (arguments[0][0]) {
            case '+':
                console.log(num + parseInt(arguments[0][1]))
                return num + parseInt(arguments[0][1])
            case '-':
                console.log(num - parseInt(arguments[0][1]))
                return num - parseInt(arguments[0][1]);
            case '*':
                console.log(num * parseInt(arguments[0][1]))
                return num * parseInt(arguments[0][1])
            case '/':
                console.log(num / parseInt(arguments[0][1]))
                return num / parseInt(arguments[0][1]);
            default: return
        }
    }
}
function seven() {
    let num = 7;
    if (arguments.length === 0) {
        return num;
    } else {
        switch (arguments[0][0]) {
            case '+':
                console.log(num + parseInt(arguments[0][1]))
                return num + parseInt(arguments[0][1])
            case '-':
                console.log(num - parseInt(arguments[0][1]))
                return num - parseInt(arguments[0][1]);
            case '*':
                console.log(num * parseInt(arguments[0][1]))
                return num * parseInt(arguments[0][1])
            case '/':
                console.log(num / parseInt(arguments[0][1]))
                return num / parseInt(arguments[0][1]);
            default: return
        }
    }
}
function eight() {
    let num = 8;
    if (arguments.length === 0) {
        return num;
    } else {
        switch (arguments[0][0]) {
            case '+':
                console.log(num + parseInt(arguments[0][1]))
                return num + parseInt(arguments[0][1])
            case '-':
                console.log(num - parseInt(arguments[0][1]))
                return num - parseInt(arguments[0][1]);
            case '*':
                console.log(num * parseInt(arguments[0][1]))
                return num * parseInt(arguments[0][1])
            case '/':
                console.log(num / parseInt(arguments[0][1]))
                return num / parseInt(arguments[0][1]);
            default: return
        }(arguments)
    }
}
function nine() {
    let num = 9;
    if (arguments.length === 0) {
        return num;
    } else {
        switch (arguments[0][0]) {
            case '+':
                console.log(num + parseInt(arguments[0][1]))
                return num + parseInt(arguments[0][1])
            case '-':
                console.log(num - parseInt(arguments[0][1]))
                return num - parseInt(arguments[0][1]);
            case '*':
                console.log(num * parseInt(arguments[0][1]))
                return num * parseInt(arguments[0][1])
            case '/':
                console.log(num / parseInt(arguments[0][1]))
                return num / parseInt(arguments[0][1]);
            default: return
        }
    }
}

function plus(num2) {
    return '+' + num2
}
function minus(num2) {
    return '-' + num2
}
function times(num2) {
    return '*' + num2
}
function dividedBy(num2) {
    return '/' + num2
}

