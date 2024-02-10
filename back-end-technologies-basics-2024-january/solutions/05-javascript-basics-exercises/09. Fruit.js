function solve(fruit, weightPerGram, price){
    'use strict';

    let pricePerGram = price / 1000;
    let totalPrice = weightPerGram * pricePerGram;
    let weightInKilos = weightPerGram / 1000;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruit}.`);

}

solve("orange", 2500, 1.80);