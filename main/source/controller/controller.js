var service = require('../service/service')

module.exports = {
    getConversion(req, res) {
        try {
            let obj = {
                unit:req.body.unit,
                unitType1: req.body.firstUnit,
                unitType2: req.body.secondUnit,
                input: req.body.unitValue1
            }
            let response = {}

            service.unitMeasurement(obj, ((err, data) => {
                if (err) {
                    response = {
                        success: "false",
                        message: "something went wrong",
                    }
                    res.status(500).send(response);

                    
                } else {
                    response = {
                        success: "true",
                        message: "successfully calculated",
                        data: data
                    }
                    console.log(response);
                    res.status(200).send(response)
                    
                }
            }))
        } catch (err) {
            res.status(500).send({ message: "internal error" })
        }
    }
    ,
    getUnits(req,res) {
        try{
            let obj = {
                unit:req.body.unit
            }
            service.getUnits(obj,(err,data)=>{
                if(err){
                    response={
                        success:"false",
                        message:"something went wrong"
                    }
                    res.status(500).send(response);
                }else{
                    response={
                        success:"true",
                        message:"successfully calculated",
                        data:data
                    }
                    res.status(200).send(response)
                }
            })
        } catch(err){
            console.log(err);          
            res,status(500).send({message: " internal error"})
        }},

        getBaseType(req,res){
            
                var baseType = service.getBaseUnitType(req,res);
                res.status(200).send({baseType});
        }
}
