function solve(startNumber, endNumber){
    'ise strict';

    let message = '';
    let sum = 0;
    
    for(let index = startNumber; index <= endNumber; index++){
        sum += index;
        message += `${index} `
    }

    console.log(message.trimEnd());
    console.log(`Sum: ${sum}`);
}

solve(5, 10);