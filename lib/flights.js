// AIRPORT_MAP maps all possible airport codes to airport objects
var AIRPORT_MAP = {
  ADL: { code: "ADL", name: "Adelaide" },
  DPS: { code: "DPS", name: "Bali - Denpasar" },
  PEK: { code: "PEK", name: "Bejing" },
  BNE: { code: "BNE", name: "Brisbane" },
  CNS: { code: "CNS", name: "Cairns" },
  CNX: { code: "CNX", name: "Chiang Mai - Thailand" },
  DAD: { code: "DAD", name: "DaNang - Vietnam" },
  DXB: { code: "DXB", name: "Dubai" },
  OOL: { code: "OOL", name: "Gold Coast" },
  HTI: { code: "HTI", name: "Hamilton Island" },
  HBA: { code: "HBA", name: "Hobart" },
  HKG: { code: "HKG", name: "Hong Kong" },
  HNL: { code: "HNL", name: "Honolulu " },
  KUL: { code: "KUL", name: "Kuala Lumpur" },
  MEL: { code: "MEL", name: "Melbourne - Tullamarine" },
  NAN: { code: "NAN", name: "Nadi - Fiji" },
  PER: { code: "PER", name: "Perth" },
  HKT: { code: "HKT", name: "Phuket - Thailand" },
  SIN: { code: "SIN", name: "Singapore" },
  SYD: { code: "SYD", name: "Sydney" },
  NRT: { code: "NRT", name: "Tokyo" },
}

var getFlightRegions = function() {
  return ["AU"]
}

var regionMainPorts = {
  AU: "SYD"
}

var getRegionDeparturePorts = function(region) {
  var ports = {
    AU: [
      AIRPORT_MAP["ADL"],
      AIRPORT_MAP["BNE"],
      AIRPORT_MAP["CNS"],
      AIRPORT_MAP["OOL"],
      AIRPORT_MAP["HTI"],
      AIRPORT_MAP["HBA"],
      AIRPORT_MAP["MEL"],
      AIRPORT_MAP["PER"],
      AIRPORT_MAP["SYD"],
    ]
  }

  return ports[region]
}

var getRegionDestinationPorts = function(region) {
  var ports = {
    AU: [
      AIRPORT_MAP["ADL"],
      AIRPORT_MAP["DPS"],
      AIRPORT_MAP["PEK"],
      AIRPORT_MAP["BNE"],
      AIRPORT_MAP["CNS"],
      AIRPORT_MAP["CNX"],
      AIRPORT_MAP["DAD"],
      AIRPORT_MAP["DXB"],
      AIRPORT_MAP["OOL"],
      AIRPORT_MAP["HTI"],
      AIRPORT_MAP["HBA"],
      AIRPORT_MAP["HKG"],
      AIRPORT_MAP["HNL"],
      AIRPORT_MAP["KUL"],
      AIRPORT_MAP["MEL"],
      AIRPORT_MAP["NAN"],
      AIRPORT_MAP["PER"],
      AIRPORT_MAP["HKT"],
      AIRPORT_MAP["SIN"],
      AIRPORT_MAP["SYD"],
      AIRPORT_MAP["NRT"],
    ]
  }

  return ports[region]
}

function getFlightMainPort(region) {
  return regionMainPorts[region]
}

// getAirportByCode returns an airport object for the given airport code
function getAirportByCode(code) {
  return AIRPORT_MAP[code]
}

module.exports = {
  getFlightRegions: getFlightRegions,
  getFlightMainPort: getFlightMainPort,
  getRegionDeparturePorts: getRegionDeparturePorts,
  getRegionDestinationPorts: getRegionDestinationPorts,
  getAirportByCode: getAirportByCode,
}
