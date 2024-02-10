function solve(inputNumber){
    'use strict';

    let oddSum = 0;
    let evenSum = 0;

    while(inputNumber > 0) {
        let currDigit = inputNumber % 10;
        
        if(currDigit % 2 === 0) {
            evenSum += currDigit
        } else {
            oddSum += currDigit
        }

        inputNumber = Math.floor(inputNumber / 10);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

solve(1000435);
solve(3495892137259234);