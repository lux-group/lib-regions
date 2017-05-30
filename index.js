const regions = require('./region-data')

function getRegions() {
  return regions
}

function getRegionCodes() {
  return regions.map(function(region) {return region.code})
}

function getRegionNames() {
  return regions.map(function(region) {return region.name})
}

module.exports = {
  getRegions: getRegions,
  getRegionCodes: getRegionCodes,
  getRegionNames: getRegionNames,
}
