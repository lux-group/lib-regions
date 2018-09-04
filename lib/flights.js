var airports = require('airport-codes')

var validateDestinationPort = port => {
  const airport = airports.findWhere({ iata: port })

  if(!airport) {
    throw new Error(`${port} is not a valid airport code`)
  }

  return true
}

var getFlightRegions = () => [
  'AU'
]

var regionMainPorts = {
  AU: 'SYD'
}

function getFlightMainPort(region) {
  const mainPort = regionMainPorts[region]

  if(!mainPort) {
    throw new Error(`${region} is not configured with a main port`)
  }

  return mainPort
}

module.exports = {
  getFlightRegions,
  validateDestinationPort,
  getFlightMainPort
}
