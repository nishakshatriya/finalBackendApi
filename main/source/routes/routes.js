
module.exports=(app)=>{
    const controller = require('../controller/controller');

    app.post('/enterValue',controller.getConversion)
    app.get('/find',controller.getUnits)
  

}
