var quantity = require('../model/quantityjson');


module.exports = {
    unitMeasurement(obj, callback) {       
        unit = obj.unit
        unitType1 = obj.unitType1
        unitType2 = obj.unitType2
        var input = obj.input
        var result;

        console.log( quantity.getValues()[unit][unitType2][unitType1] * input );
         result = quantity.getValues()[unit][unitType2][unitType1] * input;
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
        }

}
