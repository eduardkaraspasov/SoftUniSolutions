function solve(input) {
    'use strict';

    const words = input.toLowerCase().split(' ');

    const wordFrequencies = {};

    for (const word of words) {
        if (wordFrequencies[word]) {
            wordFrequencies[word]++;
        } else {
            wordFrequencies[word] = 1;
        }
    }


    const oddOccurrences = [];
    for (const word in wordFrequencies) {
        if (wordFrequencies[word] % 2 !== 0) {
            oddOccurrences.push(word);
        }
    }


    return oddOccurrences.join(' ');
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');