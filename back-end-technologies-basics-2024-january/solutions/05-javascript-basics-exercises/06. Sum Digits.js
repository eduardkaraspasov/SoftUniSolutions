function solve(number){
    'use strict';

    let numberAsString = number.toString();
    let totalSum = 0;

    for(let char of numberAsString) {
        let charAsNumber = parseInt(char, 10)
        totalSum += charAsNumber;
    }
    console.log(totalSum);
}

solve(12345);
solve(245678);