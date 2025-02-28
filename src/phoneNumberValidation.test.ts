import { expect } from "chai";
import { isPhoneNumberValidForRegion } from "./phoneNumberValidation";

describe("isPhoneNumberValidForRegion", () => {
  it("should return false for a phone number with non-numeric characters", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "41212ASD12", regionCode: "AU" });
    expect(result).to.be.false;
  });

  it("should return false for a phone number with an international prefix", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "+61412121212", regionCode: "AU" });
    expect(result).to.be.false;
  });

  it("should return true for a valid AU phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "412121212", regionCode: "AU" });
    expect(result).to.be.true;
  });

  it("should return false for an AU phone number with a trunk prefix", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "0412121212", regionCode: "AU" });
    expect(result).to.be.false;
  });

  it("should return false if the phone number is not a valid number for the region AU", () => {
    // 2102712121 is a valid NZ number, but not AU
    const result = isPhoneNumberValidForRegion({ phoneNumber: "2102712121", regionCode: "AU" });
    expect(result).to.be.false;
  })

  it("should return true if the phone number is a valid Australian landline phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "212345678", regionCode: "AU" });
    expect(result).to.be.true;
  })

  it("should return true for a valid NZ phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "212121212", regionCode: "NZ" });
    expect(result).to.be.true;
  });

  it("should return false for an invalid NZ phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "021212121211", regionCode: "NZ" });
    expect(result).to.be.false;
  });

  it("should return false for a NZ phone number with a trunk prefix", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "02102102102", regionCode: "NZ" });
    expect(result).to.be.false;
  });

  it("should return true for a valid GB phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "7912345678", regionCode: "GB" });
    expect(result).to.be.true;
  });

  it("should return false for an invalid GB phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "7912345678912", regionCode: "GB" });
    expect(result).to.be.false;
  });

  it("should return true for a valid US phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "2035671234", regionCode: "US" });
    expect(result).to.be.true;
  });

  it("should return false for an invalid US phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "20356712341123", regionCode: "US" });
    expect(result).to.be.false;
  });

  it("should return false for a US phone number with an international prefix", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "+12035671234", regionCode: "US" });
    expect(result).to.be.false;
  });

  it("should return true for a valid SG phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "81234567", regionCode: "SG" });
    expect(result).to.be.true;
  });

  it("should return true for a valid SG landline phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "81234567", regionCode: "SG" });
    expect(result).to.be.true;
  })

  it("should return true for a valid HK phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "51234567", regionCode: "HK" });
    expect(result).to.be.true;
  });

  it("should return false for an invalid HK phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "512345678912", regionCode: "HK" });
    expect(result).to.be.false;
  });

  it("should return true for a valid IN phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "9123456789", regionCode: "IN" });
    expect(result).to.be.true;
  });

  it("should return true for a valid BE phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "478123456", regionCode: "BE" });
    expect(result).to.be.true;
  });

  it("should return false for an invalid BE phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "3123456", regionCode: "BE" });
    expect(result).to.be.false;
  });

  it("should return true for a valid UAE landline phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "44556600", regionCode: "UAE" });
    expect(result).to.be.true;
  });

  it("should return true for a valid UAE mobile phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "545566000", regionCode: "UAE" });
    expect(result).to.be.true;
  });

  it("should return false for an invalid UAE phone number", () => {
    const result = isPhoneNumberValidForRegion({ phoneNumber: "44556600123", regionCode: "UAE" });
    expect(result).to.be.false;
  });
});