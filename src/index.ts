import { currencies as _currencies } from "./currencies";
import { ExtendedRegion, extendedRegions } from "./extended";

function regions(brand?: string) {
  return extendedRegions[brand || "luxuryescapes"];
}

function currencies(brand?: string) {
  return _currencies[brand || "luxuryescapes"];
}

const zeroDecimalCurrencies = [
  "BIF", "CLP", "DJF", "GNF", "JPY", "KMF", "KRW", "MGA",
  "PYG", "RWF", "VND", "VUV", "XAF", "XOF", "XPF",
];

export function getRegions(brand?: string) {
  return regions(brand);
}

export function getRegionCodes(brand?: string) {
  return regions(brand).map((region) => region.code);
}

export function getRegionNames(brand?: string) {
  return regions(brand).map((region) => region.name);
}

export function getRegionByCode(regionCode: string, brand?: string) {
  if (!regionCode) {
    return null;
  }
  return regions(brand).find((region) => (region.code.toLowerCase() === regionCode.toLowerCase()));
}

export function getRegionByCurrency(currencyCode: string, brand?: string) {
  return regions(brand).find((region) => (region.currencyCode.toLowerCase() === currencyCode.toLowerCase()));
}

export function getDefaultRegion(brand?: string) {
  return regions(brand)[0];
}

export function getRegionNameByCode(code: string, brand?: string) {
  const region = getRegionByCode(code, brand);
  return region && region.name || null;
}

export function getDefaultRegionCode(brand?: string) {
  return regions(brand)[0].code;
}

export function getDefaultRegionName(brand?: string) {
  return regions(brand)[0].name;
}

export function getCurrencyCodes(brand?: string) {
  return Object.keys(currencies(brand));
}

export function getPaymentMethodsByCurrencyCode(currencyCode: string, brand?: string) {
  return currencies(brand)[currencyCode].paymentMethods;
}

export function getZeroDecimalCurrencies() {
  return zeroDecimalCurrencies;
}

export function getRegionLang(brand?: string) {
  return regions(brand).map((region) => region.lang);
}

export function getRegionReferralAmountByCode(code: string, brand?: string) {
  const region = getRegionByCode(code, brand);
  return region && region.referralAmount || null;
}

export function getRegionPhonePrefix(brand?: string) {
  return regions(brand).map((region) => region.phonePrefix);
}

export function getRegionNamesAndCode(brand?: string) {
  return regions(brand).map((region) => ({
    name: region.name,
    code: region.code,
  }));
}

export function isRegionAllowed(brand: string, regionCode?: string) {
  const code = regionCode || "AU";
  return regions(brand).some((region) => region.code === code);
}
