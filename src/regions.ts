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

type ContactType = "general" | "highValue" | "cruises" | "tours" | "toursPriority" | "ultralux" | "supportAssistant" | "supportAssistantSalesFlow" | "luxPlus" | "midValue" | "cancellationRetention" | "luxLoyalty";

interface PhoneNumber {
  humanReadable: string;
  number: string;
}

interface Contact {
  type: ContactType;
  local: PhoneNumber;
  international: PhoneNumber;
  default: string;
}

export interface Region {
  code: string;
  name: string;
  lang: string;
  phonePrefix: string;
  /** regexp to describe the valid phone number format for this region EXCLUDING international prefix numbers */
  phoneRegex?: RegExp;
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
  contacts: Contact[];
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

export const PHONE_REGEX: Record<string, RegExp> = {
  AU: /^[2-478]\d{8}$/,
  CA: /^(?:\([2-9]\d{2}\)|[2-9]\d{2})-?\s*[2-9]\d{2}-?\s*\d{4}$/,
  CN: /^1[3-9]\d{9}$/,
  FR: /^[67]\d{8}$/,
  DE: /^1(?:5[0-9]|6[0-9]|7[0-9])\d{7,8}$/,
  HK: /^[5-9]\d{7}$/,
  IN: /^[6-9]\d{9}$/,
  ID: /^8[1-9]\d{8,10}$/,
  IE: /^8\d{8}$/,
  IL: /^5[0-9]\d{7}$/,
  IT: /^3(?:[1-9])\d{8}$/,
  JP: /^(?:70|80|90)\d{8}$/,
  KR: /^(?:10)[0-9]{8}$/,
  MO: /^6\d{7}$/,
  MY: /^1\d{8,9}$/,
  NL: /^6\d{8}$/,
  NZ: /^2\d{7,9}$/,
  PH: /^9\d{9}$/,
  QA: /^[3567]\d{7}$/,
  RU: /^9\d{9}$/,
  SA: /^5\d{8}$/,
  SG: /^[689]\d{7}$/,
  ZA: /^\d{9}$/,
  ES: /^[67]\d{8}$/,
  TW: /^9\d{8}$/,
  TH: /^[689]\d{8}$/,
  AE: /^5\d{8}$/,
  GB: /^7(?:[1-9]\d{8})$/,
  US: /^(?:\([2-9]\d{2}\)|[2-9]\d{2})-?\s*[2-9]\d{2}-?\s*\d{4}$/,
  VN: /^(?:[35789])\d{8}$/,
};

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
      phoneRegex: PHONE_REGEX.AU,
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
      contacts: [
        {
          type: "general",
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
        {
          type: "highValue",
          local: {
            humanReadable: "1300 701 198",
            number: "1300701198",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "midValue",
          local: {
            humanReadable: "1300 941 887",
            number: "1300941887",
          },
          international: {
            humanReadable: "+61 2 8317 2477",
            number: "+61283172477",
          },
          default: "local",
        },
        {
          type: "tours",
          local: {
            humanReadable: "1300 670 243",
            number: "1300670243",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "toursPriority",
          local: {
            humanReadable: "1300 438 140",
            number: "1300438140",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "cruises",
          local: {
            humanReadable: "1300 820 853",
            number: "1300820853",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "ultralux",
          local: {
            humanReadable: "1300 86 04 54",
            number: "1300860454",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "supportAssistant",
          local: {
            humanReadable: "1300 489 055",
            number: "1300489055",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "supportAssistantSalesFlow",
          local: {
            humanReadable: "1300 789 419",
            number: "1300789419",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "luxPlus",
          local: {
            humanReadable: "1300 860 445",
            number: "1300860445",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "cancellationRetention",
          local: {
            humanReadable: "1300 739 349",
            number: "1300739349",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "luxLoyalty",
          local: {
            humanReadable: "1300 860 445",
            number: "1300860445",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
      ],
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
      phoneRegex: PHONE_REGEX.CA,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.CN,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.FR,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.DE,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.HK,
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
      contacts: [
        {
          type: "general",
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
        {
          type: "luxPlus",
          local: {
            humanReadable: "3018 8575",
            number: "30188575",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
      ],
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
      phoneRegex: PHONE_REGEX.IN,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.ID,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.IE,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.IL,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.IT,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.JP,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.KR,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.MO,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.MY,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.NL,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.NZ,
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
      contacts: [
        {
          type: "general",
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
        {
          type: "highValue",
          local: {
            humanReadable: "0800 856 497",
            number: "0800856497",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "luxPlus",
          local: {
            humanReadable: "0800 130 004",
            number: "0800130004",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "supportAssistantSalesFlow",
          local: {
            humanReadable: "0800 215 037",
            number: "0800215037",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "cancellationRetention",
          local: {
            humanReadable: "0800 130 064",
            number: "0800130064",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "toursPriority",
          local: {
            humanReadable: "0800 234 011",
            number: "0800234011",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
      ],
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
      phoneRegex: PHONE_REGEX.PH,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.QA,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.RU,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.SA,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.SG,
      currencyFormattingLocale: "en-SG",
      currencyCode: "SGD",
      currencyPrefix: "S",
      flagId: "sg_qrenqc",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "+65 6690 5451",
          number: "+6566905451",
        },
        international: {
          humanReadable: "+61 3 7032 3381",
          number: "+61370323381",
        },
        default: "local",
      },
      contacts: [
        {
          type: "general",
          local: {
            humanReadable: "+65 6690 5451",
            number: "+6566905451",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "luxPlus",
          local: {
            humanReadable: "+65 6690 5682",
            number: "+6566905682",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
      ],
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
      phoneRegex: PHONE_REGEX.ZA,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.ES,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.TW,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.TH,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.AE,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.GB,
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
      contacts: [
        {
          type: "general",
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
        {
          type: "highValue",
          local: {
            humanReadable: "0808 304 4066",
            number: "08083044066",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "cancellationRetention",
          local: {
            humanReadable: "0800 680 0085",
            number: "08006800085",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "luxPlus",
          local: {
            humanReadable: "08000 239 156",
            number: "08000239156",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "toursPriority",
          local: {
            humanReadable: "0808 189 3215",
            number: "08081893215",
          },
          international: {
            humanReadable: "+44 20 3763 8046",
            number: "+442037638046",
          },
          default: "local",
        },
      ],
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
      phoneRegex: PHONE_REGEX.US,
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
      contacts: [
        {
          type: "general",
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
        {
          type: "highValue",
          local: {
            humanReadable: "888 583 5444",
            number: "8885835444",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "cancellationRetention",
          local: {
            humanReadable: "888 300 2414",
            number: "8883002414",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "luxPlus",
          local: {
            humanReadable: "888 243 2076",
            number: "8882432076",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
        {
          type: "toursPriority",
          local: {
            humanReadable: "888 434 3635",
            number: "8884343635",
          },
          international: {
            humanReadable: "+1201 977 8523",
            number: "+12019778523",
          },
          default: "local",
        },
      ],
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
      phoneRegex: PHONE_REGEX.VN,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.AU,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.AU,
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
      contacts: [
        {
          type: "general",
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
        {
          type: "highValue",
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
      ],
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
      phoneRegex: PHONE_REGEX.AU,
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
      contacts: [
        {
          type: "general",
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
        {
          type: "highValue",
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
      ],
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
      phoneRegex: PHONE_REGEX.AU,
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
      contacts: [
        {
          type: "general",
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
        {
          type: "highValue",
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
      ],
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
      phoneRegex: PHONE_REGEX.NZ,
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
      contacts: [
        {
          type: "general",
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
        {
          type: "highValue",
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
      ],
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
      phoneRegex: PHONE_REGEX.AU,
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
      contacts: [
        {
          type: "general",
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
        {
          type: "highValue",
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
      ],
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
      phoneRegex: PHONE_REGEX.AU,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.AU,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.NZ,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.AU,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.CN,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.KR,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.AU,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.AU,
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
      contacts: [
        {
          type: "general",
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
      ],
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
      phoneRegex: PHONE_REGEX.AU,
      currencyFormattingLocale: "en-AU",
      currencyCode: "AUD",
      currencyPrefix: "",
      flagId: "au_iuox02",
      flightsSupportEmail: DEFAULT_FLIGHTS_SUPPORT_EMAIL,
      marketedLos: DEFAULT_MARKETED_LOS,
      phone: {
        local: {
          humanReadable: "+61 3 7032 3441",
          number: "+61370323441",
        },
        international: {
          humanReadable: "+61 3 7032 3441",
          number: "+61370323441",
        },
        default: "local",
      },
      contacts: [
        {
          type: "general",
          local: {
            humanReadable: "+61 3 7032 3441",
            number: "+61370323441",
          },
          international: {
            humanReadable: "+61 3 7032 3441",
            number: "+61370323441",
          },
          default: "local",
        },
      ],
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
          humanReadable: "+61 3 7032 3441",
          number: "+61370323441",
        },
        international: {
          humanReadable: "+61 3 7032 3441",
          number: "+61370323441",
        },
        default: "local",
      },
      contacts: [
        {
          type: "general",
          local: {
            humanReadable: "+61 3 7032 3441",
            number: "+61370323441",
          },
          international: {
            humanReadable: "+61 3 7032 3441",
            number: "+61370323441",
          },
          default: "local",
        },
      ],
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
      contacts: [
        {
          type: "general",
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
        {
          type: "highValue",
          local: {
            humanReadable: "0808 304 4066",
            number: "08083044066",
          },
          international: {
            humanReadable: "+61 3 7032 3381",
            number: "+61370323381",
          },
          default: "local",
        },
      ],
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
  ],
};
