var getFlightRegions = function () {
  return [
    'AU'
  ]
}

var regionMainPorts = {
  AU: 'SYD'
}

function getFlightMainPort(region) {
  var mainPort = regionMainPorts[region]

  if(!mainPort) {
    throw new Error(region + ' is not configured with a main port')
  }

  return mainPort
}

module.exports = {
  getFlightRegions: getFlightRegions,
  getFlightMainPort: getFlightMainPort
}
