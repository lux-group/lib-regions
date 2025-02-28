import { phone } from "phone";

const NON_NUMERICAL_CHARACTERS_REGEX = /[^0-9]/;

export const REGIONS_COUNTRY_CODES = {
  AD: {
    countryName: "Andorra",
    countryCode: "376",
  },
  AE: {
    countryName: "United Arab Emirates",
    countryCode: "971",
  },
  AL: {
    countryName: "Albania",
    countryCode: "355",
  },
  AT: {
    countryName: "Austria",
    countryCode: "43",
  },
  AU: {
    countryName: "Australia",
    countryCode: "61",
  },
  BA: {
    countryName: "Bosnia and Herzegovina",
    countryCode: "387",
  },
  BE: {
    countryName: "Belgium",
    countryCode: "32",
  },
  BG: {
    countryName: "Bulgaria",
    countryCode: "359",
  },
  BY: {
    countryName: "Belarus",
    countryCode: "375",
  },
  CA: {
    countryName: "Canada",
    countryCode: "1",
  },
  CH: {
    countryName: "Switzerland",
    countryCode: "41",
  },
  CN: {
    countryName: "China",
    countryCode: "86",
  },
  CY: {
    countryName: "Cyprus",
    countryCode: "357",
  },
  CZ: {
    countryName: "Czech Republic",
    countryCode: "420",
  },
  DE: {
    countryName: "Germany",
    countryCode: "49",
  },
  DK: {
    countryName: "Denmark",
    countryCode: "45",
  },
  EE: {
    countryName: "Estonia",
    countryCode: "372",
  },
  ES: {
    countryName: "Spain",
    countryCode: "34",
  },
  FI: {
    countryName: "Finland",
    countryCode: "358",
  },
  FR: {
    countryName: "France",
    countryCode: "33",
  },
  GB: {
    countryName: "United Kingdom",
    countryCode: "44",
  },
  GR: {
    countryName: "Greece",
    countryCode: "30",
  },
  HK: {
    countryName: "Hong Kong",
    countryCode: "852",
  },
  HR: {
    countryName: "Croatia",
    countryCode: "385",
  },
  HU: {
    countryName: "Hungary",
    countryCode: "36",
  },
  ID: {
    countryName: "Indonesia",
    countryCode: "62",
  },
  IE: {
    countryName: "Ireland",
    countryCode: "353",
  },
  IL: {
    countryName: "Israel",
    countryCode: "972",
  },
  IN: {
    countryName: "India",
    countryCode: "91",
  },
  IS: {
    countryName: "Iceland",
    countryCode: "354",
  },
  IT: {
    countryName: "Italy",
    countryCode: "39",
  },
  JP: {
    countryName: "Japan",
    countryCode: "81",
  },
  KR: {
    countryName: "Korea",
    countryCode: "82",
  },
  LI: {
    countryName: "Liechtenstein",
    countryCode: "423",
  },
  LT: {
    countryName: "Lithuania",
    countryCode: "370",
  },
  LU: {
    countryName: "Luxembourg",
    countryCode: "352",
  },
  LV: {
    countryName: "Latvia",
    countryCode: "371",
  },
  MC: {
    countryName: "Monaco",
    countryCode: "377",
  },
  MD: {
    countryName: "Moldova",
    countryCode: "373",
  },
  ME: {
    countryName: "Montenegro",
    countryCode: "382",
  },
  MK: {
    countryName: "North Macedonia",
    countryCode: "389",
  },
  MO: {
    countryName: "Macau",
    countryCode: "853",
  },
  MT: {
    countryName: "Malta",
    countryCode: "356",
  },
  MY: {
    countryName: "Malaysia",
    countryCode: "60",
  },
  NL: {
    countryName: "Netherlands",
    countryCode: "31",
  },
  NO: {
    countryName: "Norway",
    countryCode: "47",
  },
  NZ: {
    countryName: "New Zealand",
    countryCode: "64",
  },
  PH: {
    countryName: "Philippines",
    countryCode: "63",
  },
  PL: {
    countryName: "Poland",
    countryCode: "48",
  },
  PT: {
    countryName: "Portugal",
    countryCode: "351",
  },
  QA: {
    countryName: "Qatar",
    countryCode: "964",
  },
  RO: {
    countryName: "Romania",
    countryCode: "40",
  },
  RS: {
    countryName: "Serbia",
    countryCode: "381",
  },
  RU: {
    countryName: "Russia",
    countryCode: "7",
  },
  SA: {
    countryName: "Saudi Arabia",
    countryCode: "966",
  },
  SE: {
    countryName: "Sweden",
    countryCode: "46",
  },
  SG: {
    countryName: "Singapore",
    countryCode: "65",
  },
  SI: {
    countryName: "Slovenia",
    countryCode: "386",
  },
  SK: {
    countryName: "Slovakia",
    countryCode: "421",
  },
  SM: {
    countryName: "San Marino",
    countryCode: "378",
  },
  TH: {
    countryName: "Thailand",
    countryCode: "66",
  },
  TW: {
    countryName: "Taiwan",
    countryCode: "886",
  },
  UA: {
    countryName: "Ukraine",
    countryCode: "380",
  },
  US: {
    countryName: "United States",
    countryCode: "1",
  },
  VA: {
    countryName: "Vatican City",
    countryCode: "379",
  },
  VN: {
    countryName: "Vietnam",
    countryCode: "84",
  },
  ZA: {
    countryName: "South Africa",
    countryCode: "27",
  },
};

const REGIONS_WITH_ZERO_TRUNK_PREFIX = new Set([
  "AT", // Austria
  "AU", // Australia
  "BD", // Bangladesh
  "BE", // Belgium
  "BG", // Bulgaria
  "CZ", // Czech Republic
  "DE", // Germany
  "DZ", // Algeria
  "EG", // Egypt
  "FI", // Finland
  "FR", // France
  "GB", // United Kingdom
  "GR", // Greece
  "ID", // Indonesia
  "IE", // Ireland
  "IN", // India
  "IT", // Italy
  "JP", // Japan
  "KE", // Kenya
  "MA", // Morocco
  "MY", // Malaysia
  "NG", // Nigeria
  "NL", // Netherlands
  "NZ", // New Zealand
  "PH", // Philippines
  "PK", // Pakistan
  "PL", // Poland
  "RO", // Romania
  "SE", // Sweden
  "CH", // Switzerland
  "TH", // Thailand
  "TR", // Turkey
  "TZ", // Tanzania
  "UG", // Uganda
  "VN", // Vietnam
  "ZA",  // South Africa
]);

const REGEX_OVERRIDE_FOR_REGION: Record<string, RegExp> = {
  UAE: /^(?:[2-467-9]\d{7}|5\d{8})$/,
  AE: /^(?:[2-467-9]\d{7}|5\d{8})$/,
};

export function isPhoneNumberValidForRegion(
  { phoneNumber, regionCode }: { phoneNumber: string, regionCode: string }) {

    // If the phone number has any non-numeric characters, return false
    // We want to validate for this separately because the 3rd party library
    // will return true as it will try to sanitize the phone number and return the validity against
    // the region based on the sanitized number
    //
    // note: this will also capture any cases where there is an international country code attached to
    // the number (e.g. +61)
    if (NON_NUMERICAL_CHARACTERS_REGEX.test(phoneNumber)) {
      return false;
    }

    if (REGIONS_WITH_ZERO_TRUNK_PREFIX.has(regionCode) && phoneNumber.startsWith("0")) {
      return false;
    }

    // If the lib isn't good enough for some reason, override it with our own regex
    if (REGEX_OVERRIDE_FOR_REGION[regionCode]) {
      return REGEX_OVERRIDE_FOR_REGION[regionCode].test(phoneNumber);
    }

    const phoneNumberResult = phone(phoneNumber, {
      country: regionCode,
      strictDetection: true,
      validateMobilePrefix: false,
    });

    return phoneNumberResult.isValid;
}
