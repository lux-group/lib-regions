import { expect } from "chai";
import * as regionModule from "./";

describe("getRegionCodes()", function() {
  it("should return an array of region codes", function() {
    expect(regionModule.getRegionCodes("scoopontravel")).to.deep.equal(["AU"]);
  });
});

describe("getRegionNames()", function() {
  it("should return an array of region names", function() {
    expect(regionModule.getRegionNames("scoopontravel")).to.deep.equal(["Australia"]);
  });

  it("should return an array of region names default brand to luxuryescapes", function() {
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

describe("getRegionByCode()", function() {
  it("should return null in brand without region", function() {
    expect(regionModule.getRegionByCode("CA", "scoopontravel")).to.be.undefined;
  });
});

describe("getRegionNameByCode()", function() {
  it("returns region name if region exists", function() {
    expect(regionModule.getRegionNameByCode("AU", "scoopontravel")).to.equal("Australia");
  });

  it("returns 'null' code if region is absent for brand", function() {
    expect(regionModule.getRegionNameByCode("CA", "scoopontravel")).to.equal(null);
  });

  it("returns region name if region exists default brand to luxuryescapes", function() {
    expect(regionModule.getRegionNameByCode("AU")).to.equal("Australia");
  });
});

describe("getDefaultRegion()", function() {
  it("should return the default region's info", function() {
    expect(regionModule.getDefaultRegion("treatmetravel").code).to.equal("NZ");
  });
});

describe("getDefaultRegionCode()", function() {
  it("should return the default region's code", function() {
    expect(regionModule.getDefaultRegionCode("luxuryescapes")).to.equal("AU");
  });

  it("should return the default region's code default brand to luxuryescapes", function() {
    expect(regionModule.getDefaultRegionCode()).to.equal("AU");
  });

  it("should return the default region for the brand", function() {
    expect(regionModule.getDefaultRegionCode("treatmetravel")).to.equal("NZ");
  });
});

describe("getDefaultRegionName()", function() {
  it("should return the default region's name", function() {
    expect(regionModule.getDefaultRegionName("scoopontravel")).to.equal("Australia");
  });

  it("should return the default region's name default brand to luxuryescapes", function() {
    expect(regionModule.getDefaultRegionName()).to.equal("Australia");
  });
});

describe("getCurrencyCodes()", function() {
  it("should return an array of currency codes", function() {
    expect(regionModule.getCurrencyCodes("scoopontravel")).to.deep.equal(["AUD"]);
  });

  it("should return an array of currency codes default brand to luxuryescapes", function() {
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

describe("getPaymentMethodsByCurrencyCode()", function() {
  it("should return an array of payment methods", function() {
    expect(regionModule.getPaymentMethodsByCurrencyCode("AUD", "scoopontravel")).to.deep.equal([
      "stripe",
      "braintree",
      "latitude_pay",
    ]);
  });

  it("should return an array of payment methods default brand to luxuryescapes", function() {
    expect(regionModule.getPaymentMethodsByCurrencyCode("AUD")).to.deep.equal([
      "le_credit",
      "stripe",
      "braintree",
      "qantas",
      "latitude",
      "latitude_pay",
      "giftcard",
    ]);
  });

  it("should return an array of payment methods default brand to luxuryescapes SGD", function() {
    expect(regionModule.getPaymentMethodsByCurrencyCode("SGD")).to.deep.equal([
      "le_credit",
      "stripe",
      "giftcard",
      "krisFlyer",
    ]);
  });
});

describe("getZeroDecimalCurrencies()", function() {
  it("should return an array of currency codes", function() {
    expect(regionModule.getZeroDecimalCurrencies()).to.be.an("array");
  });
});

describe("getRegionLang()", function() {
  it("should return an array of region langs", function() {
    expect(regionModule.getRegionLang("scoopontravel")).to.deep.equal(["en-AU"]);
  });

  it("should return an array of region langs default brand to luxuryescapes", function() {
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

describe("getRegionReferralAmountByCode()", function() {
  it("should return the region referral amount", function() {
    expect(regionModule.getRegionReferralAmountByCode("AU", "scoopontravel")).to.deep.equal(50);
  });

  it("should return the region referral amount by default brand to luxuryescapes", function() {
    expect(regionModule.getRegionReferralAmountByCode("CA")).to.deep.equal(100);
  });
});

describe("getRegionNamesAndCode()", function() {
  it("should return an array of region names and code", function() {
    expect(regionModule.getRegionNamesAndCode("scoopontravel")).to.deep.equal([
      {name: "Australia", code: "AU"},
    ]);
  });
});

describe("isRegionAllowed()", function() {
  it("should return true if brand has region", function() {
    expect(regionModule.isRegionAllowed("luxuryescapes", "CA")).to.equal(true);
  });

  it("should return true if brand has region", function() {
    expect(regionModule.isRegionAllowed("scoopontravel", "NZ")).to.equal(false);
  });
});
