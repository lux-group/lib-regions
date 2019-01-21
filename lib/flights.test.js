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
      expect(flights.getRegionDeparturePorts("AU").includes("ADL")).to.be.true
    })
  })

  describe("getRegionDestinationPorts", function() {
    it("should return values for the region", function() {
      expect(flights.getRegionDestinationPorts("AU").includes("DPS")).to.be.true
    })
  })
})
