
let chai = require('chai');
let chaihttp = require('chai-http');
let fs = require('fs');

chai.should();
chai.use(chaihttp);
var server = require('../../server.js');

var file = fs.readFileSync('/home/admin1/Desktop/MyQuantityMeasurementBackend (copy)/test/input.json','utf-8');
var data = JSON.parse(file)

describe('Testing controllers different scenarios',() => {
    it('checking if correct resp is given after giving valid input', done => {
        chai
        .request(server)
        .post('/converter')
        .send(data.ValidInput)
        .end((err, res) => {
            res.should.have.be.a("object");
            done();
        });
    });

    it('checking if correct resp is given after giving valid input', done => {
        chai
        .request(server)
        .get('/units')
        .send(data.ValidInput)
        .end((err, res) => {
            res.should.have.be.a("object");
            done();
        });
    });


    it('checking if wrong api is hitted it should not found', done => {
        chai
        .request(server)
        .get('/asdfg')
        .send(data.ValidInput)
        .end((err, res) => {
            res.should.have.status(404);
            done();
        });
    });

    it('checking if no api is given', done => {
        chai
        .request(server)
        .get('/')
        .send(data.WrongUnitTypes)
        .end((err, res) => {
            res.should.have.status(404);
            done();
        });
    });

    it('checking if wrong api is used for post', done => {
        chai
        .request(server)
        .post('/xyz')
        .send(data.NullInput)
        .end((err,res) => {
            res.should.have.status(404);
            done();
        });
    });

    it('checking if status code 200 is given after right req and res', done => {
        chai
        .request(server)
        .post('/converter')
        .send(data.ValidInput)   
        .end((err,res) => {
            res.should.have.status(200);

        });
    });
})
