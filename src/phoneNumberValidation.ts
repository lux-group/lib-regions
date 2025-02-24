import { phone } from "phone";

const NON_NUMERICAL_CHARACTERS_REGEX = /[^0-9]/;

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

    const phoneNumberResult = phone(phoneNumber, {
      country: regionCode,
      strictDetection: true,
    });

    return phoneNumberResult.isValid;
}
