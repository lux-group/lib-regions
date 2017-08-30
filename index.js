var uniq = require('lodash.uniq');

var regions = require('./region-data').regions
var defaultRegionCode = require('./region-data').defaultRegionCode

var zeroDecimalCurrencies = [
  'BIF', 'CLP', 'DJF', 'GNF', 'JPY', 'KMF', 'KRW', 'MGA',
  'PYG', 'RWF', 'VND', 'VUV', 'XAF', 'XOF', 'XPF'
]

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

function getCurrencies() {
  return uniq(regions.map(function(region) {return region.currency_code})).sort()
}

function getZeroDecimalCurrencies() {
  return zeroDecimalCurrencies
}

function getRegionLang() {
  return regions.map(function(region) {return region.lang})
}

module.exports = {
  getRegions: getRegions,
  getRegionCodes: getRegionCodes,
  getRegionNames: getRegionNames,
  getRegionByCode: getRegionByCode,
  getDefaultRegion: getDefaultRegion,
  getDefaultRegionCode: getDefaultRegionCode,
  getDefaultRegionName: getDefaultRegionName,
  getCurrencies: getCurrencies,
  getZeroDecimalCurrencies: getZeroDecimalCurrencies,
  getRegionLang: getRegionLang,
}
