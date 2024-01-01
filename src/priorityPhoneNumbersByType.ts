import { Brand } from "./regions";

export type PriorityPhoneNumberType = "base" | "cruises" | "tours" | "ultralux" | "supportAssistant" | "luxPlus";

interface PhoneNumber {
  humanReadable: string;
  number: string;
}

export interface PriorityPhoneNumberContact {
  code: string;
  name: string;
  lang: string;
  phonePrefix: string;
  types: Partial<{ [type in PriorityPhoneNumberType]: {
    local: PhoneNumber;
    international: PhoneNumber;
    default: "local" | "international";
  } }>;
}

type BrandPriorityPhoneNumber = Partial<{ [key in Brand]: PriorityPhoneNumberContact[] }>;

const defaultInternationalNumberLuxuryEscapes: PhoneNumber = {
  humanReadable: "+61 3 7032 3381",
  number: "+61370323381",
};

export const priorityPhoneNumbersByType: BrandPriorityPhoneNumber = {
  luxuryescapes: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      types: {
        base: {
          local: {
            humanReadable: "1300 701 198",
            number: "1300701198",
          },
          international: defaultInternationalNumberLuxuryEscapes,
          default: "local",
        },
        tours: {
          local: {
            humanReadable: "1300 670 243",
            number: "1300670243",
          },
          international: defaultInternationalNumberLuxuryEscapes,
          default: "local",
        },
        cruises: {
          local: {
            humanReadable: "1300 820 853",
            number: "1300820853",
          },
          international: defaultInternationalNumberLuxuryEscapes,
          default: "local",
        },
        ultralux: {
          local: {
            humanReadable: "1300 86 04 54",
            number: "1300860454",
          },
          international: defaultInternationalNumberLuxuryEscapes,
          default: "local",
        },
        supportAssistant: {
          local: {
            humanReadable: "1300 489 055",
            number: "1300489055",
          },
          international: defaultInternationalNumberLuxuryEscapes,
          default: "local",
        },
        luxPlus: {
          local: {
            humanReadable: "0000 000 000",
            number: "0000000000",
          },
          international: defaultInternationalNumberLuxuryEscapes,
          default: "local",
        },
      },
    },
    {
      code: "GB",
      name: "United Kingdom",
      lang: "en-GB",
      phonePrefix: "44",
      types: {
        base: {
          local: {
            humanReadable: "0808 304 4066",
            number: "08083044066",
          },
          international: defaultInternationalNumberLuxuryEscapes,
          default: "local",
        },
      },
    },
    {
      code: "NZ",
      name: "New Zealand",
      lang: "en-NZ",
      phonePrefix: "64",
      types: {
        base: {
          local: {
            humanReadable: "0800 856 497",
            number: "0800856497",
          },
          international: defaultInternationalNumberLuxuryEscapes,
          default: "local",
        },
      },
    },
    {
      code: "US",
      name: "United States",
      lang: "en-US",
      phonePrefix: "1",
      types: {
        base: {
          local: {
            humanReadable: "888 583 5444",
            number: "8885835444",
          },
          international: defaultInternationalNumberLuxuryEscapes,
          default: "local",
        },
      },
    },
  ],
  scoopontravel: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      types: {
        base: {
          local: {
            humanReadable: "1300 86 04 54",
            number: "1300860454",
          },
          international: {
            humanReadable: "+61 3 8593 4859",
            number: "+61385934859",
          },
          default: "international",
        },
      },
    },
  ],
  cudotravel: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      types: {
        base: {
          local: {
            humanReadable: "1300 86 04 54",
            number: "1300860454",
          },
          international: {
            humanReadable: "+61 3 8593 4859",
            number: "+61385934859",
          },
          default: "international",
        },
      },
    },
  ],
  dealstravel: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      types: {
        base: {
          local: {
            humanReadable: "1300 86 04 54",
            number: "1300860454",
          },
          international: {
            humanReadable: "+61 3 8593 4859",
            number: "+61385934859",
          },
          default: "international",
        },
      },
    },
  ],
  treatmetravel: [
    {
      code: "NZ",
      name: "New Zealand",
      lang: "en-NZ",
      phonePrefix: "64",
      types: {
        base: {
          local: {
            humanReadable: "0800 900 094",
            number: "0800900094",
          },
          international: {
            humanReadable: "+61 2 8320 6845",
            number: "+61283206845",
          },
          default: "international",
        },
      },
    },
  ],
  kogantravel: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      types: {
        base: {
          local: {
            humanReadable: "1300 86 04 54",
            number: "1300860454",
          },
          international: {
            humanReadable: "+61 3 8593 4859",
            number: "+61385934859",
          },
          default: "international",
        },
      },
    },
  ],
  lebusinesstraveller: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      types: {
        base: {
          local: {
            humanReadable: "1300 962 509",
            number: "1300962509",
          },
          international: {
            humanReadable: "+61 3 7032 4242",
            number: "+61370324242",
          },
          default: "international",
        },
      },
    },
  ],
};
