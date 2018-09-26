var expect = require('chai').expect

var {
  getFlightMainPort
} = require('./flights')

describe('flights', function () {
  describe('getFlightMainPort', function () {
    it('should return the region', function () {
      expect(getFlightMainPort('AU')).to.equal('SYD')
    })

    it('should error for invalid region', function () {
      expect(() => getFlightMainPort('BLAH')).to.throw('BLAH is not configured with a main port')
    })
  })
})
