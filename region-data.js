var DEFAULT_MAILING_ADDRESS = 'Level 1, 50-56 York St, South Melbourne, VIC 3205, AUSTRALIA'
var SINGAPORE_MAILING_ADDRESS = '168 Robinson Road, #12-01 Capital Tower, Singapore 068912'
var flights = require('./lib/flights')

module.exports = {
  luxuryescapes: [
    {
      code: 'AU',
      name: 'Australia',
      lang: 'en-AU',
      phone_prefix: '61',
      currency_formatting_locale: 'en-AU',
      currency_code: 'AUD',
      flag_id: 'au_iuox02',
      phone: {
        local: {
          human_readable: '1300 88 99 00',
          number: '1300889900',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      latitude_threshold: 999,
      flights: {
        departure_ports: flights.getRegionDeparturePorts('AU'),
        destination_ports: flights.getRegionDestinationPorts('AU'),
        main_port: flights.getFlightMainPort('AU')
      },
      referral_amount: '50',
      referral_min_spend_amount: '499',
      gift_card_options: [50, 100, 250, 500, 1000, 2000, 4000, 5000],
    },
    {
      code: 'CA',
      name: 'Canada',
      lang: 'en-CA',
      phone_prefix: '1',
      currency_formatting_locale: 'en-CA',
      currency_code: 'CAD',
      flag_id: 'ca_nacvxi',
      phone: {
        local: {
          human_readable: '778 300 0814',
          number: '7783000814',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '50',
      referral_min_spend_amount: '499',
      gift_card_options: [50, 100, 250, 500, 1000],
    },
    {
      code: 'CN',
      name: 'China',
      lang: 'en-CN',
      phone_prefix: '86',
      currency_formatting_locale: 'zh-CN',
      currency_code: 'CNY',
      flag_id: 'cn_nnripn',
      phone: {
        local: {
          human_readable: '800 597 138',
          number: '800597138',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '240',
      referral_min_spend_amount: '2399',
      gift_card_options: [250, 500,	1000,	2500, 5000, 10000],
    },
    {
      code: 'FR',
      name: 'France',
      lang: 'en-FR',
      phone_prefix: '33',
      currency_formatting_locale: 'fr-FR',
      currency_code: 'EUR',
      flag_id: 'fr_ch1vgi',
      phone: {
        local: {
          human_readable: '0805 08 42 02',
          number: '0805084202',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '30',
      referral_min_spend_amount: '299',
      gift_card_options: [50, 100, 250, 500, 1000, 2000],
    },
    {
      code: 'DE',
      name: 'Germany',
      lang: 'en-DE',
      phone_prefix: '49',
      currency_formatting_locale: 'de-DE',
      currency_code: 'EUR',
      flag_id: 'de_wj4y6k',
      phone: {
        local: {
          human_readable: '0211 38789806',
          number: '021138789806',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '30',
      referral_min_spend_amount: '299',
      gift_card_options: [50, 100, 250, 500, 1000, 2000],
    },
    {
      code: 'HK',
      name: 'Hong Kong',
      lang: 'en-HK',
      phone_prefix: '852',
      currency_formatting_locale: 'en-HK',
      currency_code: 'HKD',
      flag_id: 'hk_wjyavc',
      phone: {
        local: {
          human_readable: '3018 8509',
          number: '30188509',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: SINGAPORE_MAILING_ADDRESS,
      referral_amount: '300',
      referral_min_spend_amount: '2999',
      gift_card_options: [250, 500,	1250,	2500,	5000,	10000],
    },
    {
      code: 'IN',
      name: 'India',
      lang: 'en-IN',
      phone_prefix: '91',
      currency_formatting_locale: 'en-IN',
      currency_code: 'INR',
      flag_id: 'in_opf3wm',
      phone: {
        local: {
          human_readable: '1800 1200 336',
          number: '18001200336',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'local',
      },
      mailing_address: SINGAPORE_MAILING_ADDRESS,
      referral_amount: '2500',
      referral_min_spend_amount: '24999',
      gift_card_options: [2500,	5000,	12500, 25000, 50000,	100000],
    },
    {
      code: 'ID',
      name: 'Indonesia',
      lang: 'en-ID',
      phone_prefix: '62',
      currency_formatting_locale: 'id-ID',
      currency_code: 'IDR',
      flag_id: 'id_yveumv',
      phone: {
        local: {
          human_readable: '007 803 321 8413',
          number: '0078033218413',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '500000',
      referral_min_spend_amount: '4999999',
      gift_card_options:[500000,	1000000,	2500000,	5000000,	10000000,	20000000],
    },
    {
      code: 'IE',
      name: 'Ireland',
      lang: 'en-IE',
      phone_prefix: '353',
      currency_formatting_locale: 'en-IE',
      currency_code: 'EUR',
      flag_id: 'ie_kqc7pg',
      phone: {
        local: {
          human_readable: '1300 88 99 00',
          number: '1300889900',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '30',
      referral_min_spend_amount: '299',
      gift_card_options: [50, 100, 250, 500, 1000, 2000],
    },
    {
      code: 'IL',
      name: 'Israel',
      lang: 'en-IL',
      phone_prefix: '972',
      currency_formatting_locale: 'iw-IL',
      currency_code: 'ILS',
      flag_id: 'il_x5duyz',
      phone: {
        local: {
          human_readable: '1 801 227 262',
          number: '1801227262',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '130',
      referral_min_spend_amount: '1299',
      gift_card_options: [150, 300, 500, 1000,	2500,	3000],
    },
    {
      code: 'IT',
      name: 'Italy',
      lang: 'en-IT',
      phone_prefix: '39',
      currency_formatting_locale: 'it-IT',
      currency_code: 'EUR',
      flag_id: 'it_yex5ap',
      phone: {
        local: {
          human_readable: '1300 88 99 00',
          number: '1300889900',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '30',
      referral_min_spend_amount: '299',
      gift_card_options: [50, 100, 250, 500, 1000, 2000],
    },
    {
      code: 'JP',
      name: 'Japan',
      lang: 'en-JP',
      phone_prefix: '81',
      currency_formatting_locale: 'ja-JP',
      currency_code: 'JPY',
      flag_id: 'jp_m6elxg',
      phone: {
        local: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '4000',
      referral_min_spend_amount: '39999',
      gift_card_options: [2500,	5000,	15000,	50000,	75000,	150000],
    },
    {
      code: 'KR',
      name: 'Korea',
      lang: 'en-KR',
      phone_prefix: '82',
      currency_formatting_locale: 'ko-KR',
      currency_code: 'KRW',
      flag_id: 'kr_mrnua8',
      phone: {
        local: {
          human_readable: '0808 220 277',
          number: '0808220277',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '40000',
      referral_min_spend_amount: '399999',
      gift_card_options: [25000,	50000,	200000,	500000,	750000,	1500000],
    },
    {
      code: 'MO',
      name: 'Macau',
      lang: 'en-MO',
      phone_prefix: '853',
      currency_formatting_locale: 'en-MO',
      currency_code: 'MOP',
      flag_id: 'mo_k6c6by',
      phone: {
        local: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '300',
      referral_min_spend_amount: '2999',
      gift_card_options: [250, 500, 1250,	2500,	5000,	10000],
    },
    {
      code: 'MY',
      name: 'Malaysia',
      lang: 'en-MY',
      phone_prefix: '60',
      currency_formatting_locale: 'ms-MY',
      currency_code: 'MYR',
      flag_id: 'my_zzejgo',
      phone: {
        local: {
          human_readable: '03 9212 7293',
          number: '0392127293',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '150',
      referral_min_spend_amount: '1499',
      gift_card_options: [150, 300, 500,	1500,	3000,	5000],
    },
    {
      code: 'NZ',
      name: 'New Zealand',
      lang: 'en-NZ',
      phone_prefix: '64',
      currency_formatting_locale: 'en-NZ',
      currency_code: 'NZD',
      flag_id: 'nz_o98shy',
      phone: {
        local: {
          human_readable: '0800 441 457',
          number: '0800441457',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '50',
      referral_min_spend_amount: '499',
      gift_card_options: [50, 100,	250,	500,	1000,	2000],
    },
    {
      code: 'PH',
      name: 'Philippines',
      lang: 'en-PH',
      phone_prefix: '63',
      currency_formatting_locale: 'en-PH',
      currency_code: 'PHP',
      flag_id: 'ph_cmq6es',
      phone: {
        local: {
          human_readable: '1800 1320 0074',
          number: '180013200074',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '2000',
      referral_min_spend_amount: '19999',
      gift_card_options: [1500, 3000,	5000,	10000,	25000,	50000],
    },
    {
      code: 'QA',
      name: 'Qatar',
      lang: 'en-QA',
      phone_prefix: '974',
      currency_formatting_locale: 'en-QA',
      currency_code: 'QAR',
      flag_id: 'qa_zt7eo8',
      phone: {
        local: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '130',
      referral_min_spend_amount: '1299',
      gift_card_options: [150, 300, 500, 1000,	2500,	3000],
    },
    {
      code: 'RU',
      name: 'Russia',
      lang: 'en-RU',
      phone_prefix: '7',
      currency_formatting_locale: 'en-RU',
      currency_code: 'RUB',
      flag_id: 'ru_szpk5m',
      phone: {
        local: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '2500',
      referral_min_spend_amount: '24999',
      gift_card_options: [2000, 5000, 10000, 15000, 20000, 50000],
    },
    {
      code: 'SA',
      name: 'Saudi Arabia',
      lang: 'en-SA',
      phone_prefix: '966',
      currency_formatting_locale: 'en-SA',
      currency_code: 'SAR',
      flag_id: 'sa_evxi8g',
      phone: {
        local: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '130',
      referral_min_spend_amount: '1299',
      gift_card_options: [150, 300, 500, 1000, 2500, 3000],
    },
    {
      code: 'SG',
      name: 'Singapore',
      lang: 'en-SG',
      phone_prefix: '65',
      currency_formatting_locale: 'en-SG',
      currency_code: 'SGD',
      flag_id: 'sg_qrenqc',
      phone: {
        local: {
          human_readable: '800 492 2237',
          number: '8004922237',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: SINGAPORE_MAILING_ADDRESS,
      referral_amount: '50',
      referral_min_spend_amount: '499',
      gift_card_options: [50, 100, 250, 500, 1000,	2000],
    },
    {
      code: 'ZA',
      name: 'South Africa',
      lang: 'en-ZA',
      phone_prefix: '27',
      currency_formatting_locale: 'af-ZA',
      currency_code: 'ZAR',
      flag_id: 'za_rhuusv',
      phone: {
        local: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '500',
      referral_min_spend_amount: '4999',
      gift_card_options: [500, 1000,	2500,	5000,	10000,	50000],
    },
    {
      code: 'ES',
      name: 'Spain',
      lang: 'en-ES',
      phone_prefix: '34',
      currency_formatting_locale: 'es-ES',
      currency_code: 'EUR',
      flag_id: 'es_wxszqg',
      phone: {
        local: {
          human_readable: '911 230 742',
          number: '911230742',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '30',
      referral_min_spend_amount: '299',
      gift_card_options: [50, 100, 250, 500, 1000, 2000],
    },
    {
      code: 'TW',
      name: 'Taiwan',
      lang: 'en-TW',
      phone_prefix: '886',
      currency_formatting_locale: 'zh-TW',
      currency_code: 'TWD',
      flag_id: 'tw_a9lqx6',
      phone: {
        local: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '1000',
      referral_min_spend_amount: '19999',
      gift_card_options: [1000, 2000 ,5000 ,10000 ,20000, 40000],
    },
    {
      code: 'TH',
      name: 'Thailand',
      lang: 'en-TH',
      phone_prefix: '66',
      currency_formatting_locale: 'th-TH',
      currency_code: 'THB',
      flag_id: 'th_isrxzq',
      phone: {
        local: {
          human_readable: '02 026 0685',
          number: '020260685',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '1000',
      referral_min_spend_amount: '9999',
      gift_card_options: [1000, 2000, 5000, 10000, 20000, 40000],
    },
    {
      code: 'AE',
      name: 'United Arab Emirates',
      lang: 'en-AE',
      phone_prefix: '971',
      currency_formatting_locale: 'en-AE',
      currency_code: 'AED',
      flag_id: 'ae_grfjya',
      phone: {
        local: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '130',
      referral_min_spend_amount: '1299'
      150	300	500	1,000	2,500	3,000
    },
    {
      code: 'GB',
      name: 'United Kingdom',
      lang: 'en-GB',
      phone_prefix: '44',
      currency_formatting_locale: 'en-GB',
      currency_code: 'GBP',
      flag_id: 'gb_ta8bez',
      phone: {
        local: {
          human_readable: '020 8068 2668',
          number: '02080682668',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '25',
      referral_min_spend_amount: '249',
      gift_card_options: [50, 100, 250, 500, 1000, 2000],
    },
    {
      code: 'US',
      name: 'United States',
      lang: 'en-US',
      phone_prefix: '1',
      currency_formatting_locale: 'en-US',
      currency_code: 'USD',
      flag_id: 'us_fapjn8',
      phone: {
        local: {
          human_readable: '888 402 1238',
          number: '8884021238',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '35',
      referral_min_spend_amount: '349',
      gift_card_options: [50,	100,	250,	500,	1000,	2000],
    },
    {
      code: 'VN',
      name: 'Vietnam',
      lang: 'en-VN',
      phone_prefix: '84',
      currency_formatting_locale: 'vi-VN',
      currency_code: 'VND',
      flag_id: 'vn_mixye2',
      phone: {
        local: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '800000',
      referral_min_spend_amount: '7999999',
      gift_card_options: [500000,	1000000,	3000000,	5000000,	10000000,	20000000],
    },
  ],
  scooponexperience: [
    {
      code: 'AU',
      name: 'Australia',
      lang: 'en-AU',
      phone_prefix: '61',
      currency_formatting_locale: 'en-AU',
      currency_code: 'AUD',
      phone: {
        local: {
          human_readable: '1300 72 66 76',
          number: '1300726676',
        },
        international: {
          human_readable: '+61 2 8311 3542',
          number: '+61283113542',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '50',
      referral_min_spend_amount: '499'
    }
  ],
  scoopontravel: [
    {
      code: 'AU',
      name: 'Australia',
      lang: 'en-AU',
      phone_prefix: '61',
      currency_formatting_locale: 'en-AU',
      currency_code: 'AUD',
      phone: {
        local: {
          human_readable: '1300 72 66 76',
          number: '1300726676',
        },
        international: {
          human_readable: '+61 2 8311 3542',
          number: '+61283113542',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '50',
      referral_min_spend_amount: '499'
    }
  ],
  cudotravel: [
    {
      code: 'AU',
      name: 'Australia',
      lang: 'en-AU',
      phone_prefix: '61',
      currency_formatting_locale: 'en-AU',
      currency_code: 'AUD',
      phone: {
        local: {
          human_readable: '1300 892 711',
          number: '1300892711',
        },
        international: {
          human_readable: '+61 2 9051 1816',
          number: '+61290511816',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '50',
      referral_min_spend_amount: '499'
    }
  ],
  treatmetravel: [
    {
      code: 'NZ',
      name: 'New Zealand',
      lang: 'en-NZ',
      phone_prefix: '64',
      currency_formatting_locale: 'en-NZ',
      currency_code: 'NZD',
      flag_id: 'nz_o98shy',
      phone: {
        local: {
          human_readable: '09 222 4643',
          number: '092224643',
        },
        international: {
          human_readable: '+64 9 222 4643',
          number: '+6492224643',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '50',
      referral_min_spend_amount: '499'
    }
  ],
  dealstravel: [
    {
      code: 'AU',
      name: 'Australia',
      lang: 'en-AU',
      phone_prefix: '61',
      currency_formatting_locale: 'en-AU',
      currency_code: 'AUD',
      phone: {
        local: {
          human_readable: '1300 869 711',
          number: '1300869711',
        },
        international: {
          human_readable: '+61 2 9051 1817',
          number: '+61290511817',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '50',
      referral_min_spend_amount: '499'
    }
  ],
  cudo: [
    {
      code: 'AU',
      name: 'Australia',
      lang: 'en-AU',
      phone_prefix: '61',
      currency_formatting_locale: 'en-AU',
      currency_code: 'AUD',
      phone: {
        local: {
          human_readable: '1300 892 711',
          number: '1300892711',
        },
        international: {
          human_readable: '+61 2 9051 1816',
          number: '+61290511816',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '50',
      referral_min_spend_amount: '499'
    }
  ],
  deals: [
    {
      code: 'AU',
      name: 'Australia',
      lang: 'en-AU',
      phone_prefix: '61',
      currency_formatting_locale: 'en-AU',
      currency_code: 'AUD',
      phone: {
        local: {
          human_readable: '1300 869 711',
          number: '1300869711',
        },
        international: {
          human_readable: '+61 2 9051 1817',
          number: '+61290511817',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '50',
      referral_min_spend_amount: '499',
    }
  ],
  treatme: [
    {
      code: 'NZ',
      name: 'New Zealand',
      lang: 'en-NZ',
      phone_prefix: '64',
      currency_formatting_locale: 'en-NZ',
      currency_code: 'NZD',
      phone: {
        local: {
          human_readable: '09 222 4643',
          number: '092224643',
        },
        international: {
          human_readable: '+64 9 222 4643',
          number: '+6492224643',
        },
        default: 'international',
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '50',
      referral_min_spend_amount: '499'
    }
  ],
}
