import { currencies, Currency } from "./currencies";
import { BRANDS, Region, regions } from "./regions";

export interface ExtendedRegion extends Region, Currency {}

type ExtendedBrandRegions = Record<typeof BRANDS[number], Region[]>;

const extendedRegions = {} as ExtendedBrandRegions;

const extend = (region: Region, currency: Currency) => ({ ...region, ...currency });

for (const brand of BRANDS) {
  extendedRegions[brand] = regions[brand].map((region: Region) => (
    extend(region, currencies[brand][region.currencyCode])
  ));
}

export { extendedRegions };
