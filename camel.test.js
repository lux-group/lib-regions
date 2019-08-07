var expect = require('chai').expect

jest.mock('./region-data.js')
jest.mock('./currency-data.js')

var regionModule = require('./index')
regionModule.setCamel()

describe('getRegions()', function() {
  it('should return the region', function() {
    expect(regionModule.getRegions('scoopontravel')).to.deep.equal([
      {
        code: 'AU',
        name: 'Australia',
        lang: 'en-AU',
        phonePrefix: '61',
        currencyFormattingLocale: 'en-AU',
        currencyCode: 'AUD',
        paymentMethods: [
          'braintree',
          'stripe',
        ],
        referralAmount: '50',
        offerUrgencyTag: null
      },
    ])
  })
})
