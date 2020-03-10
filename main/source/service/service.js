var quantity = require('../model/quantityjson');


module.exports = {
    unitMeasurement(obj, callback) {       
        unit = obj.unit
        unitType1 = obj.unitType1
        unitType2 = obj.unitType2
        var input = obj.input
        var result;

        if(unit == null || unitType1 == null || unitType2 == null || input == null){
            console.log("No required Field should be Null");
        }

        if( unit == undefined || unitType2 == undefined || unitType1 == undefined || input == undefined){
            console.log("Data is Empty");
        }

       
         result = quantity.getValues()[unit][unitType2][unitType1] * input;
         if(unit == "TEMPERATURE"){
            if(unitType1 == "CELCIUS"){    
                result = (input * 9/5)-32
                
            }else if (unitType1 == "FAHRENHIET"){
                result = (input -32)*5/9
            }
        }

         return callback(null, result);
        
    },

    getUnits(obj, callback) {
        var unitKeysVal; 
        var unitKeys = Object.keys(quantity.getValues())
            for(let i=0;i<unitKeys.length;i++){                
                if(unitKeys[i]==obj.unit)
                 unitKeysVal=Object.keys(quantity.getValues()[unitKeys[i]]);
            }       
            return callback(null,unitKeysVal);
        },

        getBaseUnitType(){
            var baseType = quantity.getValues();
            return baseType;
        }

}
