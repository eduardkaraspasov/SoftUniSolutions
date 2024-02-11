import { mathEnforcer } from "./mathEnforcer.js/"
import { expect } from "chai"

describe("mathEnforcer", () => {
    describe("addFive", () => {

        it("should return undefined when pass string as input", () => {
            //Arrange
            const stringInput = "Some string"
            //Act
            const undefinedResult = mathEnforcer.addFive(stringInput)
            //Assert
            expect(undefinedResult).to.be.equal(undefined)
        })

        it("should return undefined when pass undefined as input", () => {
            //Arrange
            const undefinedInput = undefined;
            //Act
            const undefinedResult = mathEnforcer.addFive(undefinedInput)
            //Assert
            expect(undefinedResult).to.be.equal(undefined)
        })

        it("should return undefined when pass number as string as input", () => {
            //Arrange
            const numberAsStringInput = "0";
            //Act
            const undefinedResult = mathEnforcer.addFive(numberAsStringInput)
            //Assert
            expect(undefinedResult).to.be.equal(undefined)
        })

        it("should return correct result when pass floating number as input with closeTo", () => {
            //Arrange
            const floatingInput = 20.12;
            //Act
            const correctResult = mathEnforcer.addFive(floatingInput)
            //Assert
            expect(correctResult).to.be.closeTo(25.12, 0.01)
        })

        it("should return correct result when pass floating number as input and assert with equal", () => {
            //Arrange
            const floatingInput = 20.02;
            //Act
            const correctResult = mathEnforcer.addFive(floatingInput)
            //Assert
            expect(correctResult).to.be.equal(25.02)
        })

        it("should return correct result when pass floating with a lot of digits as input with closeTo", () => {
            //Arrange
            const floatingInput = 20.0000001;
            //Act
            const correctResult = mathEnforcer.addFive(floatingInput)
            //AssertS
            expect(correctResult).to.be.closeTo(25.01, 0.01)
        })

        it("should return correct result when pass number as input", () => {
            //Arrange
            const numberInput = 5;
            //Act
            const correctResult = mathEnforcer.addFive(numberInput)
            //AssertS
            expect(correctResult).to.be.equal(10)
        })

        it("should return correct result when pass negative number as input", () => {
            //Arrange
            const negativeNumberInput = -15;
            //Act
            const correctResult = mathEnforcer.addFive(negativeNumberInput)
            //AssertS
            expect(correctResult).to.be.equal(-10)
        })

        it("should return correct result when pass negative number as input", () => {
            //Arrange
            const negativeNumberInput = -5;
            //Act
            const correctResult = mathEnforcer.addFive(negativeNumberInput)
            //AssertS
            expect(correctResult).to.be.equal(0)
        })
    })

    describe("subtractTen", () => {

        it("should return undefined when pass string as input", () => {
            //Arrange
            const stringInput = "Some string"
            //Act
            const undefinedResult = mathEnforcer.subtractTen(stringInput)
            //Assert
            expect(undefinedResult).to.be.equal(undefined)
        })

        it("should return undefined when pass undefined as input", () => {
            //Arrange
            const undefinedInput = undefined;
            //Act
            const undefinedResult = mathEnforcer.subtractTen(undefinedInput)
            //Assert
            expect(undefinedResult).to.be.equal(undefined)
        })

        it("should return undefined when pass number as string as input", () => {
            //Arrange
            const numberAsStringInput = "0";
            //Act
            const undefinedResult = mathEnforcer.subtractTen(numberAsStringInput)
            //Assert
            expect(undefinedResult).to.be.equal(undefined)
        })

        it("should return correct result when pass floating number as input with closeTo", () => {
            //Arrange
            const floatingInput = 20.12;
            //Act
            const correctResult = mathEnforcer.subtractTen(floatingInput)
            //Assert
            expect(correctResult).to.be.closeTo(10.12, 0.01)
        })

        it("should return correct result when pass floating number as input and assert with equal", () => {
            //Arrange
            const floatingInput = 20.02;
            //Act
            const correctResult = mathEnforcer.subtractTen(floatingInput)
            //Assert
            expect(correctResult).to.be.equal(10.02)
        })

        it("should return correct result when pass floating with a lot of digits as input with closeTo", () => {
            //Arrange
            const floatingInput = 20.0000001;
            //Act
            const correctResult = mathEnforcer.subtractTen(floatingInput)
            //AssertS
            expect(correctResult).to.be.closeTo(10.01, 0.01)
        })

        it("should return correct result when pass number as input", () => {
            //Arrange
            const numberInput = 5;
            //Act
            const correctResult = mathEnforcer.subtractTen(numberInput)
            //AssertS
            expect(correctResult).to.be.equal(-5)
        })

        it("should return correct result when pass negative number as input", () => {
            //Arrange
            const negativeNumberInput = -15;
            //Act
            const correctResult = mathEnforcer.subtractTen(negativeNumberInput)
            //AssertS
            expect(correctResult).to.be.equal(-25)
        })

        it("should return correct result when pass negative number as input", () => {
            //Arrange
            const negativeNumberInput = -5;
            //Act
            const correctResult = mathEnforcer.subtractTen(negativeNumberInput)
            //AssertS
            expect(correctResult).to.be.equal(-15)
        })
    })

    describe("sum", () => {

        it("should return undefined when Param1: incorrect and Param2: correct", () => {
            //Arrange
            const incorrectFirstParam = "something";
            const correctSecondParam = 5;
            //Act
            const undefinedResults = mathEnforcer.sum(incorrectFirstParam, correctSecondParam);
            //Assert
            expect(undefinedResults).to.be.undefined;
        })

        it("should return undefined when Param1: correct and Param2: incorrect", () => {
            //Arrange
            const correctFirstParam = 5;
            const incorrectSecondParam = "something";
            //Act
            const undefinedResults = mathEnforcer.sum(correctFirstParam, incorrectSecondParam);
            //Assert
            expect(undefinedResults).to.be.undefined;
        })

        it("should return undefined when Param1: incorrect and Param2: incorrect", () => {
            //Arrange
            const correctFirstParam = "something";
            const incorrectSecondParam = "something";
            //Act
            const undefinedResults = mathEnforcer.sum(correctFirstParam, incorrectSecondParam);
            //Assert
            expect(undefinedResults).to.be.undefined;
        })

        it("should return undefined when Param1: number as string and Param2: correct", () => {
            //Arrange
            const numberAsStringFirstParam = '5';
            const correctSecondParam = 5;
            //Act
            const undefinedResults = mathEnforcer.sum(numberAsStringFirstParam, correctSecondParam);
            //Assert
            expect(undefinedResults).to.be.undefined;
        })

        it("should return undefined when Param1: number as string and Param2: correct", () => {
            //Arrange
            const numberAsStringFirstParam = 5;
            const correctSecondParam = '5';
            //Act
            const undefinedResults = mathEnforcer.sum(numberAsStringFirstParam, correctSecondParam);
            //Assert
            expect(undefinedResults).to.be.undefined;
        })

        it("should return undefined when Param1: correct as string and Param2: correct", () => {
            //Arrange
            const correctFirstParam = 5;
            const correctSecondParam = 5;
            //Act
            const correctResult = mathEnforcer.sum(correctFirstParam, correctSecondParam);
            //Assert
            expect(correctResult).to.be.equal(10);
        })

        it("should return undefined when Param1: negative number as string and Param2: negative number", () => {
            //Arrange
            const correctFirstParam = -5;
            const correctSecondParam = -5;
            //Act
            const correctResult = mathEnforcer.sum(correctFirstParam, correctSecondParam);
            //Assert
            expect(correctResult).to.be.equal(-10);
        })

        it("should return undefined when Param1: negative number as string and Param2: negative number", () => {
            //Arrange
            const correctFirstParam = -5;
            const correctSecondParam = 5;
            //Act
            const correctResult = mathEnforcer.sum(correctFirstParam, correctSecondParam);
            //Assert
            expect(correctResult).to.be.equal(0);
        })

        it("should return undefined when Param1: floating number as string and Param2: negative number", () => {
            //Arrange
            const flaotingNumberFirstParam = 5.01;
            const correctSecondParam = 5;
            //Act
            const correctResult = mathEnforcer.sum(flaotingNumberFirstParam, correctSecondParam);
            //Assert
            expect(correctResult).to.be.equal(10.01);
        })

        it("should return undefined when Param1: floating number as string and Param2: negative number with closeTo assertion", () => {
            //Arrange
            const floatingNumberFirstParam = 5.00001;
            const correctSecondParam = 5;
            //Act
            const correctResult = mathEnforcer.sum(floatingNumberFirstParam, correctSecondParam);
            //Assert
            expect(correctResult).to.be.closeTo(10.01, 0.01);
        })

        it("should return undefined when Param1: floating number as string and Param2: negative number with closeTo assertion", () => {
            //Arrange
            const floatingNumberFirstParam = 5.01;
            const correctSecondParam = 5.01;
            //Act
            const correctResult = mathEnforcer.sum(floatingNumberFirstParam, correctSecondParam);
            //Assert
            expect(correctResult).to.be.closeTo(10.02, 0.01);
        })

        it("should return undefined when Param1: floating number as string and Param2: negative number with closeTo assertion", () => {
            //Arrange
            const floatingNumberFirstParam = 0;
            const correctSecondParam = 0.1;
            //Act
            const correctResult = mathEnforcer.sum(floatingNumberFirstParam, correctSecondParam);
            //Assert
            expect(correctResult).to.be.closeTo(0.1, 0.01);
        })

    })
})