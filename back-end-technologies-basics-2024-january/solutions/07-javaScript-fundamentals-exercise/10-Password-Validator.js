function solve(password){
    'use strict';

    let regexOnlyLettersAndDigits = /^[A-Za-z0-9]+$/
    let errors = [];
    let countDigitsInString = (word) => {
        let counter = 0;

        for(const char of word) {
            if(!isNaN(parseInt(char))) {
                counter += 1;
            }
        }

        return counter
    }

    let numberOfDigitsInString = countDigitsInString(password);

    if(password.length < 6 || password.length > 10) {
        errors.push('Password must be between 6 and 10 characters')
    }

    if(!password.match(regexOnlyLettersAndDigits)){
        errors.push('Password must consist only of letters and digits')
    }

    if(numberOfDigitsInString < 2) {
        errors.push('Password must have at least 2 digits')
    }

    if(errors.length === 0) {
        console.log('Password is valid');
    } else {
        errors.forEach((error) => console.log(errors))
    }

}

solve('logIn');
solve('MyPass123');