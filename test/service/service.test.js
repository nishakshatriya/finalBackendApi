const assert = require("chai").assert;
const service = require("../../main/source/service/service");

let data = require('/home/admin1/Desktop/MyQuantityMeasurementBackend (copy)/test/input.json')

describe('Valid Input and Result', () =>{
   
  it('When correct input is given it should return calculated output',function(){
    service.unitMeasurement(data.ValidInput, (err, data)=>{
      if(err){
        console.log('Invalid data');   
      }
      assert.equal(data, 3);
    })
  }),

  it('When correct input is given but wrong expected output ', () => {
    service.unitMeasurement(data.ValidInput, (err, data) => {
      if(err){
        console.log('Invalid data');
      }
      assert.notEqual(data, 1);
    })
  })
})

describe('checking when Basetype is given wrong',() => {
  it('when wrong base unit type is given should give Err', () => {
    service.unitMeasurement(data.WrongBaseType, (err, data) => {
      if(err){
        assert.equal(err,'Wrong Base type is given');
      }   
    })
  })
})

describe('checking when null data is given', () => {
  it('when null data is given it should give Err', ()=>{
    service.unitMeasurement(data.NullInput, (err, data) => {
      if(err){
        assert.equal(err, 'Null data has been given as input');
      }
    })
  })
})

