var expect = require('chai').expect

jest.mock('./region-data.js')
jest.mock('./currency-data.js')

var regionModule = require('./index')
const postcodes = require('lib-regions/postcodes')

describe('getRegions()', function() {
  it('should return the region', function() {
    expect(regionModule.getRegions('scoopontravel')).to.deep.equal([
      {
        code: 'AU',
        name: 'Australia',
        lang: 'en-AU',
        phone_prefix: '61',
        currency_formatting_locale: 'en-AU',
        currency_code: 'AUD',
        payment_methods: [
          'braintree',
          'stripe',
        ],
        referral_fee: '50'
      },
    ])
  })

  it('should return the region info default brand to luxuryescapes', function() {
    expect(regionModule.getRegions()).to.deep.equal([
      {
        code: 'AU',
        name: 'Australia',
        lang: 'en-AU',
        phone_prefix: '61',
        currency_formatting_locale: 'en-AU',
        currency_code: 'AUD',
        flag_id: 'au_iuox02',
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
        latitude_threshold: 999,
        payment_methods: [ 'le_credit', 'braintree', 'stripe', 'qantas' ],
        referral_fee: '50'
      },
      {
        code: 'CA',
        name: 'Canada',
        lang: 'en-CA',
        phone_prefix: '1',
        currency_formatting_locale: 'en-CA',
        currency_code: 'CAD',
        flag_id: 'ca_nacvxi',
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
        payment_methods: [ 'le_credit', 'braintree', 'stripe', 'maple_syrup_eh' ],
        referral_fee: '45'
      }
    ])
  })
})

describe('getRegionCodes()', function() {
  it('should return an array of region codes', function() {
    expect(regionModule.getRegionCodes('scoopontravel')).to.deep.equal(['AU'])
  })

  it('should return an array of region codes default brand to luxuryescapes', function() {
    expect(regionModule.getRegionCodes()).to.deep.equal(['AU', 'CA'])
  })
})

describe('getRegionNames()', function() {
  it('should return an array of region names', function() {
    expect(regionModule.getRegionNames('scoopontravel')).to.deep.equal(['Australia'])
  })

  it('should return an array of region names default brand to luxuryescapes', function() {
    expect(regionModule.getRegionNames()).to.deep.equal(['Australia', 'Canada'])
  })
})

describe('getRegionByCode()', function() {
  it('should return the info for the given region code', function() {
    expect(regionModule.getRegionByCode('AU', 'scoopontravel')).to.deep.equal({
      code: 'AU',
      name: 'Australia',
      lang: 'en-AU',
      phone_prefix: '61',
      currency_formatting_locale: 'en-AU',
      currency_code: 'AUD',
      payment_methods: [
        'braintree',
        'stripe',
      ],
      referral_fee: '50'
    })
  })

  it('should return null in brand without region', function() {
    expect(regionModule.getRegionByCode('CA', 'scoopontravel')).to.be.undefined
  })

  it('should return the info for the given region code', function() {
    expect(regionModule.getRegionByCode('CA')).to.deep.equal({
      code: 'CA',
      name: 'Canada',
      lang: 'en-CA',
      phone_prefix: '1',
      currency_formatting_locale: 'en-CA',
      currency_code: 'CAD',
      flag_id: 'ca_nacvxi',
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
      payment_methods: [ 'le_credit', 'braintree', 'stripe', 'maple_syrup_eh' ],
      referral_fee: '45'
    })
  })
})

describe('getRegionNameByCode()', function () {
  it('returns region name if region exists', function () {
    expect(regionModule.getRegionNameByCode('AU', 'scoopontravel')).to.equal('Australia')
  })

  it('returns \'null\' code if region is absent for brand', function () {
    expect(regionModule.getRegionNameByCode('CA', 'scoopontravel')).to.equal(null)
  })

  it('returns region name if region exists default brand to luxuryescapes', function () {
    expect(regionModule.getRegionNameByCode('AU')).to.equal('Australia')
  })
})

describe('getDefaultRegion()', function() {
  it('should return the default region\'s info', function() {
    expect(regionModule.getDefaultRegion('scoopontravel')).to.deep.equal({
      code: 'AU',
      name: 'Australia',
      lang: 'en-AU',
      phone_prefix: '61',
      currency_formatting_locale: 'en-AU',
      currency_code: 'AUD',
      payment_methods: [
        'braintree',
        'stripe'
      ],
      referral_fee: '50'
    })
  })

  it('should return the default region\'s info default brand to luxuryescapes', function() {
    expect(regionModule.getDefaultRegion()).to.deep.equal({
      code: 'AU',
      name: 'Australia',
      lang: 'en-AU',
      phone_prefix: '61',
      currency_formatting_locale: 'en-AU',
      currency_code: 'AUD',
      flag_id: 'au_iuox02',
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
      latitude_threshold: 999,
      payment_methods: [ 'le_credit', 'braintree', 'stripe', 'qantas' ],
      referral_fee: '50'
    })
  })
})

describe('getDefaultRegionCode()', function() {
  it('should return the default region\'s code', function() {
    expect(regionModule.getDefaultRegionCode('luxuryescapes')).to.equal('AU')
  })

  it('should return the default region\'s code default brand to luxuryescapes', function() {
    expect(regionModule.getDefaultRegionCode()).to.equal('AU')
  })

  it('should return the default region for the brand', function() {
    expect(regionModule.getDefaultRegionCode('treatmetravel')).to.equal('NZ')
  })
})

describe('getDefaultRegionName()', function() {
  it('should return the default region\'s name', function() {
    expect(regionModule.getDefaultRegionName('scoopontravel')).to.equal('Australia')
  })

  it('should return the default region\'s name default brand to luxuryescapes', function() {
    expect(regionModule.getDefaultRegionName()).to.equal('Australia')
  })
})

describe('getCurrencyCodes()', function() {
  it('should return an array of currency codes', function() {
    expect(regionModule.getCurrencyCodes('scoopontravel')).to.deep.equal(['AUD'])
  })

  it('should return an array of currency codes default brand to luxuryescapes', function() {
    expect(regionModule.getCurrencyCodes()).to.deep.equal(['AUD', 'CAD'])
  })
})

describe('getPaymentMethodsByCurrencyCode()', function() {
  it('should return an array of payment methods', function() {
    expect(regionModule.getPaymentMethodsByCurrencyCode('AUD', 'scoopontravel')).to.deep.equal([
      'braintree',
      'stripe',
    ])
  })

  it('should return an array of payment methods default brand to luxuryescapes', function() {
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
    expect(regionModule.getRegionLang('scoopontravel')).to.deep.equal(['en-AU'])
  })

  it('should return an array of region langs default brand to luxuryescapes', function() {
    expect(regionModule.getRegionLang()).to.deep.equal(['en-AU', 'en-CA'])
  })
})

describe('getRegionReferralFeeByCode()', function() {
  it('should return the region referral fee', function() {
    expect(regionModule.getRegionReferralFeeByCode('AU', 'scoopontravel')).to.deep.equal('50')
  })

  it('should return the region referral fee by default brand to luxuryescapes', function() {
    expect(regionModule.getRegionReferralFeeByCode('CA')).to.deep.equal('45')
  })
})

describe('getRegionNamesAndCode()', function() {
  it('should return an array of region names and code', function() {
    expect(regionModule.getRegionNamesAndCode('scoopontravel')).to.deep.equal([
      {name: 'Australia', code: 'AU'},
    ])
  })

  it('should return an array of region names and code default brand to luxuryescapes', function() {
    expect(regionModule.getRegionNamesAndCode()).to.deep.equal([
      {name: 'Australia', code: 'AU'},
      {name: 'Canada', code: 'CA'}
    ])
  })
})

describe('isRegionAllowed()', function() {
  it('should return true if brand has region', function() {
    expect(regionModule.isRegionAllowed('luxuryescapes', 'CA')).to.equal(true)
  })
  it('should return true if brand has region', function() {
    expect(regionModule.isRegionAllowed('scoopontravel', 'NZ')).to.equal(false)
  })
});

describe('eachRegionStatusFromPostcode', function() {
  it('works', function() {
    expect(postcodes.marketingRegionFromPostcode(2000)).to.eql('sydney')
    expect(postcodes.marketingRegionFromPostcode(3000)).to.eql('melbourne')
    expect(postcodes.marketingRegionFromPostcode(null)).to.eql('sydney')
    expect(postcodes.marketingRegionFromPostcode('')).to.eql('sydney')
    expect(postcodes.marketingRegionFromPostcode('', 'NZ')).to.eql('auckland')
    expect(postcodes.marketingRegionFromPostcode('0211', 'NZ')).to.eql('auckland')
    expect(postcodes.marketingRegionFromPostcode('5542', 'NZ')).to.eql('wellington')
  })
})
