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
  marketedLos: number;
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
  /** @deprecated get referral data from the svc-promo directly */
  referralAmount: number;
  insuranceProductName: string;
  /** @deprecated get referral data from the svc-promo directly */
  referralMinSpendAmount: number;
  giftCardOptions?: number[];
  offerUrgencyTag: OfferUrgencyTag | null;
}

export const LUXURY_ESCAPES = "luxuryescapes";

export const BRANDS = [
  LUXURY_ESCAPES,
  "scooponexperience",
  "scoopontravel",
  "kogantravel",
  "lebusinesstraveller",
  "cudotravel",
  "treatmetravel",
  "dealstravel",
  "cudo",
  "deals",
  "treatme",
  "led_admin",
  "yidu",
  "zoomzoom",
  "newwhitelabel",
  "leagenthub",
] as const;

export type Brand = typeof BRANDS[number];

type BrandRegions = Record<typeof BRANDS[number], Region[]>;

const DEFAULT_MAILING_ADDRESS = "Level 4, 68 Clarke Street, Southbank, VIC 3006, Australia";
const SINGAPORE_MAILING_ADDRESS = "168 Robinson Road, #12-01 Capital Tower, Singapore 068912";
const DEFAULT_FLIGHTS_SUPPORT_EMAIL = "flights@luxuryescapes.com";
const DEFAULT_MARKETED_LOS = 3;

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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "1300 88 99 00",
          number: "1300889900",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      latitudeThreshold: 999,
      referralAmount: 50,
      insuranceProductName: "protection",
      referralMinSpendAmount: 499,
      giftCardOptions: [50, 100, 250, 500, 750, 1000, 2000, 4000, 4500],
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "888 841 8898",
          number: "8888418898",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "protection",
      referralMinSpendAmount: 499,
      giftCardOptions: [50, 100, 250, 500, 750, 1000],
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "400 842 8021",
          number: "4008428021",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "0800 907 498",
          number: "0800907498",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 30,
      insuranceProductName: "protection",
      referralMinSpendAmount: 299,
      giftCardOptions: [50, 100, 250, 500, 750, 1000, 2000],
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "0800 001 0786",
          number: "08000010786",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 30,
      insuranceProductName: "protection",
      referralMinSpendAmount: 299,
      giftCardOptions: [50, 100, 250, 500, 750, 1000, 2000],
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "3018 8509",
          number: "30188509",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "+91 803 783 5334",
          number: "+918037835334",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "03 7032 3337",
          number: "0370323337",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "1800 816 039",
          number: "1800816039",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 30,
      insuranceProductName: "protection",
      referralMinSpendAmount: 299,
      giftCardOptions: [50, 100, 250, 500, 750, 1000, 2000],
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "1809 510 015",
          number: "1809510015",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "800 684 328",
          number: "800684328",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 30,
      insuranceProductName: "protection",
      referralMinSpendAmount: 299,
      giftCardOptions: [50, 100, 250, 500, 750, 1000, 2000],
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "034 510 0114",
          number: "0345100114",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "07 98 8521 1567",
          number: "079885211567",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "6857 0524",
          number: "68570524",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "03 8689 8204",
          number: "0386898204",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      code: "NL",
      name: "Netherlands",
      lang: "en-NL",
      phonePrefix: "31",
      currencyFormattingLocale: "nl-NL",
      currencyCode: "EUR",
      currencyPrefix: "",
      flagId: "nl_h9g3ks",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "0800 2300300",
          number: "08002300300",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 30,
      insuranceProductName: "protection",
      referralMinSpendAmount: 299,
      giftCardOptions: [50, 100, 250, 500, 750, 1000, 2000],
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "0800 900 094",
          number: "0800900094",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "1800 1320 0244",
          number: "180013200244",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "00 800 101636",
          number: "00800101636",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "800 850 1445",
          number: "8008501445",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "6690 5451",
          number: "66905451",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "080 001 0712",
          number: "0800010712",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "900 75 17 84",
          number: "900751784",
        },
        international: {
          humanReadable: "900 75 17 84",
          number: "900751784",
        },
        default: "local",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 30,
      insuranceProductName: "protection",
      referralMinSpendAmount: 299,
      giftCardOptions: [50, 100, 250, 500, 750, 1000, 2000],
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "02 7703 4472",
          number: "0277034472",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "1800 014 168",
          number: "1800014168",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "800 0183 0572",
          number: "80001830572",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "0808 175 4987",
          number: "08081754987",
        },
        international: {
          humanReadable: "+44 20 3763 8046",
          number: "+442037638046",
        },
        default: "local",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 25,
      insuranceProductName: "protection",
      referralMinSpendAmount: 249,
      giftCardOptions: [50, 100, 250, 500, 750, 1000, 2000],
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "888 337 2083",
          number: "8883372083",
        },
        international: {
          humanReadable: "+1201 977 8523",
          number: "+12019778523",
        },
        default: "local",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "protection",
      referralMinSpendAmount: 500,
      giftCardOptions: [50, 100, 250, 500, 750, 1000, 2000],
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "1800 400 427",
          number: "1800400427",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
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
      marketedLos: DEFAULT_MARKETED_LOS,
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
      insuranceProductName: "protection",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "(02) 9051 1815",
          number: "(02)90511815",
        },
        international: {
          humanReadable: "+61 2 9051 1815",
          number: "+61290511815",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "protection",
      referralMinSpendAmount: 499,
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
      giftCardOptions: [20, 50, 100, 250, 500, 1000],
    },
  ],
  kogantravel: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      currencyFormattingLocale: "en-AU",
      currencyCode: "AUD",
      currencyPrefix: "",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "1300 517 210",
          number: "1300517210",
        },
        international: {
          humanReadable: "+61 3 7032 3416",
          number: "+61370323416",
        },
        default: "local",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "protection",
      referralMinSpendAmount: 499,
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
      giftCardOptions: [20, 50, 100, 250, 500, 1000],
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
      marketedLos: DEFAULT_MARKETED_LOS,
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
      insuranceProductName: "protection",
      referralMinSpendAmount: 499,
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
      giftCardOptions: [20, 50, 100, 250, 500, 1000],
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "0800 846 182",
          number: "0800846182",
        },
        international: {
          humanReadable: "+64 8 0084 6182",
          number: "+64800846182",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
      insuranceProductName: "protection",
      referralMinSpendAmount: 499,
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
      giftCardOptions: [20, 50, 100, 250, 500, 1000],
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
      marketedLos: DEFAULT_MARKETED_LOS,
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
      insuranceProductName: "protection",
      referralMinSpendAmount: 499,
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
      giftCardOptions: [20, 50, 100, 250, 500, 1000],
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
      marketedLos: DEFAULT_MARKETED_LOS,
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
      insuranceProductName: "protection",
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
      marketedLos: DEFAULT_MARKETED_LOS,
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
      insuranceProductName: "protection",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "0800 846 182",
          number: "0800846182",
        },
        international: {
          humanReadable: "+64 8 0084 6182",
          number: "+64800846182",
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
      marketedLos: DEFAULT_MARKETED_LOS,
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
      insuranceProductName: "protection",
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
      marketedLos: DEFAULT_MARKETED_LOS,
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "+61 3 7032 3480",
          number: "+61370323480",
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
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "07 98 8521 1567",
          number: "079885211567",
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
      marketedLos: DEFAULT_MARKETED_LOS,
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
  ],
  newwhitelabel: [
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
      marketedLos: DEFAULT_MARKETED_LOS,
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
      insuranceProductName: "protection",
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
  ],
  lebusinesstraveller : [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      currencyFormattingLocale: "en-AU",
      currencyCode: "AUD",
      currencyPrefix: "",
      flagId: "au_iuox02",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "1300 962 509",
          number: "1300962509",
        },
        international: {
          humanReadable: "+61 3 7032 4242",
          number: "+61370324242",
        },
        default: "local",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 0,
      insuranceProductName: "protection",
      referralMinSpendAmount: 0,
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
      giftCardOptions: [],
    },
  ],
  leagenthub : [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      currencyFormattingLocale: "en-AU",
      currencyCode: "AUD",
      currencyPrefix: "",
      flagId: "au_iuox02",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "1300 962 509",
          number: "1300962509",
        },
        international: {
          humanReadable: "+61 3 7032 4242",
          number: "+61370324242",
        },
        default: "local",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 0,
      insuranceProductName: "protection",
      referralMinSpendAmount: 0,
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
      giftCardOptions: [],
    },
  ],
};
