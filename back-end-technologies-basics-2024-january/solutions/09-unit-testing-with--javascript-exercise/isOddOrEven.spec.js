import { isOddOrEven } from "./isOddOrEven.js"
import { expect } from "chai"

describe("isOddOrEven", () => {

    it("should return undefined when pass non string value as input", () => {
        //Arrange
        const inputValueNumber = 15;
        const inputValueUndefined = undefined;
        const inputValueNull = null;
        const inputValueFloatNumber = 15.12;

        //Act
        const resultNumber = isOddOrEven(inputValueNumber);
        const resultUndefined = isOddOrEven(inputValueUndefined);
        const resultNull = isOddOrEven(inputValueNull);
        const resultFloatNumber = isOddOrEven(inputValueFloatNumber);
        //Assert
        expect(resultNumber).to.be.equal(undefined); 
        expect(resultUndefined).to.be.equal(undefined); 
        expect(resultNull).to.be.equal(undefined); 
        expect(resultFloatNumber).to.be.equal(undefined); 
    })

    it("should return even when the input string length is even", () => {
        //Arrange
        const evenStringLength = "1234";

        //Act
        const resultEvenStringLength = isOddOrEven(evenStringLength);

        //Assert
        expect(resultEvenStringLength).to.be.equal("even"); 
    })

    it("should return even when the input string length is odd", () => {
        //Arrange
        const oddStringLength = "123";

        //Act
        const resultOddStringLength = isOddOrEven(oddStringLength);

        //Assert
        expect(resultOddStringLength).to.be.equal("odd"); 
    })

    it("should return even when the input string length is 0", () => {
        //Arrange
        const zeroLengthString = "";

        //Act
        const resultZeroLengthString = isOddOrEven(zeroLengthString);

        //Assert
        expect(resultZeroLengthString).to.be.equal("even"); 
    })
})