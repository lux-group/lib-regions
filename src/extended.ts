import { currencies, Currency } from "./currencies";
import { Region, regions } from "./regions";

export interface ExtendedRegion extends Region, Currency {}

export interface ExtendedBrandRegions {
  [brand: string]: ExtendedRegion[];
}

const extend = (region: Region, currency: Currency) => ({ ...region, ...currency });

const brands = Object.keys(regions);

const extendedRegions: ExtendedBrandRegions = {};

for (const brand of brands) {
  extendedRegions[brand] = regions[brand].map((region: Region) => (
    extend(region, currencies[brand][region.currencyCode])
  ));
}

export { extendedRegions };
