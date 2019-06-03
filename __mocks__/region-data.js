var DEFAULT_MAILING_ADDRESS = 'Level 1, 50-56 York St, South Melbourne, VIC 3205, AUSTRALIA'

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
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      latitude_threshold: 999,
      referral_amount: '50',
      offer_urgency_tag: {
        tour: {
          min: 2,
          period: 24
        },
        hotel: {
          min: 10,
          period: 24
        }
      }
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
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '45',
      offer_urgency_tag: null
    },
  ],
  scoopontravel: [
    {
      code: 'AU',
      name: 'Australia',
      lang: 'en-AU',
      phone_prefix: '61',
      currency_formatting_locale: 'en-AU',
      currency_code: 'AUD',
      referral_amount: '50',
      offer_urgency_tag: null
    },
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
          human_readable: '0800 441 457',
          number: '0800441457',
        },
        international: {
          human_readable: '+61 2 8320 6845',
          number: '+61283206845',
        },
      },
      mailing_address: DEFAULT_MAILING_ADDRESS,
      referral_amount: '50',
      offer_urgency_tag: null
    }
  ],
}
