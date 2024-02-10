function solve(year){
    "use strict"
    let isLeapYear = (year % 4 == 0 && year % 100 !== 0) || year % 400 === 0;
    let message = isLeapYear ? "yes" : "no";

    console.log(message);

}

solve(1984);