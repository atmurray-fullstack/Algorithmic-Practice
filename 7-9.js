///////////////PROBLEM 1 ///////////////
// const arr = [1, 2, 3, 4, 10, 11];

// function simpleArraySum(ar) {
//     let cnt = 0;

//     if (ar.length > 0) {


//         for (let i = 0; i < ar.length; i++) {
//             cnt += ar[i];
//         }

//     }
//     console.log(cnt);
// }

// simpleArraySum(arr)


/////////////problem 2 ////////////////

// let a = [1, 2, 3];
// let b = [2, 0, 3];

// function compareTriplets(a, b) {
//     const arrScore = [0, 0];

//     a.forEach((el, ind) => {

//         if (el !== b[ind]) {
//             el > b[ind] ? arrScore[0]++ : arrScore[1]++
//         }

//     });
//     return arrScore;


// };
// compareTriplets(a, b);

// function spinWords(str) {
//     //TODO Have fun :)
//     let arr = [];
//     arr = str.split(' ');
//     let newString = ''
//     arr.forEach((el, ind) => {

//         if (el.length >= 5) {
//             let revString = '';
//             for (let i = el.length - 1; i >= 0; i--) {
//                 revString += el[i];
//             };
//             newString += revString + ' ';
//         } else {
//             newString += arr[ind] + ' '
//         }
//     });
//     return newString.trim();

// }


/////////////////////problem4//////////////////

// function filter_list(l) {
//     // Return a new array with the strings filtered out
//     let arr = l.filter(el => {
//         return typeof el === 'number';
//     });
//     return arr
// };

//////////////problem 5///////////////////////

// function getCount(str) {
//     var vowelsCount = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
//             vowelsCount++
//     }
//     return vowelsCount;
// }

///////problem 6

// function getSum(a, b) {

//     let x, y;
//     if (a > b) {
//         bigger = a
//         smaller = b
//     } else {
//         bigger = b
//         smaller = a
//     }
//     let sum = smaller;
//     for (let i = smaller+1; i <= bigger; i++) {
//         sum += i
//     }
//     return sum

// }
/////////////problem 7
// return masked string
// function maskify(cc) {
//     if (cc.length >= 4) {
//         cnt = cc.length - 4
//         let newString = cc.slice(cc.length - 4);
//         let hiddenString = '#'.repeat(cc.length - 4);
//         return hiddenString + newString;
//     } else { return cc }


// }

/////////////////problem 8

// function divisors(int) {
//     let numArr = []
//     for (let i = 2; i < int; i++) {
//         if (Math.abs(int % i) === 0) {
//             numArr.push(i);
//         }
//     };

//     return numArr.length > 0 ? numArr : int + ' is prime'
// };

/////////////problem 8
// function DNAStrand(dna) {
//     //your code here
//     let newString = '';
//     for (let i = 0; i < dna.length; i++) {
//         if (dna[i] === 'A') {
//             newString += 'T'
//         } else if (dna[i] === 'T') {
//             newString += 'A'
//         } else if (dna[i] === 'C') {
//             newString += 'G'
//         } else if (dna[i] === 'G') {
//             newString += 'C'
//         } else {
//             return 'not valid argument entry'
//         }
//     }
//     return newString
// }

/////////////problem 9
// function digPow(n, p) {

//     let str = n.toString();
//     str = str.split('');
//     let sum = 0;
//     for (let i = 0; i <= str.length - 1; i++) {
//         sum += Math.pow(parseInt(str[i]), p + i);
//     }
//     return Number.isInteger(sum / n) ? sum / n : -1

// }

////////problem 10

// function tribonacci(sig, n) {
//     let arrTrib = [...sig];
//     let num = null;

//     if (n === 0) {
//         return []
//     } else if (n <= 3) {
//         return arrTrib.slice(0, n)
//     }

//     for (let i = 3; i < n; i++) {
//         num = arrTrib[i - 1] + arrTrib[i - 2] + arrTrib[i - 3]
//         arrTrib.push(num);
//     }
//     return arrTrib;
// }

// console.log(tribonacci([1, 2, 3], 10))

///////////////////

