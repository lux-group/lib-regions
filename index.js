var camelcaseKeys = require('camelcase-keys');
var currencyData = require('./currency-data').currencies
var regionData = require('./region-data')
var flights = require('./lib/flights')
var countries = require('./lib/countries')

var camel = false

function setCamel() {
  camel = true
}

function camelFn(fn) {
  return function() {
    var result = fn.apply(null, arguments)
    if (camel && result) {
      return camelcaseKeys(result, {deep: true});
    }
    return result
  }
}

var brandRegions = Object.keys(regionData).reduce(function(acc ,k) {
  acc[k] = regionData[k].map(function(region) {
    return Object.assign({},
      region,
      { payment_methods: currencies(k)[region.currency_code].payment_methods }
    )
  })
  return acc
}, {})

function regions(brand) {
  return brandRegions[brand || 'luxuryescapes']
}

function currencies(brand) {
  return currencyData[brand || 'luxuryescapes']
}

var zeroDecimalCurrencies = [
  'BIF', 'CLP', 'DJF', 'GNF', 'JPY', 'KMF', 'KRW', 'MGA',
  'PYG', 'RWF', 'VND', 'VUV', 'XAF', 'XOF', 'XPF'
]

function getRegions(brand) {
  return regions(brand)
}

function getRegionCodes(brand) {
  return regions(brand).map(function(region) {return region.code})
}

function getRegionNames(brand) {
  return regions(brand).map(function(region) {return region.name})
}

function getRegionByCode(regionCode, brand) {
  if (!regionCode) {
    return null
  }
  return regions(brand).find(function(region) {return region.code.toLowerCase() === regionCode.toLowerCase()})
}

function getDefaultRegion(brand) {
  return regions(brand)[0]
}

function getRegionNameByCode(code, brand) {
  var region = getRegionByCode(code, brand)
  return region && region.name || null
}

function getDefaultRegionCode(brand) {
  return regions(brand)[0].code
}

function getDefaultRegionName(brand) {
  return regions(brand)[0].name
}

function getCurrencyCodes(brand) {
  return Object.keys(currencies(brand))
}

function getPaymentMethodsByCurrencyCode(currencyCode, brand) {
  return currencies(brand)[currencyCode].payment_methods
}

function getZeroDecimalCurrencies() {
  return zeroDecimalCurrencies
}

function getRegionLang(brand) {
  return regions(brand).map(function(region) {return region.lang})
}

function getRegionReferralAmountByCode(code, brand) {
  var region = getRegionByCode(code, brand)
  return region && region.referral_amount || null
}

function getRegionPhonePrefix(brand) {
  return regions(brand).map(function(region) {return region.phone_prefix})
}

function getRegionNamesAndCode(brand) {
  return regions(brand).map(function(region) {
    return {
      name: region.name,
      code: region.code
    }
  })
}

function isRegionAllowed(brand, country_code) {
  var code = country_code || 'AU'
  return regions(brand).some(function(region) {
    return region.code === code
  })
}

function getCountries() {
  return countries
}

module.exports = {
  setCamel: setCamel,
  getRegions: camelFn(getRegions),
  getRegionCodes: getRegionCodes,
  getRegionNames: getRegionNames,
  getRegionByCode: camelFn(getRegionByCode),
  getRegionNameByCode: getRegionNameByCode,
  getDefaultRegion: camelFn(getDefaultRegion),
  getDefaultRegionCode: getDefaultRegionCode,
  getDefaultRegionName: getDefaultRegionName,
  getCurrencyCodes: getCurrencyCodes,
  getPaymentMethodsByCurrencyCode: getPaymentMethodsByCurrencyCode,
  getZeroDecimalCurrencies: getZeroDecimalCurrencies,
  getRegionLang: getRegionLang,
  getRegionReferralAmountByCode: getRegionReferralAmountByCode,
  getRegionNamesAndCode: getRegionNamesAndCode,
  isRegionAllowed: isRegionAllowed,
  getRegionPhonePrefix: getRegionPhonePrefix,
  getFlightMainPort: flights.getFlightMainPort,
  getFlightRegions: flights.getFlightRegions,
  getRegionDeparturePorts: flights.getRegionDeparturePorts,
  getPopularRegionDeparturePorts: flights.getPopularRegionDeparturePorts,
  getRegionDestinationPorts: flights.getRegionDestinationPorts,
  getAirportByCode: flights.getAirportByCode,
  getCountries: getCountries
}
