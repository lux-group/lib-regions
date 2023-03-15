import { currencies as _currencies } from "./currencies";
import { dynamicTags as _dynamicTags, Tags } from "./dynamicTags";
import { ExtendedRegion as Region, extendedRegions } from "./extended";
import { priorityPhoneNumbers } from "./priorityPhoneNumbers";
import { Brand, LUXURY_ESCAPES } from "./regions";

export { Region };

function regions(brand?: Brand) {
  return extendedRegions[brand || LUXURY_ESCAPES];
}

function currencies(brand?: string) {
  return _currencies[brand || LUXURY_ESCAPES];
}

function dynamicTagsForBrand(brand?: string): Tags {
  return _dynamicTags[brand || LUXURY_ESCAPES];
}

const zeroDecimalCurrencies = [
  "BIF", "CLP", "DJF", "GNF", "JPY", "KMF", "KRW", "MGA",
  "PYG", "RWF", "VND", "VUV", "XAF", "XOF", "XPF",
];

export function getPriorityPhoneNumbers(brand?: string) {
  return priorityPhoneNumbers[brand || LUXURY_ESCAPES];
}

export function getPriorityPhoneNumberByCode(regionCode: string, brand?: string) {
  if (!regionCode) {
    return null;
  }

  const priorityNumbers = getPriorityPhoneNumbers(brand);
  if (priorityNumbers.length > 0) {
    const pNumber = priorityNumbers
      .find((phoneNumber) => (phoneNumber.code.toLowerCase() === regionCode.toLowerCase()));

    return pNumber ? pNumber : null;
  }

  return null;
}

export function getDefaultPriorityPhoneNumber(brand?: string) {
  return getPriorityPhoneNumbers(brand)[0];
}

export function getRegions(brand?: Brand) {
  return regions(brand);
}

export function getRegionCodes(brand?: Brand) {
  return regions(brand).map((region) => region.code);
}

export function getRegionNames(brand?: Brand) {
  return regions(brand).map((region) => region.name);
}

export function getRegionByCode(regionCode: string, brand?: Brand) {
  if (!regionCode) {
    return null;
  }
  return regions(brand).find((region) => (region.code.toLowerCase() === regionCode.toLowerCase()));
}

export function getRegionByCurrency(currencyCode: string, brand?: Brand) {
  return regions(brand).find((region) => (region.currencyCode.toLowerCase() === currencyCode.toLowerCase()));
}

export function getDefaultRegion(brand?: Brand) {
  return regions(brand)[0];
}

export function getRegionNameByCode(code: string, brand?: Brand) {
  const region = getRegionByCode(code, brand);
  return region && region.name || null;
}

export function getDefaultRegionCode(brand?: Brand) {
  return regions(brand)[0].code;
}

export function getDefaultRegionName(brand?: Brand) {
  return regions(brand)[0].name;
}

export function getCurrencyCodes(brand?: string) {
  return Object.keys(currencies(brand));
}

export function getDynamicTagsForBrand(brand: string): Tags {
  return dynamicTagsForBrand(brand);
}

export function getPaymentMethodsByCurrencyCode(currencyCode: string, brand?: string) {
  if (!currencies(brand)[currencyCode]) {
    return [];
  }

  return currencies(brand)[currencyCode].paymentMethods;
}

export function getZeroDecimalCurrencies() {
  return zeroDecimalCurrencies;
}

export function getRegionLang(brand?: Brand) {
  return regions(brand).map((region) => region.lang);
}

export function getRegionReferralAmountByCode(code: string, brand?: Brand) {
  const region = getRegionByCode(code, brand);
  return region && region.referralAmount || null;
}

export function getRegionPhonePrefix(brand?: Brand) {
  return regions(brand).map((region) => region.phonePrefix);
}

export function getRegionNamesAndCode(brand?: Brand) {
  return regions(brand).map((region) => ({
    name: region.name,
    code: region.code,
  }));
}

export function isRegionAllowed(brand: Brand, regionCode?: string) {
  const code = regionCode || "AU";
  return regions(brand).some((region) => region.code === code);
}
