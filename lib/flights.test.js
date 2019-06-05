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

  describe("getAirportByCode", function() {
    it("should return airport object that correspond to the airport code", function() {
      var testCases = [
        { code: "ADL", expected: { code: "ADL", name: "Adelaide", latitude: -34.945, longitude: 138.531006, requiresAPIS: false } },
        { code: "MEL", expected: { code: "MEL", name: "Melbourne - Tullamarine", latitude: -37.673302, longitude: 144.843002, requiresAPIS: false } },
        { code: "NRT", expected: { code: "NRT", name: "Tokyo", latitude: 35.7647018433, longitude: 140.386001587, requiresAPIS: false } },
      ]

      testCases.forEach(function (tc) {
        var got = flights.getAirportByCode(tc.code)

        expect(got).to.deep.equal(tc.expected)
      })
    })
  })

  describe("getPopularRegionDeparturePorts", function() {
    it("returns a subset of the region departure ports", function() {
      flights.getFlightRegions().forEach(region => {
        const departurePorts = flights.getRegionDeparturePorts(region)
        const popularDeparturePorts = flights.getPopularRegionDeparturePorts(region)

        if (departurePorts.length > 0) {
          // Number of popular ports should be less than the full list
          expect(popularDeparturePorts.length)
            .to.be.below(departurePorts.length)

          // All popular ports must also be in the full list
          expect(departurePorts)
            .to.include.members(popularDeparturePorts)
        }
      })
    })
  })
})
