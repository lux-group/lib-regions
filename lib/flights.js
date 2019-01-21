var getFlightRegions = function() {
  return ["AU"]
}

var regionMainPorts = {
  AU: "SYD"
}

var getRegionDeparturePorts = function(region) {
  var ports = {
    AU: ["SYD", "MEL", "BNE", "ADL", "PER", "HBA", "CNS", "OOL"]
  }

  return ports[region]
}

var getRegionDestinationPorts = function(region) {
  var ports = {
    AU: [
      "SYD",
      "MEL",
      "BNE",
      "ADL",
      "PER",
      "HBA",
      "CNS",
      "OOL",
      "NAN",
      "HNL",
      "PEK",
      "NRT",
      "DAD",
      "SIN",
      "KUL",
      "HTI",
      "DPS",
      "CNX",
      "DXB",
      "HKT",
      "HKG"
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
