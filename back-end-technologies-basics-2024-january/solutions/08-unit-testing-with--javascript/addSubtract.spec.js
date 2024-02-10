import { createCalculator } from './addSubtract.js'
import { expect } from 'chai'

describe('createCalculator', () => {

    it('should return 0 if no operation are executed on the calculator', () => {

        //Arrange
        let calculator = createCalculator()

        //Act
        let result = calculator.get()

        //Assert
        expect(result).to.equals(0)

    })

    it('should return a negative number if only subtract operation are executed with positive on the calculator', () => {

        //Arrange
        let calculator = createCalculator()

        //Act
        calculator.subtract(3)
        calculator.subtract(3)
        calculator.subtract(10)
        let result = calculator.get()

        //Assert
        expect(result).to.equals(-16)

    })

    it('should return a positive number if only add operation are executed with positive on the calculator', () => {

        //Arrange
        let calculator = createCalculator()

        //Act
        calculator.add(2)
        calculator.add(2)
        calculator.add(100)
        let result = calculator.get()

        //Assert
        expect(result).to.equals(104)

    })

    it('should handle number as strings', () => {
        
         //Arrange
         let calculator = createCalculator()

         //Act
         calculator.add('2')
         calculator.add('2')
         calculator.add('100')
         calculator.subtract('104')
         let result = calculator.get()
 
         //Assert
         expect(result).to.equals(0)

    })

    it('should handle a mix of operations', () => {

        //Arrange
        let calculator = createCalculator()

        //Act
        calculator.add(2)
        calculator.add(2)
        calculator.add(100)
        calculator.add(-4)
        calculator.subtract(-100)
        calculator.subtract(200)
        let result = calculator.get()

        //Assert
        expect(result).to.equals(0)
    })
})