const expect = require('chai').expect

jest.mock('./region-data.js')

const regionModule = require('./index')

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
