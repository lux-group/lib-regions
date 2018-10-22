# lib-regions

Region information for Luxury Escapes

## Running tests

```
yarn test
```

## Marketing Regions From Postcodes

used for mapping postcodes to the email marketing regions that we use within AU and NZ, AU is the default country

```
const postcodes = require('lib-regions/postcodes');
postcodes.marketingRegionFromPostcode('3000')  # returns marketing region in AU
postcodes.marketingRegionFromPostcode('5542', 'NZ')  # specify country code for NZ
```

## Release

Use `npm` to patch, minor or whatever version:

```
npm version patch -m "release version %s"
git push && git push --tags
```

https://docs.npmjs.com/cli/version
