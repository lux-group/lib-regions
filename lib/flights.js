var getFlightRegions = function() {
  return ["AU"]
}

var regionMainPorts = {
  AU: "SYD"
}

var getRegionDeparturePorts = function(region) {
  var ports = {
    AU: [
      { code: "ADL", name: "Adelaide" },
      { code: "BNE", name: "Brisbane" },
      { code: "CNS", name: "Cairns" },
      { code: "OOL", name: "Gold Coast" },
      { code: "HTI", name: "Hamilton Island" },
      { code: "HBA", name: "Hobart" },
      { code: "MEL", name: "Melbourne - Tullamarine" },
      { code: "PER", name: "Perth" },
      { code: "SYD", name: "Sydney" }
    ]
  }

  return ports[region]
}

var getRegionDestinationPorts = function(region) {
  var ports = {
    AU: [
      { code: "ADL", name: "Adelaide" },
      { code: "DPS", name: "Bali - Denpasar" },
      { code: "PEK", name: "Bejing" },
      { code: "BNE", name: "Brisbane" },
      { code: "CNS", name: "Cairns" },
      { code: "CNX", name: "Chiang Mai - Thailand" },
      { code: "DAD", name: "DaNang - Vietnam" },
      { code: "DXB", name: "Dubai" },
      { code: "OOL", name: "Gold Coast" },
      { code: "HTI", name: "Hamilton Island" },
      { code: "HBA", name: "Hobart" },
      { code: "HKG", name: "Hong Kong" },
      { code: "HNL", name: "Honolulu " },
      { code: "KUL", name: "Kuala Lumpur" },
      { code: "MEL", name: "Melbourne - Tullamarine" },
      { code: "NAN", name: "Nadi - Fiji" },
      { code: "PER", name: "Perth" },
      { code: "HKT", name: "Phuket - Thailand" },
      { code: "SIN", name: "Singapore" },
      { code: "SYD", name: "Sydney" },
      { code: "NRT", name: "Tokyo" }
    ]
  }

  return ports[region]
}

function getFlightMainPort(region) {
  return regionMainPorts[region]
}

module.exports = {
  getFlightRegions: getFlightRegions,
  getFlightMainPort: getFlightMainPort,
  getRegionDeparturePorts: getRegionDeparturePorts,
  getRegionDestinationPorts: getRegionDestinationPorts
}
