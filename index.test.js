var expect = require('chai').expect

jest.mock('./region-data.js')

var regionModule = require('./index')

describe('getRegions()', function() {
  it('should return the region info', function() {
    expect(regionModule.getRegions()).to.deep.equal([
      {code: 'AU', name: 'Australia', currency_code: 'AUD'},
      {code: 'CA', name: 'Canada', currency_code: 'CAD'}
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
    expect(regionModule.getRegionByCode('CA')).to.deep.equal({code: 'CA', name: 'Canada', currency_code: 'CAD'})
  })
})

describe('getDefaultRegion()', function() {
  it('should return the default region\'s info', function() {
    expect(regionModule.getDefaultRegion()).to.deep.equal(
      {code: 'AU', name: 'Australia', currency_code: 'AUD'}
    )
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

describe('getCurrencies()', function() {
  it('should return an array of currencies', function() {
    expect(regionModule.getCurrencies()).to.deep.equal(['AUD', 'CAD'])
  })
})

describe('getZeroDecimalCurrencies()', function() {
  it('should return an array of currencies', function() {
    expect(regionModule.getZeroDecimalCurrencies()).to.be.an('array');
  })
})
