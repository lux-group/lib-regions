module.exports = {
  currencies: {
    treatmetravel: {
      NZD: {
        payment_methods: [
          'stripe',
          'braintree',
        ],
      },
    },
    scoopontravel: {
      AUD: {
        payment_methods: [
          'braintree',
          'stripe'
        ]
      }
    },
    luxuryescapes: {
      AUD: {
        payment_methods: [
          'le_credit',
          'braintree',
          'stripe',
          'qantas'
        ],
      },
      CAD: {
        payment_methods: [
          'le_credit',
          'braintree',
          'stripe',
          'maple_syrup_eh',
        ],
      },
      SGD: {
        payment_methods: [
          'le_credit',
          'stripe',
          'giftcard',
          'krisFlyer',
        ],
      },
    },
  },
}

