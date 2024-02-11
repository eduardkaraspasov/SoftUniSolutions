import { lookupChar } from "./charLookUp.js"
import { expect } from "chai"

describe("lookupChar", () => {

    it("should return undefined when First parameter is from incorrect type and second parameter is correct type", () => {
        //Arrange
        const incorrectFirstParam = 123;
        const correctSecondParam = 1;
        //Act
        const undefinedResult = lookupChar(incorrectFirstParam, correctSecondParam)

        //Assert
        expect(undefinedResult).to.be.equal(undefined)
    })

    it("should return undefined when First parameter is from correct type and second parameter is with incorrect type", () => {
        //Arrange
        const correctFirstParam = "some text ";
        const incorrectSecondParam = "10";
        //Act
        const undefinedResult = lookupChar(correctFirstParam, incorrectSecondParam)

        //Assert
        expect(undefinedResult).to.be.equal(undefined)
    })

    it("should return undefined when First parameter is from correct type and second parameter float number", () => {
        //Arrange
        const correctFirstParam = "some text";
        const incorrectSecondParam = 10.10;
        //Act
        const undefinedResult = lookupChar(correctFirstParam, incorrectSecondParam)

        //Assert
        expect(undefinedResult).to.be.equal(undefined)
    })

    it("should return Incorrect index when First parameter is from correct type and second parameter is bigger then the string length", () => {
        //Arrange
        const correctFirstParam = "some text ";
        const biggerLengthSecondParam = 20;
        //Act
        const incorrectIndexResult = lookupChar(correctFirstParam, biggerLengthSecondParam)

        //Assert
        expect(incorrectIndexResult).to.be.equal("Incorrect index");
    }) 

    it("should return Incorrect index when First parameter is from correct type and second parameter is lower then the string length", () => {
        //Arrange
        const correctFirstParam = "some text ";
        const lowerLengthSecondParam = -20;
        //Act
        const incorrectIndexResult = lookupChar(correctFirstParam, lowerLengthSecondParam)

        //Assert
        expect(incorrectIndexResult).to.be.equal("Incorrect index");
    })

    it("should return correct when all the parameters are correct", () => {
        //Arrange
        const correctFirstParam = "some text ";
        const correctSecondParam = 1;
        //Act
        const correctResult = lookupChar(correctFirstParam, correctSecondParam)

        //Assert
        expect(correctResult).to.be.equal("o");
    })
}) 