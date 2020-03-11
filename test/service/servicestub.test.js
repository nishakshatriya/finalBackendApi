const assert = require('chai').assert;
const sinon = require('sinon').assert;
const service = require('../../main/source/service/service');
const json = require('/home/admin1/Desktop/MyQuantityMeasurementBackend (copy)/main/source/model/quantityjson.js');

var validInput = {
    unit = "LENGTH",
    unitValue1 = "INCH",
    unitValue2 = "INCH",
    input = 0
}

var nulldata = {
    unit = "MASS",
    unitValue1 = "GRAM",
    unitValue2 = "KILOGRAM",
    input = 1000
}

var emptydata = {
    unit = "LENGTH",
    unitValue1 = "INCH",
    unitValue2 = "FEEt",
    input = ""
}

var StringData = {
    unit = "LENGTH",
    unitValue1 = "YARD",
    unitValue2 = "FEET",
    input = "asdfghjkl"
}

describe("checking the unit conversions", function () {
    beforeEach(function () {
        sinon.stub(json, 'getValues').returns(validInput);
    })

    afterEach(function () {
        json.getValues.restore();
    })

    it('Zero inch should return 0 inch', () => {
        sinon.stub(json, 'getUnitValues').returns(validInput);

        service.unitMeasurement(validInput, (err, data) => {
            if (err) {
                console.log(err);
            }
            assert.equal(data, 0);
        });
        json.getValues.restore();
    })

    it('Given 12 inch should return 1 Feet', () => {
        sinon.stub(json,'getValues').returns(validInput);

        var inch = service.unitMeasurement(validInput, (err, data) => {
            if(err){
                console.log(err);
                
            }
            assert.equal(inch, 1);
        });
        json.getValues.restore();
    })

    it('Given null input should return undefined', () => {
        sinon.stub(json, 'getValues').returns(nulldata);
        var gram = service.unitMeasurement(nulldata, (err, data) => {
            if(err){
                console.log(err);
                
            }
            assert.equal(gram, 1);
        })
        json.getValues.restore();
    })

    it('Given empty input should return undefined', () => {
        sinon.stub(json, 'getValues').returns(emptydata);
        var data1 = service.unitMeasurement(emptydata, (err, data) => {
            if(err){
                console.log(err);
                
            }
            assert.equal(data1, undefined);
        });
        json.getValues.restore();
    })

    it('When given string type input should return', () =>{
        sinon.stub(json, 'getValues').returns(StringData);
        var data1 = service.unitMeasurement(StringData, (err,data) => {
            if(err){
                console.log(err);
                
            }
            assert.equal(data1, undefined);
        })
        json.getValues.restore();
    })
})