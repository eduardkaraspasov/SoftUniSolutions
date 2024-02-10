import { isSymmetric } from './checkForSymmetry.js'
import { expect } from 'chai'

describe('isSymmetric', () => {

    it('if given an empty array should return true', () => {

        // Arrange 
        let inputArray = [];

        //Act
        let result = isSymmetric(inputArray)

        //Assert
        expect(true).to.be.true
    })

    it('should return false if non-array value is given', () => {

        // Arrange 
        

        //Act
        let nanResult = isSymmetric(NaN)
        let undefinedResult = isSymmetric(undefined)
        let objectResult = isSymmetric({})
        let nullResult = isSymmetric(null)
        let stringValue = isSymmetric('string value')
        let numberResult = isSymmetric(123)

        //Assert
        expect(nanResult).to.be.false
        expect(undefinedResult).to.be.false
        expect(objectResult).to.be.false
        expect(nullResult).to.be.false
        expect(stringValue).to.be.false
        expect(numberResult).to.be.false

    })

    it('should return false if a non-symmetric array is given', () => {

        // Arrange 
        let nonSymmetricArray = [1, 2, 3, 4];

        //Act
        let result = isSymmetric(nonSymmetricArray)

        //Assert
        expect(result).to.be.false
    })

    it('should return true if a symmetric array is given', () => {

        // Arrange 
        let symmetricArray = [3, 2, 1, 2, 3];

        //Act
        let result = isSymmetric(symmetricArray)

        //Assert
        expect(result).to.be.true
    })

    it('should return false for symmetric lookalike value', () => {

        // Arrange 
        let symmetricArray = ['1', '2', '3', 2, 1];

        //Act
        let result = isSymmetric(symmetricArray)

        //Assert
        expect(result).to.be.false
    })
})