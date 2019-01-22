var expect = require("chai").expect

var flights = require("./flights")

describe("flights", function() {
  describe("getFlightMainPort", function() {
    it("should return the region", function() {
      expect(flights.getFlightMainPort("AU")).to.equal("SYD")
    })
  })

  describe("getRegionDeparturePorts", function() {
    it("should return values for the region", function() {
      expect(
        flights
          .getRegionDeparturePorts("AU")
          .map(function(port) {
            return port.code
          })
          .includes("ADL")
      ).to.be.true
    })
  })

  describe("getRegionDestinationPorts", function() {
    it("should return values for the region", function() {
      expect(
        flights
          .getRegionDestinationPorts("AU")
          .map(function(port) {
            return port.code
          })
          .includes("DPS")
      ).to.be.true
    })
  })
})
