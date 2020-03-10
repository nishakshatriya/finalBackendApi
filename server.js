const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(cors())

require('./main/source/routes/routes')(app)

var host = app.listen(4000, () => {
    console.log("server is listening on port 4000");

});
module.exports=host;