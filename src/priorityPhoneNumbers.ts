export interface PriorityPhoneNumber {
  code: string;
  name: string;
  lang: string;
  phonePrefix: string;
  phone: {
    local: {
      humanReadable: string
      number: string,
    },
    international: {
      humanReadable: string
      number: string,
    },
    default: string,
  };
}

interface BrandPriorityPhoneNumber {
  [brand: string]: PriorityPhoneNumber[];
}

export const priorityPhoneNumbers: BrandPriorityPhoneNumber = {
  luxuryescapes: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      phone: {
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
  ],
  scoopontravel: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      phone: {
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
  ],
  cudotravel: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      phone: {
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
  ],
  dealstravel: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      phone: {
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
  ],
  treatmetravel: [
    {
      code: "NZ",
      name: "New Zealand",
      lang: "en-NZ",
      phonePrefix: "64",
      phone: {
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
  ],
  kogantravel: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      phone: {
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
  ],
  leforwork: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      phone: {
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
  ],
};
