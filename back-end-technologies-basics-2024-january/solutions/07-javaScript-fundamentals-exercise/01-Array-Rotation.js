function solve(inputArray, numberOfRotations){
    'use strict';

    for (let index = 0; index < numberOfRotations; index++) {
        let firstElement = inputArray.shift();
        inputArray.push(firstElement);
    }

    console.log(inputArray.join(" "));
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);