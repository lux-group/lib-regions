interface OfferUrgencyTag {
  tour: {
    popular: {
      min: number,
      period: number,
    },
  };
  hotel: {
    popular: {
      min: number,
      period: number,
    },
  };
}

export interface Region {
  code: string;
  name: string;
  lang: string;
  phonePrefix: string;
  currencyFormattingLocale: string;
  currencyCode: string;
  currencyPrefix: string;
  flagId?: string;
  flightsSupportEmail: string;
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
  mailingAddress: string;
  latitudeThreshold?: number;
  referralAmount: number;
  insuranceProductName: string;
  referralMinSpendAmount: number;
  giftCardOptions?: number[];
  offerUrgencyTag: OfferUrgencyTag | null;
}

interface BrandRegions {
  [brand: string]: Region[];
}

const DEFAULT_MAILING_ADDRESS = "Level 4, 68 Clarke Street, Southbank, VIC 3006, Australia";
const SINGAPORE_MAILING_ADDRESS = "168 Robinson Road, #12-01 Capital Tower, Singapore 068912";
const DEFAULT_FLIGHTS_SUPPORT_EMAIL = "flights@luxuryescapes.com";

export const regions: BrandRegions = {
  luxuryescapes: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      currencyFormattingLocale: "en-AU",
      currencyCode: "AUD",
      currencyPrefix: "A",
      flagId: "au_iuox02",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "1300 88 99 00",
          number: "1300889900",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      latitudeThreshold: 999,
      referralAmount: 50,
      insuranceProductName: "insurance",
      referralMinSpendAmount: 499,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000, 4000, 5000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 10,
            period: 24,
          },
        },
      },
    },
    {
      code: "CA",
      name: "Canada",
      lang: "en-CA",
      phonePrefix: "1",
      currencyFormattingLocale: "en-CA",
      currencyCode: "CAD",
      currencyPrefix: "CA",
      flagId: "ca_nacvxi",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "778 300 0814",
          number: "7783000814",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "protection",
      referralMinSpendAmount: 499,
      giftCardOptions: [50, 100, 250, 500, 1000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "CN",
      name: "China",
      lang: "en-CN",
      phonePrefix: "86",
      currencyFormattingLocale: "zh-CN",
      currencyCode: "CNY",
      currencyPrefix: "",
      flagId: "cn_nnripn",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "800 597 138",
          number: "800597138",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 240,
      insuranceProductName: "protection",
      referralMinSpendAmount: 2399,
      giftCardOptions: [250, 500, 1000, 2500, 5000, 10000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "FR",
      name: "France",
      lang: "en-FR",
      phonePrefix: "33",
      currencyFormattingLocale: "fr-FR",
      currencyCode: "EUR",
      currencyPrefix: "",
      flagId: "fr_ch1vgi",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "0805 08 42 02",
          number: "0805084202",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 30,
      insuranceProductName: "protection",
      referralMinSpendAmount: 299,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "DE",
      name: "Germany",
      lang: "en-DE",
      phonePrefix: "49",
      currencyFormattingLocale: "de-DE",
      currencyCode: "EUR",
      currencyPrefix: "",
      flagId: "de_wj4y6k",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "0211 38789806",
          number: "021138789806",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 30,
      insuranceProductName: "protection",
      referralMinSpendAmount: 299,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "HK",
      name: "Hong Kong",
      lang: "en-HK",
      phonePrefix: "852",
      currencyFormattingLocale: "en-HK",
      currencyCode: "HKD",
      currencyPrefix: "",
      flagId: "hk_wjyavc",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "3018 8509",
          number: "30188509",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: SINGAPORE_MAILING_ADDRESS,
      referralAmount: 300,
      insuranceProductName: "protection",
      referralMinSpendAmount: 2999,
      giftCardOptions: [250, 500, 1250, 2500, 5000, 10000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "IN",
      name: "India",
      lang: "en-IN",
      phonePrefix: "91",
      currencyFormattingLocale: "en-IN",
      currencyCode: "INR",
      currencyPrefix: "",
      flagId: "in_opf3wm",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "1800 258 7282",
          number: "18002587282",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "local",
      },
      mailingAddress: SINGAPORE_MAILING_ADDRESS,
      referralAmount: 2500,
      insuranceProductName: "protection",
      referralMinSpendAmount: 24999,
      giftCardOptions: [2500, 5000, 12500, 25000, 50000, 100000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "ID",
      name: "Indonesia",
      lang: "en-ID",
      phonePrefix: "62",
      currencyFormattingLocale: "id-ID",
      currencyCode: "IDR",
      currencyPrefix: "",
      flagId: "id_yveumv",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "007 803 321 8413",
          number: "0078033218413",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 500000,
      insuranceProductName: "protection",
      referralMinSpendAmount: 4999999,
      giftCardOptions: [500000, 1000000, 2500000, 5000000, 10000000, 20000000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "IE",
      name: "Ireland",
      lang: "en-IE",
      phonePrefix: "353",
      currencyFormattingLocale: "en-IE",
      currencyCode: "EUR",
      currencyPrefix: "",
      flagId: "ie_kqc7pg",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "+61 2 8046 1120",
          number: "+61280461120",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 30,
      insuranceProductName: "protection",
      referralMinSpendAmount: 299,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "IL",
      name: "Israel",
      lang: "en-IL",
      phonePrefix: "972",
      currencyFormattingLocale: "iw-IL",
      currencyCode: "ILS",
      currencyPrefix: "",
      flagId: "il_x5duyz",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "+61 2 8046 1120",
          number: "+61280461120",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 130,
      insuranceProductName: "protection",
      referralMinSpendAmount: 1299,
      giftCardOptions: [150, 300, 500, 1000, 2500, 3000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "IT",
      name: "Italy",
      lang: "en-IT",
      phonePrefix: "39",
      currencyFormattingLocale: "it-IT",
      currencyCode: "EUR",
      currencyPrefix: "",
      flagId: "it_yex5ap",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "+61 2 8046 1120",
          number: "+61280461120",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 30,
      insuranceProductName: "protection",
      referralMinSpendAmount: 299,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "JP",
      name: "Japan",
      lang: "en-JP",
      phonePrefix: "81",
      currencyFormattingLocale: "ja-JP",
      currencyCode: "JPY",
      currencyPrefix: "",
      flagId: "jp_m6elxg",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 4000,
      insuranceProductName: "protection",
      referralMinSpendAmount: 39999,
      giftCardOptions: [2500, 5000, 15000, 50000, 75000, 150000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "KR",
      name: "Korea",
      lang: "en-KR",
      phonePrefix: "82",
      currencyFormattingLocale: "ko-KR",
      currencyCode: "KRW",
      currencyPrefix: "",
      flagId: "kr_mrnua8",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "+61 2 8046 1120",
          number: "+61280461120",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 40000,
      insuranceProductName: "protection",
      referralMinSpendAmount: 399999,
      giftCardOptions: [25000, 50000, 200000, 500000, 750000, 1500000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "MO",
      name: "Macau",
      lang: "en-MO",
      phonePrefix: "853",
      currencyFormattingLocale: "en-MO",
      currencyCode: "MOP",
      currencyPrefix: "",
      flagId: "mo_k6c6by",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 300,
      insuranceProductName: "protection",
      referralMinSpendAmount: 2999,
      giftCardOptions: [250, 500, 1250, 2500, 5000, 10000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "MY",
      name: "Malaysia",
      lang: "en-MY",
      phonePrefix: "60",
      currencyFormattingLocale: "ms-MY",
      currencyCode: "MYR",
      currencyPrefix: "",
      flagId: "my_zzejgo",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "03 9212 7293",
          number: "0392127293",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 150,
      insuranceProductName: "protection",
      referralMinSpendAmount: 1499,
      giftCardOptions: [150, 300, 500, 1500, 3000, 5000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "NZ",
      name: "New Zealand",
      lang: "en-NZ",
      phonePrefix: "64",
      currencyFormattingLocale: "en-NZ",
      currencyCode: "NZD",
      currencyPrefix: "NZ",
      flagId: "nz_o98shy",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "0800 441 457",
          number: "0800441457",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "protection",
      referralMinSpendAmount: 499,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "PH",
      name: "Philippines",
      lang: "en-PH",
      phonePrefix: "63",
      currencyFormattingLocale: "en-PH",
      currencyCode: "PHP",
      currencyPrefix: "",
      flagId: "ph_cmq6es",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "1800 1320 0074",
          number: "180013200074",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 2000,
      insuranceProductName: "protection",
      referralMinSpendAmount: 19999,
      giftCardOptions: [1500, 3000, 5000, 10000, 25000, 50000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "QA",
      name: "Qatar",
      lang: "en-QA",
      phonePrefix: "974",
      currencyFormattingLocale: "en-QA",
      currencyCode: "QAR",
      currencyPrefix: "",
      flagId: "qa_zt7eo8",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 130,
      insuranceProductName: "protection",
      referralMinSpendAmount: 1299,
      giftCardOptions: [150, 300, 500, 1000, 2500, 3000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "RU",
      name: "Russia",
      lang: "en-RU",
      phonePrefix: "7",
      currencyFormattingLocale: "en-RU",
      currencyCode: "RUB",
      currencyPrefix: "",
      flagId: "ru_szpk5m",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 2500,
      insuranceProductName: "protection",
      referralMinSpendAmount: 24999,
      giftCardOptions: [2000, 5000, 10000, 15000, 20000, 50000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "SA",
      name: "Saudi Arabia",
      lang: "en-SA",
      phonePrefix: "966",
      currencyFormattingLocale: "en-SA",
      currencyCode: "SAR",
      currencyPrefix: "",
      flagId: "sa_evxi8g",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 130,
      insuranceProductName: "protection",
      referralMinSpendAmount: 1299,
      giftCardOptions: [150, 300, 500, 1000, 2500, 3000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "SG",
      name: "Singapore",
      lang: "en-SG",
      phonePrefix: "65",
      currencyFormattingLocale: "en-SG",
      currencyCode: "SGD",
      currencyPrefix: "S",
      flagId: "sg_qrenqc",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "800 492 2237",
          number: "8004922237",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: SINGAPORE_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "protection",
      referralMinSpendAmount: 499,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "ZA",
      name: "South Africa",
      lang: "en-ZA",
      phonePrefix: "27",
      currencyFormattingLocale: "af-ZA",
      currencyCode: "ZAR",
      currencyPrefix: "",
      flagId: "za_rhuusv",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 500,
      insuranceProductName: "protection",
      referralMinSpendAmount: 4999,
      giftCardOptions: [500, 1000, 2500, 5000, 10000, 50000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "ES",
      name: "Spain",
      lang: "en-ES",
      phonePrefix: "34",
      currencyFormattingLocale: "es-ES",
      currencyCode: "EUR",
      currencyPrefix: "",
      flagId: "es_wxszqg",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "911 230 742",
          number: "911230742",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 30,
      insuranceProductName: "protection",
      referralMinSpendAmount: 299,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "TW",
      name: "Taiwan",
      lang: "en-TW",
      phonePrefix: "886",
      currencyFormattingLocale: "zh-TW",
      currencyCode: "TWD",
      currencyPrefix: "NT",
      flagId: "tw_a9lqx6",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 1000,
      insuranceProductName: "protection",
      referralMinSpendAmount: 19999,
      giftCardOptions: [1000, 2000, 5000, 10000, 20000, 40000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "TH",
      name: "Thailand",
      lang: "en-TH",
      phonePrefix: "66",
      currencyFormattingLocale: "th-TH",
      currencyCode: "THB",
      currencyPrefix: "",
      flagId: "th_isrxzq",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "02 026 0685",
          number: "020260685",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 1000,
      insuranceProductName: "protection",
      referralMinSpendAmount: 9999,
      giftCardOptions: [1000, 2000, 5000, 10000, 20000, 40000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "AE",
      name: "United Arab Emirates",
      lang: "en-AE",
      phonePrefix: "971",
      currencyFormattingLocale: "en-AE",
      currencyCode: "AED",
      currencyPrefix: "",
      flagId: "ae_grfjya",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "800 035704409",
          number: "800035704409",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 130,
      insuranceProductName: "protection",
      referralMinSpendAmount: 1299,
      giftCardOptions: [150, 300, 500, 1000, 2500, 3000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "GB",
      name: "United Kingdom",
      lang: "en-GB",
      phonePrefix: "44",
      currencyFormattingLocale: "en-GB",
      currencyCode: "GBP",
      currencyPrefix: "",
      flagId: "gb_ta8bez",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "020 8068 2668",
          number: "02080682668",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 25,
      insuranceProductName: "protection",
      referralMinSpendAmount: 249,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "US",
      name: "United States",
      lang: "en-US",
      phonePrefix: "1",
      currencyFormattingLocale: "en-US",
      currencyCode: "USD",
      currencyPrefix: "US",
      flagId: "us_fapjn8",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "888 402 1238",
          number: "8884021238",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "protection",
      referralMinSpendAmount: 500,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
    {
      code: "VN",
      name: "Vietnam",
      lang: "en-VN",
      phonePrefix: "84",
      currencyFormattingLocale: "vi-VN",
      currencyCode: "VND",
      currencyPrefix: "",
      flagId: "vn_mixye2",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 800000,
      insuranceProductName: "protection",
      referralMinSpendAmount: 7999999,
      giftCardOptions: [500000, 1000000, 3000000, 5000000, 10000000, 20000000],
      offerUrgencyTag: {
        tour: {
          popular: {
            min: 2,
            period: 24,
          },
        },
        hotel: {
          popular: {
            min: 4,
            period: 24,
          },
        },
      },
    },
  ],
  scooponexperience: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      currencyFormattingLocale: "en-AU",
      currencyCode: "AUD",
      currencyPrefix: "",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "(02) 9051 1815",
          number: "(02)90511815",
        },
        international: {
          humanReadable: "+61 2 8311 3542",
          number: "+61283113542",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "insurance",
      referralMinSpendAmount: 499,
      offerUrgencyTag: null,
    },
  ],
  scoopontravel: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      currencyFormattingLocale: "en-AU",
      currencyCode: "AUD",
      currencyPrefix: "",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "(02) 9051 1815",
          number: "(02)90511815",
        },
        international: {
          humanReadable: "+61 2 8311 3542",
          number: "+61283113542",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "insurance",
      referralMinSpendAmount: 499,
      offerUrgencyTag: null,
    },
  ],
  cudotravel: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      currencyFormattingLocale: "en-AU",
      currencyCode: "AUD",
      currencyPrefix: "",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "1300 892 711",
          number: "1300892711",
        },
        international: {
          humanReadable: "+61 2 9051 1816",
          number: "+61290511816",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "insurance",
      referralMinSpendAmount: 499,
      offerUrgencyTag: null,
    },
  ],
  treatmetravel: [
    {
      code: "NZ",
      name: "New Zealand",
      lang: "en-NZ",
      phonePrefix: "64",
      currencyFormattingLocale: "en-NZ",
      currencyCode: "NZD",
      currencyPrefix: "",
      flagId: "nz_o98shy",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "09 222 4643",
          number: "092224643",
        },
        international: {
          humanReadable: "+64 9 222 4643",
          number: "+6492224643",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "protection",
      referralMinSpendAmount: 499,
      offerUrgencyTag: null,
    },
  ],
  dealstravel: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      currencyFormattingLocale: "en-AU",
      currencyCode: "AUD",
      currencyPrefix: "",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "1300 869 711",
          number: "1300869711",
        },
        international: {
          humanReadable: "+61 2 9051 1817",
          number: "+61290511817",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "insurance",
      referralMinSpendAmount: 499,
      offerUrgencyTag: null,
    },
  ],
  cudo: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      currencyFormattingLocale: "en-AU",
      currencyCode: "AUD",
      currencyPrefix: "",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "1300 892 711",
          number: "1300892711",
        },
        international: {
          humanReadable: "+61 2 9051 1816",
          number: "+61290511816",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "insurance",
      referralMinSpendAmount: 499,
      offerUrgencyTag: null,
    },
  ],
  deals: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      currencyFormattingLocale: "en-AU",
      currencyCode: "AUD",
      currencyPrefix: "",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "1300 869 711",
          number: "1300869711",
        },
        international: {
          humanReadable: "+61 2 9051 1817",
          number: "+61290511817",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "insurance",
      referralMinSpendAmount: 499,
      offerUrgencyTag: null,
    },
  ],
  treatme: [
    {
      code: "NZ",
      name: "New Zealand",
      lang: "en-NZ",
      phonePrefix: "64",
      currencyFormattingLocale: "en-NZ",
      currencyCode: "NZD",
      currencyPrefix: "",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "09 222 4643",
          number: "092224643",
        },
        international: {
          humanReadable: "+64 9 222 4643",
          number: "+6492224643",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "insurance",
      referralMinSpendAmount: 499,
      offerUrgencyTag: null,
    },
  ],
  led_admin: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      currencyFormattingLocale: "en-AU",
      currencyCode: "AUD",
      currencyPrefix: "",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "(02) 9051 1815",
          number: "(02)90511815",
        },
        international: {
          humanReadable: "+61 2 8311 3542",
          number: "+61283113542",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "insurance",
      referralMinSpendAmount: 499,
      offerUrgencyTag: null,
    },
    {
      code: "NZ",
      name: "New Zealand",
      lang: "en-NZ",
      phonePrefix: "64",
      currencyFormattingLocale: "en-NZ",
      currencyCode: "NZD",
      currencyPrefix: "",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "09 222 4643",
          number: "092224643",
        },
        international: {
          humanReadable: "+64 9 222 4643",
          number: "+6492224643",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "protection",
      referralMinSpendAmount: 499,
      offerUrgencyTag: null,
    },
  ],
  yidu: [
    {
      code: "CN",
      name: "China",
      lang: "en-CN",
      phonePrefix: "86",
      currencyFormattingLocale: "zh-CN",
      currencyCode: "CNY",
      currencyPrefix: "",
      flagId: "cn_nnripn",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "186 0113 2153",
          number: "18601132153",
        },
        international: {
          humanReadable: "+86 186 0113 2153",
          number: "+8618601132153",
        },
        default: "international",
      },
      mailingAddress: "No.363 Chang Ping Lu, ChangPing DaSha, 4th Floor, Room 102, Jing An district, Shanghai, China",
      referralAmount: 0,
      insuranceProductName: "protection",
      referralMinSpendAmount: 0,
      giftCardOptions: [],
      offerUrgencyTag: null,
    },
  ],
  zoomzoom: [
    {
      code: "KR",
      name: "Korea",
      lang: "en-KR",
      phonePrefix: "82",
      currencyFormattingLocale: "ko-KR",
      currencyCode: "KRW",
      currencyPrefix: "",
      flagId: "kr_mrnua8",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "+61 2 8387 99837",
          number: "+61283879983",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283879983",
        },
        default: "international",
      },
      mailingAddress: "Suite 55, 104 Bathurst Street, Sydney, NSW 2000 Australia",
      referralAmount: 0,
      insuranceProductName: "protection",
      referralMinSpendAmount: 0,
      giftCardOptions: [],
      offerUrgencyTag: null,
    },
    {
      code: "AU",
      name: "Australia",
      lang: "en-KR",
      phonePrefix: "82",
      currencyFormattingLocale: "en-AU",
      currencyCode: "AUD",
      currencyPrefix: "A",
      flagId: "au_iuox02",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      phone: {
        local: {
          humanReadable: "+61 2 8387 99837",
          number: "+61283879983",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283879983",
        },
        default: "international",
      },
      mailingAddress: "Suite 55, 104 Bathurst Street, Sydney, NSW 2000 Australia",
      referralAmount: 0,
      insuranceProductName: "insurance",
      referralMinSpendAmount: 0,
      giftCardOptions: [],
      offerUrgencyTag: null,
    },
  ],
};
