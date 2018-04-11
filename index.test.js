var expect = require('chai').expect

jest.mock('./region-data.js')
jest.mock('./currency-data.js')
jest.mock('./flag-data.js')

var regionModule = require('./index')

describe('getRegions()', function() {
  it('should return the region info', function() {
    expect(regionModule.getRegions()).to.deep.equal([
      {
        code: 'AU',
        name: 'Australia',
        lang: 'en-AU',
        phone_prefix: '61',
        currency_formatting_locale: 'en-AU',
        currency_code: 'AUD',
        phone: {
          local: {
            human_readable: '1300 88 99 00',
            number: '1300889900',
          },
          international: {
            human_readable: '+61 2 8320 6845',
            number: '+61283206845',
          },
        },
        mailing_address: 'Level 1, 50-56 York St, South Melbourne, VIC 3205, AUSTRALIA',
        payment_methods: [ 'le_credit', 'braintree', 'stripe', 'qantas' ]
      },
      {
        code: 'CA',
        name: 'Canada',
        lang: 'en-CA',
        phone_prefix: '1',
        currency_formatting_locale: 'en-CA',
        currency_code: 'CAD',
        phone: {
          local: {
            human_readable: '778 300 0814',
            number: '7783000814',
          },
          international: {
            human_readable: '+61 2 8320 6845',
            number: '+61283206845',
          },
        },
        mailing_address: 'Level 1, 50-56 York St, South Melbourne, VIC 3205, AUSTRALIA',
        payment_methods: [ 'le_credit', 'braintree', 'stripe', 'maple_syrup_eh' ]
      }
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
      phone_prefix: '1',
      currency_formatting_locale: 'en-CA',
      currency_code: 'CAD',
      phone: {
        local: {
          human_readable: '778 300 0814',
          number: '7783000814',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
      },
      mailing_address: 'Level 1, 50-56 York St, South Melbourne, VIC 3205, AUSTRALIA',
      payment_methods: [ 'le_credit', 'braintree', 'stripe', 'maple_syrup_eh' ]
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
      phone_prefix: '61',
      currency_formatting_locale: 'en-AU',
      currency_code: 'AUD',
      phone: {
        local: {
          human_readable: '1300 88 99 00',
          number: '1300889900',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
      },
      mailing_address: 'Level 1, 50-56 York St, South Melbourne, VIC 3205, AUSTRALIA',
      payment_methods: [ 'le_credit', 'braintree', 'stripe', 'qantas' ]
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
      'qantas'
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

describe('getRegionFlagUrlsByCode()', function() {
  it('should return an object with the flag id', function() {
    expect(regionModule.getRegionFlagUrlsByCode('AU')).to.deep.equal(
      {id: "au_iuox02"}
    )
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
