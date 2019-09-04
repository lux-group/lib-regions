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
  flagId?: string;
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
  referralMinSpendAmount: number;
  giftCardOptions?: number[];
  offerUrgencyTag: OfferUrgencyTag | null;
}

interface BrandRegions {
  [brand: string]: Region[];
}

const DEFAULT_MAILING_ADDRESS = "Level 1, 50-56 York St, South Melbourne, VIC 3205, AUSTRALIA";
const SINGAPORE_MAILING_ADDRESS = "168 Robinson Road, #12-01 Capital Tower, Singapore 068912";

export const regions: BrandRegions = {
  luxuryescapes: [
    {
      code: "AU",
      name: "Australia",
      lang: "en-AU",
      phonePrefix: "61",
      currencyFormattingLocale: "en-AU",
      currencyCode: "AUD",
      flagId: "au_iuox02",
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
      flagId: "ca_nacvxi",
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
      referralAmount: 100,
      referralMinSpendAmount: 499,
      giftCardOptions: [50, 100, 250, 500, 1000],
      offerUrgencyTag: null,
    },
    {
      code: "CN",
      name: "China",
      lang: "en-CN",
      phonePrefix: "86",
      currencyFormattingLocale: "zh-CN",
      currencyCode: "CNY",
      flagId: "cn_nnripn",
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
      referralMinSpendAmount: 2399,
      giftCardOptions: [250, 500, 1000, 2500, 5000, 10000],
      offerUrgencyTag: null,
    },
    {
      code: "FR",
      name: "France",
      lang: "en-FR",
      phonePrefix: "33",
      currencyFormattingLocale: "fr-FR",
      currencyCode: "EUR",
      flagId: "fr_ch1vgi",
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
      referralMinSpendAmount: 299,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: null,
    },
    {
      code: "DE",
      name: "Germany",
      lang: "en-DE",
      phonePrefix: "49",
      currencyFormattingLocale: "de-DE",
      currencyCode: "EUR",
      flagId: "de_wj4y6k",
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
      referralMinSpendAmount: 299,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: null,
    },
    {
      code: "HK",
      name: "Hong Kong",
      lang: "en-HK",
      phonePrefix: "852",
      currencyFormattingLocale: "en-HK",
      currencyCode: "HKD",
      flagId: "hk_wjyavc",
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
      referralMinSpendAmount: 2999,
      giftCardOptions: [250, 500, 1250, 2500, 5000, 10000],
      offerUrgencyTag: null,
    },
    {
      code: "IN",
      name: "India",
      lang: "en-IN",
      phonePrefix: "91",
      currencyFormattingLocale: "en-IN",
      currencyCode: "INR",
      flagId: "in_opf3wm",
      phone: {
        local: {
          humanReadable: "1800 1200 336",
          number: "18001200336",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "local",
      },
      mailingAddress: SINGAPORE_MAILING_ADDRESS,
      referralAmount: 2500,
      referralMinSpendAmount: 24999,
      giftCardOptions: [2500, 5000, 12500, 25000, 50000, 100000],
      offerUrgencyTag: null,
    },
    {
      code: "ID",
      name: "Indonesia",
      lang: "en-ID",
      phonePrefix: "62",
      currencyFormattingLocale: "id-ID",
      currencyCode: "IDR",
      flagId: "id_yveumv",
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
      referralMinSpendAmount: 4999999,
      giftCardOptions: [500000, 1000000, 2500000, 5000000, 10000000, 20000000],
      offerUrgencyTag: null,
    },
    {
      code: "IE",
      name: "Ireland",
      lang: "en-IE",
      phonePrefix: "353",
      currencyFormattingLocale: "en-IE",
      currencyCode: "EUR",
      flagId: "ie_kqc7pg",
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
      referralAmount: 30,
      referralMinSpendAmount: 299,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: null,
    },
    {
      code: "IL",
      name: "Israel",
      lang: "en-IL",
      phonePrefix: "972",
      currencyFormattingLocale: "iw-IL",
      currencyCode: "ILS",
      flagId: "il_x5duyz",
      phone: {
        local: {
          humanReadable: "1 801 227 262",
          number: "1801227262",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 130,
      referralMinSpendAmount: 1299,
      giftCardOptions: [150, 300, 500, 1000, 2500, 3000],
      offerUrgencyTag: null,
    },
    {
      code: "IT",
      name: "Italy",
      lang: "en-IT",
      phonePrefix: "39",
      currencyFormattingLocale: "it-IT",
      currencyCode: "EUR",
      flagId: "it_yex5ap",
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
      referralAmount: 30,
      referralMinSpendAmount: 299,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: null,
    },
    {
      code: "JP",
      name: "Japan",
      lang: "en-JP",
      phonePrefix: "81",
      currencyFormattingLocale: "ja-JP",
      currencyCode: "JPY",
      flagId: "jp_m6elxg",
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
      referralMinSpendAmount: 39999,
      giftCardOptions: [2500, 5000, 15000, 50000, 75000, 150000],
      offerUrgencyTag: null,
    },
    {
      code: "KR",
      name: "Korea",
      lang: "en-KR",
      phonePrefix: "82",
      currencyFormattingLocale: "ko-KR",
      currencyCode: "KRW",
      flagId: "kr_mrnua8",
      phone: {
        local: {
          humanReadable: "0808 220 277",
          number: "0808220277",
        },
        international: {
          humanReadable: "+61 2 8320 6845",
          number: "+61283206845",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 40000,
      referralMinSpendAmount: 399999,
      giftCardOptions: [25000, 50000, 200000, 500000, 750000, 1500000],
      offerUrgencyTag: null,
    },
    {
      code: "MO",
      name: "Macau",
      lang: "en-MO",
      phonePrefix: "853",
      currencyFormattingLocale: "en-MO",
      currencyCode: "MOP",
      flagId: "mo_k6c6by",
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
      referralMinSpendAmount: 2999,
      giftCardOptions: [250, 500, 1250, 2500, 5000, 10000],
      offerUrgencyTag: null,
    },
    {
      code: "MY",
      name: "Malaysia",
      lang: "en-MY",
      phonePrefix: "60",
      currencyFormattingLocale: "ms-MY",
      currencyCode: "MYR",
      flagId: "my_zzejgo",
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
      referralMinSpendAmount: 1499,
      giftCardOptions: [150, 300, 500, 1500, 3000, 5000],
      offerUrgencyTag: null,
    },
    {
      code: "NZ",
      name: "New Zealand",
      lang: "en-NZ",
      phonePrefix: "64",
      currencyFormattingLocale: "en-NZ",
      currencyCode: "NZD",
      flagId: "nz_o98shy",
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
      referralMinSpendAmount: 499,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: null,
    },
    {
      code: "PH",
      name: "Philippines",
      lang: "en-PH",
      phonePrefix: "63",
      currencyFormattingLocale: "en-PH",
      currencyCode: "PHP",
      flagId: "ph_cmq6es",
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
      referralMinSpendAmount: 19999,
      giftCardOptions: [1500, 3000, 5000, 10000, 25000, 50000],
      offerUrgencyTag: null,
    },
    {
      code: "QA",
      name: "Qatar",
      lang: "en-QA",
      phonePrefix: "974",
      currencyFormattingLocale: "en-QA",
      currencyCode: "QAR",
      flagId: "qa_zt7eo8",
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
      referralMinSpendAmount: 1299,
      giftCardOptions: [150, 300, 500, 1000, 2500, 3000],
      offerUrgencyTag: null,
    },
    {
      code: "RU",
      name: "Russia",
      lang: "en-RU",
      phonePrefix: "7",
      currencyFormattingLocale: "en-RU",
      currencyCode: "RUB",
      flagId: "ru_szpk5m",
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
      referralMinSpendAmount: 24999,
      giftCardOptions: [2000, 5000, 10000, 15000, 20000, 50000],
      offerUrgencyTag: null,
    },
    {
      code: "SA",
      name: "Saudi Arabia",
      lang: "en-SA",
      phonePrefix: "966",
      currencyFormattingLocale: "en-SA",
      currencyCode: "SAR",
      flagId: "sa_evxi8g",
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
      referralMinSpendAmount: 1299,
      giftCardOptions: [150, 300, 500, 1000, 2500, 3000],
      offerUrgencyTag: null,
    },
    {
      code: "SG",
      name: "Singapore",
      lang: "en-SG",
      phonePrefix: "65",
      currencyFormattingLocale: "en-SG",
      currencyCode: "SGD",
      flagId: "sg_qrenqc",
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
      referralMinSpendAmount: 499,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: null,
    },
    {
      code: "ZA",
      name: "South Africa",
      lang: "en-ZA",
      phonePrefix: "27",
      currencyFormattingLocale: "af-ZA",
      currencyCode: "ZAR",
      flagId: "za_rhuusv",
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
      referralMinSpendAmount: 4999,
      giftCardOptions: [500, 1000, 2500, 5000, 10000, 50000],
      offerUrgencyTag: null,
    },
    {
      code: "ES",
      name: "Spain",
      lang: "en-ES",
      phonePrefix: "34",
      currencyFormattingLocale: "es-ES",
      currencyCode: "EUR",
      flagId: "es_wxszqg",
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
      referralMinSpendAmount: 299,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: null,
    },
    {
      code: "TW",
      name: "Taiwan",
      lang: "en-TW",
      phonePrefix: "886",
      currencyFormattingLocale: "zh-TW",
      currencyCode: "TWD",
      flagId: "tw_a9lqx6",
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
      referralMinSpendAmount: 19999,
      giftCardOptions: [1000, 2000, 5000, 10000, 20000, 40000],
      offerUrgencyTag: null,
    },
    {
      code: "TH",
      name: "Thailand",
      lang: "en-TH",
      phonePrefix: "66",
      currencyFormattingLocale: "th-TH",
      currencyCode: "THB",
      flagId: "th_isrxzq",
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
      referralMinSpendAmount: 9999,
      giftCardOptions: [1000, 2000, 5000, 10000, 20000, 40000],
      offerUrgencyTag: null,
    },
    {
      code: "AE",
      name: "United Arab Emirates",
      lang: "en-AE",
      phonePrefix: "971",
      currencyFormattingLocale: "en-AE",
      currencyCode: "AED",
      flagId: "ae_grfjya",
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
      referralMinSpendAmount: 1299,
      giftCardOptions: [150, 300, 500, 1000, 2500, 3000],
      offerUrgencyTag: null,
    },
    {
      code: "GB",
      name: "United Kingdom",
      lang: "en-GB",
      phonePrefix: "44",
      currencyFormattingLocale: "en-GB",
      currencyCode: "GBP",
      flagId: "gb_ta8bez",
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
      referralMinSpendAmount: 249,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: null,
    },
    {
      code: "US",
      name: "United States",
      lang: "en-US",
      phonePrefix: "1",
      currencyFormattingLocale: "en-US",
      currencyCode: "USD",
      flagId: "us_fapjn8",
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
      referralAmount: 100,
      referralMinSpendAmount: 349,
      giftCardOptions: [50, 100, 250, 500, 1000, 2000],
      offerUrgencyTag: null,
    },
    {
      code: "VN",
      name: "Vietnam",
      lang: "en-VN",
      phonePrefix: "84",
      currencyFormattingLocale: "vi-VN",
      currencyCode: "VND",
      flagId: "vn_mixye2",
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
      referralMinSpendAmount: 7999999,
      giftCardOptions: [500000, 1000000, 3000000, 5000000, 10000000, 20000000],
      offerUrgencyTag: null,
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
      phone: {
        local: {
          humanReadable: "1300 72 66 76",
          number: "1300726676",
        },
        international: {
          humanReadable: "+61 2 8311 3542",
          number: "+61283113542",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
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
      phone: {
        local: {
          humanReadable: "1300 72 66 76",
          number: "1300726676",
        },
        international: {
          humanReadable: "+61 2 8311 3542",
          number: "+61283113542",
        },
        default: "international",
      },
      mailingAddress: DEFAULT_MAILING_ADDRESS,
      referralAmount: 50,
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
      flagId: "nz_o98shy",
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
      referralMinSpendAmount: 499,
      offerUrgencyTag: null,
    },
  ],
};
