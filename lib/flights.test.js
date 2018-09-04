var expect = require('chai').expect

var {
  validateDestinationPort,
  getFlightMainPort
} = require('./flights')

describe('flights', function() {
  describe('getFlightMainPort', function () {
    it('should return the region', function() {
      expect(getFlightMainPort('AU')).to.equal('SYD')
    })

    it('should error for invalid region', function() {
      expect(() => getFlightMainPort('BLAH')).to.throw('BLAH is not configured with a main port')
    })
  })

  describe('validateDestinationPort', function () {
    it('should return true for valid port', function() {
      expect(validateDestinationPort('SYD')).to.be.true
    })

    it('should throw an error for an invalid port', function() {
      expect(() => validateDestinationPort('BLAH')).to.throw('BLAH is not a valid airport code')
    })
  })
})
