var assert = require('chai').assert;
var controller = require('../../main/source/controller/controller')
var Service = require('../../main/source/service/service')
var sinon = require('sinon');

describe('Check Quantity Values', function () {

    req = {
        FEET: 12
    }

    res = {
        send: function () { }
    }

    it('when req sent to controller it should send response', function () {
        sinon.stub(Service, 'quantityService').yields(null,"hey")
        let mock = sinon.mock(res);
        mock.expects('send').once().withExactArgs("hey")
        controller.getConversion(req, res);
        mock.verify();
    });
})
