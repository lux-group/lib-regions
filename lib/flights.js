// AIRPORT_MAP maps all possible airport codes to airport objects
var AIRPORT_MAP = {
  AUH: { code: "AUH", name: "Abu Dhabi", latitude: 24.433000564575195, longitude: 54.651100158691406 },
  ADL: { code: "ADL", name: "Adelaide", latitude: -34.945, longitude: 138.531006 },
  ATH: { code: "ATH", name: "Athens", latitude: 37.9364013672, longitude: 23.9444999695 },
  AKL: { code: "AKL", name: "Auckland", latitude: -37.008098602299995, longitude: 174.792007446 },
  DPS: { code: "DPS", name: "Bali - Denpasar", latitude: -8.7481698989868, longitude: 115.16699981689 },
  BNK: { code: "BNK", name: "Ballina Byron", latitude: -28.8339004517, longitude: 153.56199646 },
  BKK: { code: "BKK", name: "Bangkok", latitude: 13.681099891662598, longitude: 100.74700164794922 },
  BCN: { code: "BCN", name: "Barcelona", latitude: 41.2971, longitude: 2.07846 },
  PEK: { code: "PEK", name: "Beijing", latitude: 40.080101013183594, longitude: 116.58499908447266 },
  BER: { code: "BER", name: "Berlin", latitude: 52.366667, longitude: 13.503333 },
  BNE: { code: "BNE", name: "Brisbane", latitude: -27.384199142456055, longitude: 153.11700439453125 },
  BUD: { code: "BUD", name: "Budapest", latitude: 47.42976, longitude: 19.261093 },
  CNS: { code: "CNS", name: "Cairns", latitude: -16.885799408, longitude: 145.755004883 },
  CAI: { code: "CAI", name: "Cairo", latitude: 30.12190055847168, longitude: 31.40559959411621 },
  CPT: { code: "CPT", name: "Cape Town", latitude: -33.9648017883, longitude: 18.6016998291 },
  CBR: { code: "CBR", name: "Canberra", latitude: -35.30690002441406, longitude: 149.19500732421875 },
  CNX: { code: "CNX", name: "Chiang Mai - Thailand", latitude: 18.766799926799997, longitude: 98.962600708 },
  CHC: { code: "CHC", name: "Christchurch", latitude: -43.48939895629883, longitude: 172.53199768066406 },
  DAD: { code: "DAD", name: "DaNang - Vietnam", latitude: 16.043899536132812, longitude: 108.1989974975586 },
  DRW: { code: "DRW", name: "Darwin", latitude: -12.41469955444336, longitude: 130.8769989013672 },
  DEL: { code: "DEL", name: "Delhi", latitude: 28.5665, longitude: 77.103104 },
  DOH: { code: "DOH", name: "Doha", latitude: 25.273056, longitude: 51.608056 },
  DXB: { code: "DXB", name: "Dubai", latitude: 25.2527999878, longitude: 55.3643989563 },
  DUD: { code: "DUD", name: "Dunedin", latitude: -45.9281005859375, longitude: 170.197998046875 },
  EDI: { code: "EDI", name: "Edinburgh", latitude: 55.95000076293945, longitude: -3.372499942779541 },
  FLR: { code: "FLR", name: "Florence", latitude: 43.810001, longitude: 11.2051 },
  OOL: { code: "OOL", name: "Gold Coast", latitude: -28.1644001007, longitude: 153.505004883 },
  HAK: { code: "HAK", name: "Hainan", latitude: 19.934900283813477, longitude: 110.45899963378906 },
  HTI: { code: "HTI", name: "Hamilton Island", latitude: -20.3581008911, longitude: 148.95199585 },
  HAN: { code: "HAN", name: "Hanoi", latitude: 21.221200942993164, longitude: 105.80699920654297 },
  NPE: { code: "NPE", name: "Hawke's Bay - Napier", latitude: -39.465801, longitude: 176.869995 },
  HIS: { code: "HIS", name: "Hayman Island", latitude: -20.060278, longitude: 148.880556 },
  HER: { code: "HER", name: "Herakloin, Crete", latitude: 35.3396987915, longitude: 25.180299758900002 },
  HBA: { code: "HBA", name: "Hobart", latitude: -42.836101532, longitude: 147.509994507 },
  SGN: { code: "SGN", name: "Ho Chi Minh City", latitude: 10.8187999725, longitude: 106.652000427 },
  HKG: { code: "HKG", name: "Hong Kong", latitude: 22.308901, longitude: 113.915001 },
  HNL: { code: "HNL", name: "Honolulu", latitude: 21.32062, longitude: -157.924228 },
  HUI: { code: "HUI", name: "Hue", latitude: 16.401500701899998, longitude: 107.70300293 },
  IST: { code: "IST", name: "Istanbul", latitude: 41.275278, longitude: 28.751944 },
  USM: { code: "USM", name: "Koh Samui", latitude: 9.547789573669998, longitude: 100.06199646 },
  BKI: { code: "BKI", name: "Kota Kinabalu", latitude: 5.9372100830078125, longitude: 116.0510025024414 },
  KUL: { code: "KUL", name: "Kuala Lumpur", latitude: 2.745579957962, longitude: 101.70999908447 },
  LGK: { code: "LGK", name: "Langkawi", latitude: 6.329730033874512, longitude: 99.72869873046875 },
  LST: { code: "LST", name: "Launceston", latitude: -41.54529953, longitude: 147.214004517 },
  LOP: { code: "LOP", name: "Lombok", latitude: -8.757322, longitude: 116.276675 },
  LON: { code: "LON", name: "London", latitude: 51.508056, longitude: -0.127778 },
  MKY: { code: "MKY", name: "Mackay", latitude: -21.171699523900003, longitude: 149.179992676 },
  MLE: { code: "MLE", name: "Male", latitude: 4.191830158233643, longitude: 73.52909851074219 },
  AVV: { code: "AVV", name: "Melbourne - Avalon", latitude: -38.039398, longitude: 144.468994 },
  MEL: { code: "MEL", name: "Melbourne - Tullamarine", latitude: -37.673302, longitude: 144.843002 },
  MXP: { code: "MXP", name: "Milan", latitude: 45.6306, longitude: 8.72811 },
  NAN: { code: "NAN", name: "Nadi - Fiji", latitude: -17.755399703979492, longitude: 177.4429931640625 },
  NSN: { code: "NSN", name: "Nelson", latitude: -41.298301696777344, longitude: 173.2209930419922 },
  NPL: { code: "NPL", name: "New Plymouth", latitude: -39.00859832763672, longitude: 174.1790008544922 },
  NTL: { code: "NTL", name: "Newcastle", latitude: -32.79499816894531, longitude: 151.83399963378906 },
  NHA: { code: "NHA", name: "Nha Trang", latitude: 12.2275, longitude: 109.192001 },
  NCE: { code: "NCE", name: "Nice", latitude: 43.6584014893, longitude: 7.215869903560001 },
  NOU: { code: "NOU", name: "Noumea", latitude: -22.01460075378418, longitude: 166.21299743652344 },
  KIX: { code: "KIX", name: "Osaka", latitude: 34.42729949951172, longitude: 135.24400329589844 },
  PMR: { code: "PMR", name: "Palmerston North", latitude: -40.32059860229492, longitude: 175.61700439453125 },
  PAR: { code: "PAR", name: "Paris", latitude: 48.856389, longitude: 2.352222 },
  PEN: { code: "PEN", name: "Penang", latitude: 5.297140121459961, longitude: 100.2770004272461 },
  PER: { code: "PER", name: "Perth", latitude: -31.94029998779297, longitude: 115.96700286865234 },
  PQC: { code: "PQC", name: "Phu Quoc", latitude: 10.1698, longitude: 103.9931 },
  HKT: { code: "HKT", name: "Phuket - Thailand", latitude: 8.1132, longitude: 98.316902 },
  VLI: { code: "VLI", name: "Port Vila", latitude: -17.699300765991, longitude: 168.32000732422 },
  PPP: { code: "PPP", name: "Proserpine - Whitsunday Coast", latitude: -20.4950008392, longitude: 148.552001953 },
  ZQN: { code: "ZQN", name: "Queenstown", latitude: -45.0210990906, longitude: 168.738998413 },
  RAR: { code: "RAR", name: "Rarotonga", latitude: -21.2026996613, longitude: -159.805999756 },
  FCO: { code: "FCO", name: "Rome", latitude: 41.8002778, longitude: 12.2388889 },
  SON: { code: "SON", name: "Santo, Vanuatu", latitude: -15.505000114399998, longitude: 167.220001221 },
  SHA: { code: "SHA", name: "Shanghai", latitude: 31.197900772094727, longitude: 121.33599853515625 },
  REP: { code: "REP", name: "Siem Reap", latitude: 13.410699844400002, longitude: 103.81300354 },
  SIN: { code: "SIN", name: "Singapore", latitude: 1.35019, longitude: 103.994003 },
  MCY: { code: "MCY", name: "Sunshine Coast", latitude: -26.6033, longitude: 153.091003 },
  SUV: { code: "SUV", name: "Suva Suva, Fiji", latitude: -18.04330062866211, longitude: 178.5590057373047 },
  SYD: { code: "SYD", name: "Sydney", latitude: -33.94609832763672, longitude: 151.177001953125 },
  TVU: { code: "TVU", name: "Taveuni, Fiji", latitude: -16.6905994415, longitude: -179.876998901 },
  NRT: { code: "NRT", name: "Tokyo", latitude: 35.7647018433, longitude: 140.386001587 },
  TSV: { code: "TSV", name: "Townsville", latitude: -19.252500534057617, longitude: 146.76499938964844 },
  AYQ: { code: "AYQ", name: "Uluru - Ayers Rock", latitude: -25.1861, longitude: 130.975998 },
  VIE: { code: "VIE", name: "Vienna", latitude: 48.110298156738, longitude: 16.569700241089 },
  VCE: { code: "VCE", name: "Venice", latitude: 45.505299, longitude: 12.3519 },
  WLG: { code: "WLG", name: "Wellington", latitude: -41.3272018433, longitude: 174.804992676 },
  CGO: { code: "CGO", name: "Zhengzhou", latitude: 34.519699096699995, longitude: 113.841003418 },
}

var getFlightRegions = function () {
  return ["AU"]
}

var regionMainPorts = {
  AU: "SYD"
}

var getRegionDeparturePorts = function (region) {
  var ports = {
    AU: [
      AIRPORT_MAP["ADL"],
      AIRPORT_MAP["MEL"],
      AIRPORT_MAP["SYD"],
      AIRPORT_MAP["BNE"],
      AIRPORT_MAP["PER"],
      AIRPORT_MAP["BNK"],
      AIRPORT_MAP["CNS"],
      AIRPORT_MAP["CBR"],
      AIRPORT_MAP["DRW"],
      AIRPORT_MAP["OOL"],
      AIRPORT_MAP["HTI"],
      AIRPORT_MAP["HIS"],
      AIRPORT_MAP["HBA"],
      AIRPORT_MAP["LST"],
      AIRPORT_MAP["MKY"],
      AIRPORT_MAP["AVV"],
      AIRPORT_MAP["NTL"],
      AIRPORT_MAP["MCY"],
      AIRPORT_MAP["TSV"],
      AIRPORT_MAP["AYQ"],
      AIRPORT_MAP["PPP"],
    ]
  }

  return ports[region] || []
}

var getPopularRegionDeparturePorts = function (region) {
  var ports = {
    AU: [
      AIRPORT_MAP["ADL"],
      AIRPORT_MAP["BNE"],
      AIRPORT_MAP["CNS"],
      AIRPORT_MAP["DRW"],
      AIRPORT_MAP["OOL"],
      AIRPORT_MAP["MEL"],
      AIRPORT_MAP["AVV"],
      AIRPORT_MAP["PER"],
      AIRPORT_MAP["SYD"],
    ]
  }

  return ports[region] || []
}

var getRegionDestinationPorts = function (region) {
  var ports = {
    AU: [
      AIRPORT_MAP["ADL"],
      AIRPORT_MAP["AKL"],
      AIRPORT_MAP["AYQ"],
      AIRPORT_MAP["BKI"],
      AIRPORT_MAP["BKK"],
      AIRPORT_MAP["BNE"],
      AIRPORT_MAP["BNK"],
      AIRPORT_MAP["CGO"],
      AIRPORT_MAP["CHC"],
      AIRPORT_MAP["CNS"],
      AIRPORT_MAP["CPT"],
      AIRPORT_MAP["DAD"],
      AIRPORT_MAP["DEL"],
      AIRPORT_MAP["DPS"],
      AIRPORT_MAP["DRW"],
      AIRPORT_MAP["DUD"],
      AIRPORT_MAP["DXB"],
      AIRPORT_MAP["HAK"],
      AIRPORT_MAP["HAN"],
      AIRPORT_MAP["HBA"],
      AIRPORT_MAP["HKT"],
      AIRPORT_MAP["HNL"],
      AIRPORT_MAP["HTI"],
      AIRPORT_MAP["HUI"],
      AIRPORT_MAP["KIX"],
      AIRPORT_MAP["LGK"],
      AIRPORT_MAP["LOP"],
      AIRPORT_MAP["LST"],
      AIRPORT_MAP["MCY"],
      AIRPORT_MAP["MEL"],
      AIRPORT_MAP["MKY"],
      AIRPORT_MAP["MLE"],
      AIRPORT_MAP["NAN"],
      AIRPORT_MAP["NHA"],
      AIRPORT_MAP["NOU"],
      AIRPORT_MAP["NPE"],
      AIRPORT_MAP["NPL"],
      AIRPORT_MAP["NRT"],
      AIRPORT_MAP["NSN"],
      AIRPORT_MAP["NTL"],
      AIRPORT_MAP["OOL"],
      AIRPORT_MAP["PEN"],
      AIRPORT_MAP["PER"],
      AIRPORT_MAP["PMR"],
      AIRPORT_MAP["PPP"],
      AIRPORT_MAP["PQC"],
      AIRPORT_MAP["RAR"],
      AIRPORT_MAP["REP"],
      AIRPORT_MAP["SGN"],
      AIRPORT_MAP["SHA"],
      AIRPORT_MAP["SIN"],
      AIRPORT_MAP["SUV"],
      AIRPORT_MAP["SYD"],
      AIRPORT_MAP["TSV"],
      AIRPORT_MAP["TVU"],
      AIRPORT_MAP["USM"],
      AIRPORT_MAP["VCE"],
      AIRPORT_MAP["VLI"],
      AIRPORT_MAP["WLG"],
      AIRPORT_MAP["ZQN"],
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
  getPopularRegionDeparturePorts: getPopularRegionDeparturePorts,
  getRegionDestinationPorts: getRegionDestinationPorts,
  getAirportByCode: getAirportByCode,
}
