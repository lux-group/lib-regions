var expect = require('chai').expect

var flights = require('./flights')

describe('flights', function() {
  describe('getFlightMainPort', function () {
    it('should return the region', function() {
      expect(flights.getFlightMainPort('AU')).to.equal('SYD')
    })

    it('should error for invalid region', function() {
      expect(function() {
        return flights.getFlightMainPort('BLAH')
      }).to.throw('BLAH is not configured with a main port')
    })
  })
})
