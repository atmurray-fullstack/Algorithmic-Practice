// What is an anagram? Well, two words are anagrams of each other
//if they both contain the same letters. For example:
// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from
// a list. You will be given two inputs a word and an array with words.
// You should return an array of all the anagrams or an empty array
// if there are none. For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) =>
// ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) 
//=> ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// function anagrams(word, words) {
//     let matchArr = [];
//     words.map(arrWord => {
//         if (word.length === arrWord.length) {
//             let match = ''
//             let newArrWord = arrWord;
//             for (let i = 0; i < word.length; i++) {
//                 let index = newArrWord.indexOf(word[i]);
//                 match += newArrWord.slice(index, index + 1)
//                 newArrWord = newArrWord.replace(word[i], '')
//             }
//             match.length === word.length ?
//                 matchArr.push(arrWord) :
//                 null
//         }
//     })
//     return matchArr
// }
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);


////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. 
// The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

// function add(a, b) {
//     let num1 = a.split('');
//     let num2 = b.split('')
//     let carry = 0, addNum, result = []

//     while (num2.length < num1.length) {
//         num2.unshift('0')
//     }
//     while (num1.length < num2.length) {
//         num1.unshift('0')
//     }
//     for (let i = num1.length - 1; i >= 0; i--) {
//         // console.log(i)
//         addNum = parseInt(num1[i]) + parseInt(num2[i]) + parseInt(carry)
//         addNum = addNum.toString()
//         if (addNum.length === 2) {
//             result.unshift(addNum[1])
//         } else if (addNum.length === 1) {
//             result.unshift(addNum)
//         }
//         carry = addNum.length > 1 ? 1 : 0
//     }
//     carry === 1 ? result.unshift('1') : null
//     result = result.join('')
//     return result
// }
// add('1', '1')



//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// Write a function named first_non_repeating_letter that takes a string 
// input, and returns the first character that is not repeated anywhere 
// in the string.

// For example, if given the input 'stress', the function should return 
// 't', since the letter t only occurs once in the string, and occurs 
// first in the string.

// As an added challenge, upper- and lowercase letters are considered 
// the same character, but the function should return the correct case 
// for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an 
// empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
    // Add your code here
    let string = s.toLowerCase();
    let index = null;
    if (s.length === 0) {
        return ''
    }

    for (let i = 0; i < string.length; i++) {
        let stringArr = string.split('');
        stringArr.splice(i, 1);
        stringArr = stringArr.join('');
        if (stringArr.indexOf(string[i]) === -1) {
            index = i;
            break;
        }
    }

    return index === null ? '' : s[index];
};

firstNonRepeatingLetter('moonmon')