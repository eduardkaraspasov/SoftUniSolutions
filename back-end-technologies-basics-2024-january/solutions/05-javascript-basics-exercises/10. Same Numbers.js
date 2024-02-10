function solve(inputNumber){
    'use strict';

    let totalSum = 0;
    let allDigitsAreTheSame = true;
    let firstDigit = inputNumber % 10;

    while(inputNumber > 0) {
        let currentDigit = inputNumber % 10;

        if(firstDigit != currentDigit){
            allDigitsAreTheSame = false;
        }
        totalSum += currentDigit;
        inputNumber = Math.floor(inputNumber / 10);
    }
    console.log(allDigitsAreTheSame);
    console.log(totalSum);
}

solve(2222222);