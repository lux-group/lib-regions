// AIRPORT_MAP maps all possible airport codes to airport objects
var AIRPORT_MAP = {
  ADL: { code: "ADL", name: "Adelaide" },
  AKL: { code: "AKL", name: "Auckland" },
  DPS: { code: "DPS", name: "Bali - Denpasar" },
  BNK: { code: "BNK", name: "Ballina Byron" },
  BKK: { code: "BKK", name: "Bangkok" },
  PEK: { code: "PEK", name: "Bejing" },
  BNE: { code: "BNE", name: "Brisbane" },
  CNS: { code: "CNS", name: "Cairns" },
  CNX: { code: "CNX", name: "Chiang Mai - Thailand" },
  CHC: { code: "CHC", name: "Christchurch" },
  DAD: { code: "DAD", name: "DaNang - Vietnam" },
  DRW: { code: "DRW", name: "Darwin" },
  DXB: { code: "DXB", name: "Dubai" },
  DUD: { code: "DUD", name: "Dunedin" },
  OOL: { code: "OOL", name: "Gold Coast" },
  HTI: { code: "HTI", name: "Hamilton Island" },
  NPE: { code: "NPE", name: "Hawke's Bay - Napier" },
  HBA: { code: "HBA", name: "Hobart" },
  SGN: { code: "SGN", name: "Ho Chi Minh City" },
  HKG: { code: "HKG", name: "Hong Kong" },
  HNL: { code: "HNL", name: "Honolulu" },
  KUL: { code: "KUL", name: "Kuala Lumpur" },
  LST: { code: "LST", name: "Launceston" },
  MKY: { code: "MKY", name: "Mackay" },
  MEL: { code: "MEL", name: "Melbourne - Tullamarine" },
  NAN: { code: "NAN", name: "Nadi - Fiji" },
  NSN: { code: "NSN", name: "Nelson" },
  NPL: { code: "NPL", name: "New Plymouth" },
  NTL: { code: "NTL", name: "Newcastle" },
  KIX: { code: "KIX", name: "Osaka" },
  PMR: { code: "PMR", name: "Palmerston North" },
  PER: { code: "PER", name: "Perth" },
  HKT: { code: "HKT", name: "Phuket - Thailand" },
  PPP: { code: "PPP", name: "Proserpine - Whitsunday Coast" },
  ZQN: { code: "ZQN", name: "Queenstown" },
  RAR: { code: "RAR", name: "Rarotonga" },
  SIN: { code: "SIN", name: "Singapore" },
  MCY: { code: "MCY", name: "Sunshine Coast" },
  SYD: { code: "SYD", name: "Sydney" },
  NRT: { code: "NRT", name: "Tokyo" },
  TSV: { code: "TSV", name: "Townsville" },
  AYQ: { code: "AYQ", name: "Uluru - Ayers Rock" },
  WLG: { code: "WLG", name: "Wellington" },
  CGO: { code: "CGO", name: "Zhengzhou" },
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
      AIRPORT_MAP["DRW"],
      AIRPORT_MAP["OOL"],
      AIRPORT_MAP["HBA"],
      AIRPORT_MAP["LST"],
      AIRPORT_MAP["MEL"],
      AIRPORT_MAP["PER"],
      AIRPORT_MAP["SYD"],
    ]
  }

  return ports[region] || []
}

var getRegionDestinationPorts = function(region) {
  var ports = {
    AU: [
      AIRPORT_MAP["ADL"],
      AIRPORT_MAP["AKL"],
      AIRPORT_MAP["DPS"],
      AIRPORT_MAP["BNK"],
      AIRPORT_MAP["BKK"],
      AIRPORT_MAP["BNE"],
      AIRPORT_MAP["CNS"],
      AIRPORT_MAP["CHC"],
      AIRPORT_MAP["DRW"],
      AIRPORT_MAP["DUD"],
      AIRPORT_MAP["OOL"],
      AIRPORT_MAP["HTI"],
      AIRPORT_MAP["NPE"],
      AIRPORT_MAP["HBA"],
      AIRPORT_MAP["SGN"],
      AIRPORT_MAP["HNL"],
      AIRPORT_MAP["LST"],
      AIRPORT_MAP["MKY"],
      AIRPORT_MAP["MEL"],
      AIRPORT_MAP["NSN"],
      AIRPORT_MAP["NPL"],
      AIRPORT_MAP["NTL"],
      AIRPORT_MAP["KIX"],
      AIRPORT_MAP["PMR"],
      AIRPORT_MAP["NAN"],
      AIRPORT_MAP["PER"],
      AIRPORT_MAP["HKT"],
      AIRPORT_MAP["PPP"],
      AIRPORT_MAP["ZQN"],
      AIRPORT_MAP["RAR"],
      AIRPORT_MAP["SIN"],
      AIRPORT_MAP["MCY"],
      AIRPORT_MAP["SYD"],
      AIRPORT_MAP["NRT"],
      AIRPORT_MAP["TSV"],
      AIRPORT_MAP["AYQ"],
      AIRPORT_MAP["WLG"],
      AIRPORT_MAP["CGO"],
    ]
  }

  return ports[region] || []
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
