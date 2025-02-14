import { expect } from "chai";
import * as regionModule from "./";
import { Brand } from "./regions";

describe("getRegionCodes()", function () {
  it("should return an array of region codes", function () {
    expect(regionModule.getRegionCodes("scoopontravel")).to.deep.equal(["AU"]);
    expect(regionModule.getRegionCodes("kogantravel")).to.deep.equal(["AU"]);
    expect(regionModule.getRegionCodes("lebusinesstraveller")).to.deep.equal([
      "AU",
    ]);
    expect(regionModule.getRegionCodes("leagenthub")).to.deep.equal(["AU", "NZ", "GB"]);
  });
});

describe("getRegionCodesSortedByKeyRegions", () => {
  const { allRegionCodes, lastKeyRegionIndex } =
    regionModule.getRegionCodesSortedByKeyRegions();

  it("should return key region codes sorted and as initial elements", () => {
    const keyRegionCodes = allRegionCodes.slice(0, 7);
    expect(keyRegionCodes).to.deep.equal(["AU", "US", "GB", "NZ", "SG", "HK", "TW"]);
  });

  it("should return the index of last key region", () => {
    expect(lastKeyRegionIndex).to.be.equal(6);
  });

  it("should return other region codes sorted and after key region codes", () => {
    const otherRegionCodes = allRegionCodes.slice(7, 12);
    expect(otherRegionCodes).to.deep.equal(["CA", "CN", "FR", "DE", "IN"]);
  });

  it("should not return excluded regions", () => {
    const { allRegionCodes } = regionModule.getRegionCodesSortedByKeyRegions(
      "scoopontravel",
      ["AU"]
    );
    expect(allRegionCodes).to.deep.equal([]);
  });
});

const expectedLeRegions = [
  "Australia",
  "Canada",
  "China",
  "France",
  "Germany",
  "Hong Kong",
  "India",
  "Indonesia",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Korea",
  "Macau",
  "Malaysia",
  "Netherlands",
  "New Zealand",
  "Philippines",
  "Qatar",
  "Russia",
  "Saudi Arabia",
  "Singapore",
  "South Africa",
  "Spain",
  "Taiwan",
  "Thailand",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Vietnam",
];

describe("getRegionNames()", function () {
  const cases: [Brand, string[]][] = [
    ["luxuryescapes", expectedLeRegions],
    ["scoopontravel", ["Australia"]],
    ["cudotravel", ["Australia"]],
    ["treatmetravel", ["New Zealand"]],
    ["dealstravel", ["Australia"]],
    ["kogantravel", ["Australia"]],
    ["yidu", ["China"]],
    ["zoomzoom", ["Korea", "Australia"]],
    ["newwhitelabel", ["Australia"]],
    ["lebusinesstraveller", ["Australia"]],
    ["leagenthub", ["Australia", "New Zealand", "United Kingdom"]],
  ];
  cases.forEach(([brand, expectedRegions]) => {
    it(`when the brand "${brand}" is passed as an argument to getRegionNames(brand), the function should return ${expectedRegions}`, () => {
      expect(regionModule.getRegionNames(brand)).to.deep.equal(expectedRegions);
    });
  });

  it("should return an array of region names default brand to luxuryescapes", function () {
    expect(regionModule.getRegionNames()).to.deep.equal([
      "Australia",
      "Canada",
      "China",
      "France",
      "Germany",
      "Hong Kong",
      "India",
      "Indonesia",
      "Ireland",
      "Israel",
      "Italy",
      "Japan",
      "Korea",
      "Macau",
      "Malaysia",
      "Netherlands",
      "New Zealand",
      "Philippines",
      "Qatar",
      "Russia",
      "Saudi Arabia",
      "Singapore",
      "South Africa",
      "Spain",
      "Taiwan",
      "Thailand",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "Vietnam",
    ]);
  });
});

describe("getRegionByCode()", function () {
  it("should return null in brand without region", function () {
    expect(regionModule.getRegionByCode("CA", "scoopontravel")).to.be.undefined;
  });

  it('should handle special region mapping for Denmark', function() {
    expect(regionModule.getRegionByCode("DK", "luxuryescapes")).to.deep.equal(regionModule.getRegionByCode("NL", "luxuryescapes"));
  });

  it('should handle special region mapping for Sweden', function() {
    expect(regionModule.getRegionByCode("SE", "luxuryescapes")).to.deep.equal(regionModule.getRegionByCode("ES", "luxuryescapes"));
  });

  it('should handle special region mapping for Norway', function() {
    expect(regionModule.getRegionByCode("NO", "luxuryescapes")).to.deep.equal(regionModule.getRegionByCode("IT", "luxuryescapes"));
  });
});

describe("getRegionByCurrency()", function () {
  it("should return region from currency code", function () {
    const region = regionModule.getRegionByCurrency("AUD", "luxuryescapes");
    expect(region ? region.code : "fail test if region undefined").to.equal(
      "AU"
    );
  });
});

describe("getRegionNameByCode()", function () {
  it("returns region name if region exists", function () {
    expect(regionModule.getRegionNameByCode("AU", "scoopontravel")).to.equal(
      "Australia"
    );
  });

  it("returns 'null' code if region is absent for brand", function () {
    expect(regionModule.getRegionNameByCode("CA", "scoopontravel")).to.equal(
      null
    );
  });

  it("returns region name if region exists default brand to luxuryescapes", function () {
    expect(regionModule.getRegionNameByCode("AU")).to.equal("Australia");
  });
});

describe("getDefaultRegion()", function () {
  it("should return the default region's info", function () {
    expect(regionModule.getDefaultRegion("treatmetravel").code).to.equal("NZ");
  });
});

describe("getDefaultRegionCode()", function () {
  it("should return the default region's code", function () {
    expect(regionModule.getDefaultRegionCode("luxuryescapes")).to.equal("AU");
  });

  it("should return the default region's code default brand to luxuryescapes", function () {
    expect(regionModule.getDefaultRegionCode()).to.equal("AU");
  });

  it("should return the default region for the brand", function () {
    expect(regionModule.getDefaultRegionCode("treatmetravel")).to.equal("NZ");
  });
});

describe("getDefaultRegionName()", function () {
  it("should return the default region's name", function () {
    expect(regionModule.getDefaultRegionName("scoopontravel")).to.equal(
      "Australia"
    );
  });

  it("should return the default region's name default brand to luxuryescapes", function () {
    expect(regionModule.getDefaultRegionName()).to.equal("Australia");
  });
});

describe("getCurrencyCodes()", function () {
  it("should return an array of currency codes", function () {
    expect(regionModule.getCurrencyCodes("scoopontravel")).to.deep.equal([
      "AUD",
    ]);
    expect(regionModule.getCurrencyCodes("kogantravel")).to.deep.equal(["AUD"]);
    expect(regionModule.getCurrencyCodes("lebusinesstraveller")).to.deep.equal([
      "AUD",
    ]);
    expect(regionModule.getCurrencyCodes("leagenthub")).to.deep.equal([
      "AUD", "NZD", "GBP"
    ]);
  });

  it("should return an array of currency codes default brand to luxuryescapes", function () {
    expect(regionModule.getCurrencyCodes()).to.deep.equal([
      "AUD",
      "CAD",
      "CNY",
      "EUR",
      "HKD",
      "INR",
      "IDR",
      "ILS",
      "JPY",
      "KRW",
      "MOP",
      "MYR",
      "NZD",
      "PHP",
      "QAR",
      "RUB",
      "SAR",
      "SGD",
      "TWD",
      "THB",
      "ZAR",
      "AED",
      "GBP",
      "USD",
      "VND",
    ]);
  });
});

describe("getPaymentMethodsByCurrencyCode()", function () {
  it("should return an array of payment methods", function () {
    expect(
      regionModule.getPaymentMethodsByCurrencyCode("AUD", "scoopontravel")
    ).to.deep.equal(["applepay", "stripe", "braintree", "stripe_3ds", "giftcard", "stripe_custom_payto", "stripe_payment_element_card", "googlepay"]);
    expect(
      regionModule.getPaymentMethodsByCurrencyCode("AUD", "kogantravel")
    ).to.deep.equal(["stripe", "braintree", "stripe_3ds", "giftcard", "stripe_payment_element_card"]);
  });

  it("should return an array of payment methods default brand to luxuryescapes", function () {
    expect(regionModule.getPaymentMethodsByCurrencyCode("AUD")).to.deep.equal([
      "le_credit",
      "stripe",
      "deposit_stripe",
      "braintree",
      "qantas",
      "giftcard",
      "bridgerpay",
      "applepay",
      "googlepay",
      "stripe_3ds",
      "waave_bp",
      "velocity",
      "gocardless",
      "stripe_custom_payto",
      "stripe_payment_element_card",
      "stripe_payment_element_klarna",
      "secure_payment",
      "azupay_pay_id",
    ]);
  });

  it("should return an array of payment methods default brand to luxuryescapes SGD", function () {
    expect(regionModule.getPaymentMethodsByCurrencyCode("SGD")).to.deep.equal([
      "le_credit",
      "stripe",
      "deposit_stripe",
      "giftcard",
      "krisFlyer",
      "applepay",
      "googlepay",
      "hoolah_bp",
      "stripe_3ds",
      "atome_bp",
      "stripe_payment_element_card",
      "stripe_payment_element_paynow",
    ]);
  });
  it("should return an empty array of payment methods when brand doesn't have sellected currency", function () {
    expect(
      regionModule.getPaymentMethodsByCurrencyCode("AUD", "treatmetravel")
    ).to.deep.equal([]);
  });

  it("should return an array of payment methods default brand to luxuryescapes IN", function () {
    expect(regionModule.getPaymentMethodsByCurrencyCode("INR")).to.deep.equal([
      "le_credit",
      "stripe",
      "deposit_stripe",
      "razorpay",
      "giftcard",
      "stripe_3ds",
      "stripe_payment_element_card",
    ]);
  });

  it("should return an array of payment methods for brand to luxuryescapes for EUR", function () {
    expect(regionModule.getPaymentMethodsByCurrencyCode("EUR")).to.deep.equal([
      "le_credit",
      "stripe",
      "deposit_stripe",
      "giftcard",
      "applepay",
      "googlepay",
      "stripe_3ds",
      "stripe_3ds_v2",
      "stripe_payment_element_card",
      "stripe_payment_element_klarna",
    ]);
  });

  it("should return an array of payment methods for brand to luxuryescapes for USD", function () {
    expect(regionModule.getPaymentMethodsByCurrencyCode("USD")).to.deep.equal([
      "le_credit",
      "stripe",
      "deposit_stripe",
      "giftcard",
      "krisFlyer",
      "applepay",
      "googlepay",
      "afterpay_bp",
      "stripe_3ds",
      "stripe_payment_element_card",
      "stripe_payment_element_klarna",
    ]);
  });

  it("should return an array of payment methods for brand to luxuryescapes for HKD", function () {
    expect(regionModule.getPaymentMethodsByCurrencyCode("HKD")).to.deep.equal([
      "le_credit",
      "stripe",
      "deposit_stripe",
      "giftcard",
      "krisFlyer",
      "applepay",
      "googlepay",
      "stripe_3ds",
      "stripe_payment_element_card",
    ]);
  });
});

describe("getPaymentMethodsByRegion()", function () {
  it("NL region to luxuryescapes", function () {
    expect(regionModule.getPaymentMethodsByRegion("NL", "luxuryescapes")).to.deep.equal([
      "stripe_payment_element_ideal",
      "flying_blue",
    ]);
  });

  it("FR region to luxuryescapes", function () {
    expect(regionModule.getPaymentMethodsByRegion("FR", "luxuryescapes")).to.deep.equal([
     "flying_blue",
    ]);
  });
});

describe("getZeroDecimalCurrencies()", function () {
  it("should return an array of currency codes", function () {
    expect(regionModule.getZeroDecimalCurrencies()).to.be.an("array");
  });
});

describe("getRegionLang()", function () {
  it("should return an array of region langs", function () {
    expect(regionModule.getRegionLang("scoopontravel")).to.deep.equal([
      "en-AU",
    ]);
  });

  it("should return an array of region langs default brand to luxuryescapes", function () {
    expect(regionModule.getRegionLang()).to.deep.equal([
      "en-AU",
      "en-CA",
      "en-CN",
      "en-FR",
      "en-DE",
      "en-HK",
      "en-IN",
      "en-ID",
      "en-IE",
      "en-IL",
      "en-IT",
      "en-JP",
      "en-KR",
      "en-MO",
      "en-MY",
      "en-NL",
      "en-NZ",
      "en-PH",
      "en-QA",
      "en-RU",
      "en-SA",
      "en-SG",
      "en-ZA",
      "en-ES",
      "en-TW",
      "en-TH",
      "en-AE",
      "en-GB",
      "en-US",
      "en-VN",
    ]);
  });
});

describe("getRegionReferralAmountByCode()", function () {
  it("should return the region referral amount", function () {
    expect(
      regionModule.getRegionReferralAmountByCode("AU", "scoopontravel")
    ).to.deep.equal(50);
  });

  it("should return the region referral amount by default brand to luxuryescapes", function () {
    expect(regionModule.getRegionReferralAmountByCode("CA")).to.deep.equal(50);
  });
});

describe("getRegionNamesAndCode()", function () {
  it("should return an array of region names and code", function () {
    expect(regionModule.getRegionNamesAndCode("scoopontravel")).to.deep.equal([
      { name: "Australia", code: "AU" },
    ]);
  });
});

describe("isRegionAllowed()", function () {
  it("should return true if brand has region", function () {
    expect(regionModule.isRegionAllowed("luxuryescapes", "CA")).to.equal(true);
  });

  it("should return true if brand has region", function () {
    expect(regionModule.isRegionAllowed("scoopontravel", "NZ")).to.equal(false);
  });
});

describe("Insurance countries", function () {
  it('should return "Australian Waters (cruises)" name for "Australian Waters" country', function() {
    const countryName = regionModule.getInsuranceCountryNameByCode('Australian Waters')

    expect(countryName).to.equal("Australian Waters (cruises)")
  });

  it('should return "Australia" name by "AU" iso code', function() {
    const countryName = regionModule.getInsuranceCountryNameByTwoLetterCode('AU')

    expect(countryName).to.equal("Australia")
  });

  it('should return "AU" iso code by "Australia"', function() {
    const isoCode = regionModule.getInsuranceCountryTwoLetterCodeByName('Australia')

    expect(isoCode).to.equal("AU")
  });

  it('should return "AU" iso code by "Australian Waters (cruises)"', function() {
    const isoCode = regionModule.getInsuranceCountryTwoLetterCodeByName('Australia')

    expect(isoCode).to.equal("AU")
  });
});

describe('getDefaultCancellationRetentionPhoneNumber', () => {
  it('should return the AU cancellation retention phone number', () => {
    const phoneNumber = regionModule.getDefaultCancellationRetentionPhoneNumber()

    expect(phoneNumber).to.deep.equal({
      number: "1300739349",
      humanReadable: "1300 739 349",
    })
  })
})

describe('isRegionPhoneNumberValid', () => {
  it('should return true if phone number is valid for region AU', () => {
    const args = {
      phoneNumber: '412121212',
      regionCode: 'AU',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(true);
  })

  it('should return false if phone number is not valid for region AU', () => {
    const args = {
      phoneNumber: '4121212121',
      regionCode: 'AU',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return false if the international prefix is provided for region AU', () => {
    const args = {
      phoneNumber: '+61412121212',
      regionCode: 'AU',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return false if phone number has the trunk prefix of 0 for region AU', () => {
    const args = {
      phoneNumber: '0412121212',
      regionCode: 'AU',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return true if phone number is valid for region NZ', () => {
    const args = {
      phoneNumber: '212121212',
      regionCode: 'NZ',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(true);
  })

  it('should return false if the international prefix is provided for region NZ', () => {
    const args = {
      phoneNumber: '+64212121212',
      regionCode: 'NZ',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return false if phone number is not valid for region NZ', () => {
    const args = {
      phoneNumber: '9121212121',
      regionCode: 'NZ',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return false if phone number has the trunk prefix of 0 for region NZ', () => {
    const args = {
      phoneNumber: '0212121212',
      regionCode: 'NZ',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return true if phone number is valid for region US', () => {
    const args = {
      phoneNumber: '2035671234',
      regionCode: 'US',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(true);
  })

  it('should return false if phone number is not valid for region US', () => {
    const args = {
      phoneNumber: '20356712341123',
      regionCode: 'US',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return false if the international prefix is provided for region US', () => {
    const args = {
      phoneNumber: '+12035671234',
      regionCode: 'US',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return true if phone number is valid for region GB', () => {
    const args = {
      phoneNumber: '7123456789',
      regionCode: 'GB',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(true);
  })

  it('should return false if phone number is not valid for region GB', () => {
    const args = {
      phoneNumber: '712345678912',
      regionCode: 'GB',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return false if the international prefix is provided for region GB', () => {
    const args = {
      phoneNumber: '+447912345678',
      regionCode: 'GB',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return false if phone number has a prefix for region GB', () => {
    const args = {
      phoneNumber: '07123456789',
      regionCode: 'GB',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return true if phone number is valid for region CA', () => {
    const args = {
      phoneNumber: '5559044252',
      regionCode: 'CA',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(true);
  })

  it('should return true if phone number is valid for region SG', () => {
    const args = {
      phoneNumber: '95553957',
      regionCode: 'SG',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(true);
  })

  it('should return false if phone number is not valid for region SG', () => {
    const args = {
      phoneNumber: '955539571231',
      regionCode: 'SG',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return false if phone number has the international prefix for region SG', () => {
    const args = {
      phoneNumber: '+6595553957',
      regionCode: 'SG',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return true if phone number is valid for region HK', () => {
    const args = {
      phoneNumber: '56655571',
      regionCode: 'HK',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(true);
  })

  it('should return false if phone number is not valid for region HK', () => {
    const args = {
      phoneNumber: '566555711231',
      regionCode: 'HK',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return false if phone number has the international prefix for region HK', () => {
    const args = {
      phoneNumber: '+85256655571',
      regionCode: 'HK',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return false if phone number has the trunk prefix of 0 for region HK', () => {
    const args = {
      phoneNumber: '056655571',
      regionCode: 'HK',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return true if phone number is valid for region ZA', () => {
    const args = {
      phoneNumber: '555328675',
      regionCode: 'ZA',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(true);
  })

  it('should return false if phone number is not valid for region ZA', () => {
    const args = {
      phoneNumber: '5553286751231',
      regionCode: 'ZA',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })

  it('should return false if phone number has the international prefix for region ZA', () => {
    const args = {
      phoneNumber: '+27555328675',
      regionCode: 'ZA',
      brand: 'luxuryescapes' as Brand
    }
    expect(regionModule.isRegionPhoneNumberValid(args)).to.equal(false);
  })
})
