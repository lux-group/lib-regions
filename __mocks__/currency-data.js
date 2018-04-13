module.exports = {
  currencies: {
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
    },
  },
}

