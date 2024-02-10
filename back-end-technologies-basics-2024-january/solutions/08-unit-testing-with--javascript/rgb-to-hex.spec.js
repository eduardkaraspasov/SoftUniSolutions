import { rgbToHexColor } from './rgb-to-hex.js'
import { expect } from 'chai'

describe('rgbToHexColor', () => {

    it('should return undefined if red value is invalid', () => {

        //Arrange
        //Act
        let nonNumericRedValueResult = rgbToHexColor('123', 0, 0)
        let negativeRedValueResult = rgbToHexColor(-123, 0, 0)
        let tooBigRedValue = rgbToHexColor(999, 0, 0)

        //Assert

        expect(nonNumericRedValueResult).to.be.undefined
        expect(negativeRedValueResult).to.be.undefined
        expect(tooBigRedValue).to.be.undefined
    })

    it('should return undefined if green value is invalid', () => {

        //Arrange
        //Act
        let nonNumericGreenValueResult = rgbToHexColor(0, '123', 0)
        let negativeGreenValueResult = rgbToHexColor(0, -123, 0)
        let tooBigGreenValue = rgbToHexColor(0, 999, 0)

        //Assert

        expect(nonNumericGreenValueResult).to.be.undefined
        expect(negativeGreenValueResult).to.be.undefined
        expect(tooBigGreenValue).to.be.undefined

    })  

    it('should return undefined if blue value is invalid', () => {

        //Arrange
        //Act
        let nonNumericBlueValueResult = rgbToHexColor(0, 0, '123')
        let negativeBlueValueResult = rgbToHexColor(0, 0, -123)
        let tooBigBlueValue = rgbToHexColor(0, 0, 999)

        //Assert

        expect(nonNumericBlueValueResult).to.be.undefined
        expect(negativeBlueValueResult).to.be.undefined
        expect(tooBigBlueValue).to.be.undefined

    })

    it('should return a correct hex value if a correct rgb is given', () => {

        //Arrange
        let redValue = 223;
        let greenValue = 123;
        let blueValue = 12;

        //Act
        let result = rgbToHexColor(redValue, greenValue, blueValue)

        //Assert 
        expect(result).to.equals('#DF7B0C')

    })

    it('should return a correct hex value if a max rgb value is given', () => {

        //Arrange
        let redValue = 255;
        let greenValue = 255;
        let blueValue = 255;

        //Act
        let result = rgbToHexColor(redValue, greenValue, blueValue)

        //Assert 
        expect(result).to.equals('#FFFFFF')

    })

    it('should return a correct hex value if a min rgb value is given', () => {

        //Arrange
        let redValue = 0;
        let greenValue = 0;
        let blueValue = 0;

        //Act
        let result = rgbToHexColor(redValue, greenValue, blueValue)

        //Assert 
        expect(result).to.equals('#000000')

    })
})