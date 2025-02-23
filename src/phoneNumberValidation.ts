import { phone } from "phone";

export async function altIsRegionPhoneNumberValid(
  { phoneNumber, regionCode }: { phoneNumber: string, regionCode: string }) {
    return phone(phoneNumber, { country: regionCode }).isValid;
}
