var uniq = require('lodash.uniq');

var currencies = require('./currency-data').currencies

var regions = require('./region-data').regions.map(function (region) {
  return Object.assign({},
    region,
    { payment_methods: currencies[region.currency_code].payment_methods }
  )
})

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

function getCurrencyCodes() {
  return Object.keys(currencies)
}

function getCurrencies() {
  console.warn('getCurrencies() is deprecated from lib-regions 0.1.10. Please use getCurrencyCodes() instead.')
  return getCurrencyCodes()
}

function getPaymentMethodsByCurrencyCode(currencyCode) {
  return currencies[currencyCode].payment_methods
}

function getZeroDecimalCurrencies() {
  return zeroDecimalCurrencies
}

function getRegionLang() {
  return regions.map(function(region) {return region.lang})
}

function getRegionNamesAndCode() {
  return regions.map(function(region) {
    return {
      name: region.name,
      code: region.code
    }
  })
}

module.exports = {
  getRegions: getRegions,
  getRegionCodes: getRegionCodes,
  getRegionNames: getRegionNames,
  getRegionByCode: getRegionByCode,
  getDefaultRegion: getDefaultRegion,
  getDefaultRegionCode: getDefaultRegionCode,
  getDefaultRegionName: getDefaultRegionName,
  getCurrencyCodes: getCurrencyCodes,
  getCurrencies: getCurrencies,
  getPaymentMethodsByCurrencyCode: getPaymentMethodsByCurrencyCode,
  getZeroDecimalCurrencies: getZeroDecimalCurrencies,
  getRegionLang: getRegionLang,
  getRegionNamesAndCode: getRegionNamesAndCode
}
