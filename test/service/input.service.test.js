let chai = require('chai');
let chaihttp = require('chai-http')
let fs = require('fs');

chai.should();
chai.use(chaihttp);

var app = require('../../server');

var file  = fs.readFileSync('../inputdata/inputdata.json','utf-8')