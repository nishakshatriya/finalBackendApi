
module.exports=(app)=>{
    const controller = require('../controller/controller');

    app.post('/converter',controller.getConversion)
    app.get('/units/:key',controller.getUnits)
    app.get('/baseunits',controller.getBaseType)
  

}
