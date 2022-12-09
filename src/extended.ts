import { currencies, Currency } from "./currencies";
import {Brand, BRANDS, Region, regions} from "./regions";

export interface ExtendedRegion extends Region, Currency {}

// interface ExtendedBrandRegions {
//   [brand: string]: ExtendedRegion[];
// }

type ExtendedBrandRegions = Record<typeof BRANDS[number], Region[]>;

const extend = (region: Region, currency: Currency) => ({ ...region, ...currency });

const extendedRegions = {} as ExtendedBrandRegions;

// const extendedRegions: ExtendedBrandRegions = Object.keys(regions).reduce((result: ExtendedBrandRegions, key: Brand) => {
//   result[key] = regions[key].map((region: Region) => (
//     extend(region, currencies[key][region.currencyCode]);
//   return result;
// }, {});

for (const brand of BRANDS) {
  extendedRegions[brand] = regions[brand].map((region: Region) => (
    extend(region, currencies[brand][region.currencyCode])
  ));
}

export { extendedRegions };
