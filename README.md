# lib-regions

Region information for Luxury Escapes

```js
const libRegions = require("@luxuryescapes/lib-regions");

import * as libRegions from "@luxuryescapes/lib-regions";
```

## Publish beta version of your build to test locally
- Make the required code change.
- Commit code to branch first.
- npm prepare:beta and it will generate beta version in package.json
```
yarn prepare:beta
```
- raise a PR
- From PR, click on circle ci approve publish beta.

## Publish after your changes
Update index.d.ts to reflect new changes. Run "yarn build" to recompile js with new changes before merging. Update the version in package.json as part of your PR and CircleCI will do the rest.


## Testing before publishing
If you want to test the changes before publishing the package, you can install it directly from the GitHub repository by using the specific commit SHA. 

```shell
yarn add https://github.com/lux-group/lib-regions.git#fcd627a --ignore-workspace-root-check
```
