const regions = require('./region-data').regions
const defaultRegionCode = require('./region-data').defaultRegionCode

function getRegions() {
  return regions
}

function getRegionCodes() {
  return regions.map(function(region) {return region.code})
}

function getRegionNames() {
  return regions.map(function(region) {return region.name})
}

function getRegionByCode(regionCode) {
  return regions.find(function(region) {return region.code === regionCode})
}

function getDefaultRegion() {
  return getRegionByCode(defaultRegionCode)
}

function getDefaultRegionCode() {
  return defaultRegionCode
}

function getDefaultRegionName() {
  return regions.find(function(region) {return region.code === defaultRegionCode}).name
}

module.exports = {
  getRegions: getRegions,
  getRegionCodes: getRegionCodes,
  getRegionNames: getRegionNames,
  getRegionByCode: getRegionByCode,
  getDefaultRegion: getDefaultRegion,
  getDefaultRegionCode: getDefaultRegionCode,
  getDefaultRegionName: getDefaultRegionName,
}
