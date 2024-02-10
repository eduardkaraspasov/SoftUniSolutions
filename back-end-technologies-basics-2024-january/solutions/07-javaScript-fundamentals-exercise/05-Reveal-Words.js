// function solve(words, template){
//     'use strict';

//     let separatedWord = words.split(", ");
//     let templateWords = template.split(" ");
//     let result = [];

//     for(let templateWord of templateWords){
//         if(templateWord[0] === "*") {
//             let correspondingWord = separatedWord.find(x => x.length === templateWord.length)
//             result += `${correspondingWord} `; 
//         } else {
//             result += `${templateWord} `
//         }
//     }
//     console.log(result);
// }

function solve(words, template){
    'use strict';

    let separatedWords = words.split(", ");

    for(let separatedWord of separatedWords){
        template = template.replace("*".repeat(separatedWord.length), separatedWord);
    }
    console.log(template);
}

solve('great',
'softuni is ***** place for learning new programming languages');
solve('great, learning',
'softuni is ***** place for ******** new programming languages');