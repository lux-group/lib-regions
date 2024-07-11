import { currencies as _currencies } from "./currencies";
import { ExtendedRegion as Region, extendedRegions } from "./extended";
import { ALLOWED_ORIGIN_COUNTRIES, COVER_GENIUS_COUNTRIES, UNIVERSAL_COUNTRIES } from "./insurance";
import { paymentMethodsByRegion as _paymentMethodsByRegion } from "./paymentMethodsByregion";
import { priorityPhoneNumbers } from "./priorityPhoneNumbers";
import { Brand, LUXURY_ESCAPES } from "./regions";

export { Region };

function regions(brand?: Brand) {
  return extendedRegions[brand || LUXURY_ESCAPES];
}

function currencies(brand?: string) {
  return _currencies[brand || LUXURY_ESCAPES];
}

function paymentMethodsByRegion(brand?: string) {
  return _paymentMethodsByRegion[brand || LUXURY_ESCAPES];
}

const zeroDecimalCurrencies = [
  "BIF",
  "CLP",
  "DJF",
  "GNF",
  "JPY",
  "KMF",
  "KRW",
  "MGA",
  "PYG",
  "RWF",
  "VND",
  "VUV",
  "XAF",
  "XOF",
  "XPF",
];

// Custom order of countries that are more important to LE, showing it before other countries on CP and admin
const REGIONS_START_ORDER = ["AU", "US", "GB", "NZ", "SG"];

export function getPriorityPhoneNumbers(brand?: string) {
  return priorityPhoneNumbers[brand || LUXURY_ESCAPES];
}

export function getPriorityPhoneNumberByCode(
  regionCode: string,
  brand?: string,
) {
  if (!regionCode) {
    return null;
  }

  const priorityNumbers = getPriorityPhoneNumbers(brand);
  if (priorityNumbers.length > 0) {
    const pNumber = priorityNumbers.find(
      (phoneNumber) =>
        phoneNumber.code.toLowerCase() === regionCode.toLowerCase(),
    );

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

export function getRegionCodesSortedByKeyRegions(
  brand?: Brand,
  excludedRegions?: string[],
) {
  const codes = excludedRegions
    ? getRegionCodes(brand).filter((code) => !excludedRegions.includes(code))
    : getRegionCodes(brand);

  const keyRegions = REGIONS_START_ORDER.filter((code) => codes.includes(code));
  const otherRegions = codes.filter(
    (code) => !REGIONS_START_ORDER.includes(code),
  );

  return {
    allRegionCodes: [...keyRegions, ...otherRegions],
    lastKeyRegionIndex: keyRegions.length > 0 ? keyRegions.length - 1 : null,
  };
}

export function getRegionNames(brand?: Brand) {
  return regions(brand).map((region) => region.name);
}

export function getRegionByCode(regionCode: string, brand?: Brand) {
  if (!regionCode) {
    return null;
  }
  return regions(brand).find(
    (region) => region.code.toLowerCase() === regionCode.toLowerCase(),
  );
}

export function getRegionByCurrency(currencyCode: string, brand?: Brand) {
  return regions(brand).find(
    (region) => region.currencyCode.toLowerCase() === currencyCode.toLowerCase(),
  );
}

export function getDefaultRegion(brand?: Brand) {
  return regions(brand)[0];
}

export function getRegionNameByCode(code: string, brand?: Brand) {
  const region = getRegionByCode(code, brand);
  return (region && region.name) || null;
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

export function getPaymentMethodsByCurrencyCode(
  currencyCode: string,
  brand?: string,
) {
  if (!currencies(brand)[currencyCode]) {
    return [];
  }

  return currencies(brand)[currencyCode].paymentMethods;
}

export function getPaymentMethodsByRegion(
  regionCode: string,
  brand?: string,
) {
  if (!paymentMethodsByRegion(brand)[regionCode]) {
    return [];
  }

  return paymentMethodsByRegion(brand)[regionCode].paymentMethods;
}

export function getZeroDecimalCurrencies() {
  return zeroDecimalCurrencies;
}

export function getRegionLang(brand?: Brand) {
  return regions(brand).map((region) => region.lang);
}

export function getRegionReferralAmountByCode(code: string, brand?: Brand) {
  const region = getRegionByCode(code, brand);
  return (region && region.referralAmount) || null;
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

const insuranceCountries = [...COVER_GENIUS_COUNTRIES, ...UNIVERSAL_COUNTRIES];

export function getInsuranceCountries() {
  return insuranceCountries;
}

export function getInsuranceAllowedOriginCountries() {
  return ALLOWED_ORIGIN_COUNTRIES;
}

export function getInsuranceCountryNames() {
  return insuranceCountries.map((country) => country.name);
}

export function getInsuranceCountryNameByCode(code: string) {
  const country = insuranceCountries.find((country) => country.code === code);
  return country?.name;
}

export function getInsuranceCountryNameByTwoLetterCode(twoLetterCode: string) {
  const country = insuranceCountries.find((country) => country.two_letter_country_code === twoLetterCode);
  return country?.name;
}

export function getInsuranceCountryTwoLetterCodeByName(name: string) {
  const country = insuranceCountries.find((country) => country.name === name);
  return country?.two_letter_country_code;
}
