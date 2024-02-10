function solve(firstNumber, secondNumber, thirdNumber){
    'use strict';

    let smallestNumber = Math.min(firstNumber, secondNumber, thirdNumber);

    console.log(smallestNumber);
}

solve(2, 5, 3);
solve(600, 342, 123, 25, 21, 4);
solve(2,  2, 2);