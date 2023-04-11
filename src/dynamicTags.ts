export const DYNAMIC_TAG_BRANDS = [
  "luxuryescapes",
  "scooponexperience",
  "scoopontravel",
  "kogantravel",
  "lebusinesstraveller",
  "cudotravel",
  "treatmetravel",
  "dealstravel",
];

export enum PermittedTags {
  "BrandName" = "BrandName",
  "SalesEmail" = "SalesEmail",
  "CruiseEmail" = "CruiseEmail",
  "TourEmail" = "TourEmail",
  "TrustedPartnerTourEmail" = "TrustedPartnerTourEmail",
  "FlightPolicyLink" = "FlightPolicyLink",
}

type PermittedTagsType = keyof typeof PermittedTags;

type Brand = typeof DYNAMIC_TAG_BRANDS[number];

export type Tags = {
  [key in PermittedTagsType]: string;
};

type BrandTags = {
  [brand in Brand]: Tags;
};

export const dynamicTags: BrandTags = {
  treatmetravel: {
    BrandName: "Treat Me",
    SalesEmail: "sales@luxuryescapes.com",
    CruiseEmail: "cruises@luxuryescapes.com",
    TourEmail: "tours@luxuryescapes.com",
    TrustedPartnerTourEmail: "trustedpartnertours@luxuryescapes.com",
    FlightPolicyLink: "https://luxeveryday.com/treatme-travel-terms-and-conditions",
  },
  dealstravel: {
    BrandName: "Deals",
    SalesEmail: "sales@luxuryescapes.com",
    CruiseEmail: "cruises@luxuryescapes.com",
    TourEmail: "tours@luxuryescapes.com",
    TrustedPartnerTourEmail: "trustedpartnertours@luxuryescapes.com",
    FlightPolicyLink: "https://luxeveryday.com/deals-travel-terms-and-conditions",
  },
  cudotravel: {
    BrandName: "Cudo",
    SalesEmail: "sales@luxuryescapes.com",
    CruiseEmail: "cruises@luxuryescapes.com",
    TourEmail: "tours@luxuryescapes.com",
    TrustedPartnerTourEmail: "trustedpartnertours@luxuryescapes.com",
    FlightPolicyLink: "https://luxeveryday.com/cudo-travel-terms-and-conditions",
  },
  scoopontravel: {
    BrandName: "Scoopon",
    SalesEmail: "sales@luxuryescapes.com",
    CruiseEmail: "cruises@luxuryescapes.com",
    TourEmail: "tours@luxuryescapes.com",
    TrustedPartnerTourEmail: "trustedpartnertours@luxuryescapes.com",
    FlightPolicyLink: "https://luxeveryday.com/scoopon-travel-terms-and-conditions",
  },
  kogantravel: {
    BrandName: "Kogan Travel",
    SalesEmail: "sales@kogantravel.com",
    CruiseEmail: "sales@kogantravel.com",
    TourEmail: "sales@kogantravel.com",
    TrustedPartnerTourEmail: "sales@kogantravel.com",
    FlightPolicyLink: "https://kogantravel.com/au/flights-policies",
  },
  lebusinesstraveller: {
    BrandName: "LE for Business",
    SalesEmail: "sales@luxuryescapes.com",
    CruiseEmail: "cruises@luxuryescapes.com",
    TourEmail: "tours@luxuryescapes.com",
    TrustedPartnerTourEmail: "trustedpartnertours@luxuryescapes.com",
    FlightPolicyLink: "https://luxuryescapes.com/au/flights-policies",
  },
  luxuryescapes: {
    BrandName: "Luxury Escapes",
    SalesEmail: "sales@luxuryescapes.com",
    CruiseEmail: "cruises@luxuryescapes.com",
    TourEmail: "tours@luxuryescapes.com",
    TrustedPartnerTourEmail: "trustedpartnertours@luxuryescapes.com",
    FlightPolicyLink: "https://luxuryescapes.com/au/flights-policies",
  },
};
