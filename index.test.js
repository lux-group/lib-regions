var expect = require('chai').expect

jest.mock('./region-data.js')
jest.mock('./currency-data.js')

var regionModule = require('./index')

describe('getRegions()', function() {
  it('should return the region info', function() {
    expect(regionModule.getRegions()).to.deep.equal([
      {
        code: 'AU',
        name: 'Australia',
        lang: 'en-AU',
        currency_formatting_locale: 'en-AU',
        currency_code: 'AUD',
        payment_methods: [
          'le_credit',
          'braintree',
          'stripe',
        ],
      },
      {
        code: 'CA',
        name: 'Canada',
        lang: 'en-CA',
        currency_formatting_locale: 'en-CA',
        currency_code: 'CAD',
        payment_methods: [
          'le_credit',
          'braintree',
          'stripe',
          'maple_syrup_eh',
        ],
      },
    ])
  })
})

describe('getRegionCodes()', function() {
  it('should return an array of region codes', function() {
    expect(regionModule.getRegionCodes()).to.deep.equal(['AU', 'CA'])
  })
})

describe('getRegionNames()', function() {
  it('should return an array of region names', function() {
    expect(regionModule.getRegionNames()).to.deep.equal(['Australia', 'Canada'])
  })
})

describe('getRegionByCode()', function() {
  it('should return the info for the given region code', function() {
    expect(regionModule.getRegionByCode('CA')).to.deep.equal({
      code: 'CA',
      name: 'Canada',
      lang: 'en-CA',
      currency_formatting_locale: 'en-CA',
      currency_code: 'CAD',
      payment_methods: [
        'le_credit',
        'braintree',
        'stripe',
        'maple_syrup_eh',
      ],
    })
  })
})

describe('getRegionNameByCode()', function () {
  const {getRegionNameByCode} = regionModule

  it('returns region name if region exists', function () {
    expect(getRegionNameByCode('AU')).to.equal('Australia')
  })

  it('returns \'null\' code if region is absent', function () {
    expect(getRegionNameByCode('XYZ')).to.equal(null)
  })
})

describe('getDefaultRegion()', function() {
  it('should return the default region\'s info', function() {
    expect(regionModule.getDefaultRegion()).to.deep.equal({
      code: 'AU',
      name: 'Australia',
      lang: 'en-AU',
      currency_formatting_locale: 'en-AU',
      currency_code: 'AUD',
      payment_methods: [
        'le_credit',
        'braintree',
        'stripe'
      ],
    })
  })
})

describe('getDefaultRegionCode()', function() {
  it('should return the default region\'s code', function() {
    expect(regionModule.getDefaultRegionCode()).to.equal('AU')
  })
})

describe('getDefaultRegionName()', function() {
  it('should return the default region\'s name', function() {
    expect(regionModule.getDefaultRegionName()).to.equal('Australia')
  })
})

describe('getCurrencyCodes()', function() {
  it('should return an array of currency codes', function() {
    expect(regionModule.getCurrencyCodes()).to.deep.equal(['AUD', 'CAD'])
  })
})

describe('getPaymentMethodsByCurrencyCode()', function() {
  it('should return an array of payment methods', function() {
    expect(regionModule.getPaymentMethodsByCurrencyCode('AUD')).to.deep.equal([
      'le_credit',
      'braintree',
      'stripe',
    ])
  })
})

describe('getZeroDecimalCurrencies()', function() {
  it('should return an array of currency codes', function() {
    expect(regionModule.getZeroDecimalCurrencies()).to.be.an('array');
  })
})

describe('getRegionLang()', function() {
  it('should return an array of region langs', function() {
    expect(regionModule.getRegionLang()).to.deep.equal(['en-AU', 'en-CA'])
  })
})

describe('getRegionNamesAndCode()', function() {
  it('should return an array of region names and code', function() {
    expect(regionModule.getRegionNamesAndCode()).to.deep.equal([
      {name: 'Australia', code: 'AU'},
      {name: 'Canada', code: 'CA'}
    ])
  })
})
