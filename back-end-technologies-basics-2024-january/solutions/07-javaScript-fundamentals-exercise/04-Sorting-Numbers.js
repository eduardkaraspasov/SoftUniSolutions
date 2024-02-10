function solve(inputArray){
    'use strict';

    inputArray.sort((a, b) => a - b);

    let result = [];

    while (inputArray.length > 0) {
        let firstElement = inputArray.shift();
        let lastElement = inputArray.pop();

        result.push(firstElement)

        if(lastElement){
            result.push(lastElement);
        }
    }

    return result;

}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));