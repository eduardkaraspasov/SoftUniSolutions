function solve(arrayOfRawData){
    'use strict';

    let town = [];

    for(let rawData of arrayOfRawData){

        let splitData = rawData.split(" | ");
        town.push({
            town: splitData[0],
            latitude: parseFloat(splitData[1]).toFixed(2),
            longitude: parseFloat(splitData[2]).toFixed(2)
        })
    }

    town.forEach((town) => console.log(town));
}

solve(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625']);
solve(['Plovdiv | 136.45 | 812.575']);