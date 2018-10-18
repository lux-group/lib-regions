var PostCodeToMarketingRegionMap = [
  {
    name: 'darwin',
    min: 800,
    max: 899
  },
  {
    name: 'canberra',
    min: 2600,
    max: 2630
  },
  {
    name: 'canberra',
    min: 2900,
    max: 2920
  },
  {
    name: 'newcastle',
    min: 2280,
    max: 2309
  },
  {
    name: 'newcastle',
    min: 2315,
    max: 2315
  },
  {
    name: 'wollongong',
    min: 2500,
    max: 2530
  },
  {
    name: 'sydney',
    min: 2000,
    max: 2999
  },
  {
    name: 'melbourne',
    min: 3000,
    max: 3999
  },
  {
    name: 'gold-coast',
    min: 4208,
    max: 4287
  },
  {
    name: 'brisbane',
    min: 4000,
    max: 4999
  },
  {
    name: 'adelaide',
    min: 5000,
    max: 5999
  },
  {
    name: 'perth',
    min: 6000,
    max: 6999
  },
  {
    name: 'hobart',
    min: 7000,
    max: 7999
  }
]

function marketingRegionFromPostcode(postcode) {
  var DefaultRegion = 'sydney'
  var postcodeValue = parseInt(postcode)
  if (isNaN(postcodeValue)) {
    return DefaultRegion
  }
  var region = PostCodeToMarketingRegionMap.find(function(code) {
    return (postcodeValue >= code.min && postcodeValue <= code.max)
  })
  return region ? region.name : DefaultRegion
}

module.exports.marketingRegionFromPostcode = marketingRegionFromPostcode
