function solve(firstNumber, secondNumber, thirdNumber){
    'use strict';

    // function sum(first, second) {
    //     return first + second
    // }

    let sum = (first, second) => first + second
    let subtract = (first, second) => first - second

    let result = subtract(sum(firstNumber, secondNumber), thirdNumber)
    
    console.log(result);
}

solve(23, 6, 10);
solve(42, 58, 100);