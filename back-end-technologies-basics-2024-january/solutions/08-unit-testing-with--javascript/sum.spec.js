import { sum } from './sum.js'
import { expect } from 'chai'

describe('The function sum', () => {

    it('Should return 0 if an empty array is given', () => {
        // Arange
        let inputArray = [];

        // Act
        let result = sum(inputArray)

        // Assert
        expect(result).to.equals(0);

    })

    it('Should return the single element as a sum if a single element array is given', () => {
        // Arange
        let inputArray = [33];

        // Act
        let result = sum(inputArray)

        // Assert
        expect(result).to.equals(33);
    })

    it('should return the total sum of an array if a multi value array is given', () => {
        // Arange
        let inputArray = [12, 3, 1];

        // Act
        let result = sum(inputArray)

        // Assert
        expect(result).to.equals(16);
    })
})