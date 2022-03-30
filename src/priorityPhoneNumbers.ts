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
};
