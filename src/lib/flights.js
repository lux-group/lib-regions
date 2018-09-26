var getFlightRegions = () => [
  'AU'
]

var regionMainPorts = {
  AU: 'SYD'
}

function getFlightMainPort(region) {
  const mainPort = regionMainPorts[region]

  if (!mainPort) {
    throw new Error(`${region} is not configured with a main port`)
  }

  return mainPort
}

module.exports = {
  getFlightRegions: getFlightRegions,
  getFlightMainPort: getFlightMainPort
}
