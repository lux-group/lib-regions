export interface Currency {
  paymentMethods: string[];
}

interface Currencies {
  [currencyCode: string]: Currency;
}

interface BrandCurrencies {
  [brand: string]: Currencies;
}

export const currencies: BrandCurrencies = {
  treatmetravel: {
    NZD: {
      paymentMethods: [
        "stripe",
        "stripe_3ds",
        "giftcard",
      ],
    },
  },
  dealstravel: {
    AUD: {
      paymentMethods: [
        "stripe",
        "braintree",
        "stripe_3ds",
        "giftcard",
      ],
    },
  },
  cudotravel: {
    AUD: {
      paymentMethods: [
        "stripe",
        "braintree",
        "stripe_3ds",
        "giftcard",
      ],
    },
  },
  cudo: {
    AUD: {
      paymentMethods: [
        "stripe",
        "braintree",
        "stripe_3ds",
      ],
    },
  },
  deals: {
    AUD: {
      paymentMethods: [
        "stripe",
        "braintree",
        "stripe_3ds",
      ],
    },
  },
  treatme: {
    NZD: {
      paymentMethods: [
        "stripe",
        "braintree",
        "stripe_3ds",
      ],
    },
  },
  scooponexperience: {
    AUD: {
      paymentMethods: [
        "stripe",
        "braintree",
        "stripe_3ds",
      ],
    },
  },
  scoopontravel: {
    AUD: {
      paymentMethods: [
        "stripe",
        "braintree",
        "stripe_3ds",
        "giftcard",
      ],
    },
  },
  kogantravel: {
    AUD: {
      paymentMethods: [
        "stripe",
        "braintree",
        "stripe_3ds",
        "giftcard",
      ],
    },
  },
  lebusinesstraveller: {
    AUD: {
      paymentMethods: [
        "stripe",
        "stripe_3ds",
      ],
    },
  },
  leagenthub: {
    AUD: {
      paymentMethods: [
        "stripe",
        "stripe_3ds",
      ],
    },
    NZD: {
      paymentMethods: [
        "stripe",
        "stripe_3ds",
      ],
    }
  },
  led_admin: {
    AUD: {
      paymentMethods: [
        "stripe",
        "braintree",
      ],
    },
    NZD: {
      paymentMethods: [
        "stripe",
        "braintree",
      ],
    },
  },
  luxuryescapes: {
    AUD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "braintree",
        "qantas",
        "giftcard",
        "bridgerpay",
        "applepay",
        "googlepay",
        "stripe_3ds",
        "waave_bp",
        "velocity",
        "gocardless",
        "stripe_payment_element_payto",
      ],
    },
    CAD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "applepay",
        "googlepay",
        "stripe_3ds",
      ],
    },
    CNY: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "krisFlyer",
        "applepay",
        "stripe_3ds",
      ],
    },
    EUR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "applepay",
        "googlepay",
        "stripe_3ds",
      ],
    },
    HKD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "krisFlyer",
        "applepay",
        "googlepay",
        "stripe_3ds",
      ],
    },
    INR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "razorpay",
        "giftcard",
        "vistara",
        "stripe_3ds",
      ],
    },
    IDR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "krisFlyer",
        "googlepay",
        "stripe_3ds",
      ],
    },
    ILS: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        // "applepay",  // Apple Pay is not supported in IL
        // "googlepay", // Google Pay is not supported in IL
        "stripe_3ds",
      ],
    },
    JPY: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "krisFlyer",
        "applepay",
        "googlepay",
        "stripe_3ds",
      ],
    },
    KRW: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "krisFlyer",
        "stripe_3ds",
      ],
    },
    MOP: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "applepay",
        "stripe_3ds",
      ],
    },
    MYR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "krisFlyer",
        "googlepay",
        "hoolah_bp",
        "stripe_3ds",
        "atome_bp",
      ],
    },
    NZD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "krisFlyer",
        "afterpay_bp",
        "applepay",
        "googlepay",
        "stripe_3ds",
      ],
    },
    PHP: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "krisFlyer",
        "googlepay",
        "stripe_3ds",
      ],
    },
    QAR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        // "applepay",  // Apple Pay is not supported in QA
        // "googlepay", // Google Pay is not supported in QA
        "stripe_3ds",
      ],
    },
    RUB: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        // "applepay", // Apple Pay is not supported in RU
        // "googlepay", // Google Pay is not supported in RU
        "stripe_3ds",
      ],
    },
    SAR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        // "applepay", // Apple Pay is not supported in SA
        // "googlepay", // Google Pay is not supported in SA
        "stripe_3ds",
      ],
    },
    SGD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "krisFlyer",
        "applepay",
        "googlepay",
        "hoolah_bp",
        "stripe_3ds",
        "atome_bp",
      ],
    },
    TWD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "krisFlyer",
        "applepay",
        "googlepay",
        "stripe_3ds",
      ],
    },
    THB: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "krisFlyer",
        "googlepay",
        "stripe_3ds",
      ],
    },
    ZAR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "stripe_3ds",
        // "applepay", Apple Pay is not supported in South Africa
        // "googlepay", Google Pay is not supported in South Africa
      ],
    },
    AED: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "applepay",
        "googlepay",
        "stripe_3ds",
      ],
    },
    GBP: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "krisFlyer",
        "applepay",
        "googlepay",
        "stripe_3ds",
      ],
    },
    USD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "krisFlyer",
        "applepay",
        "googlepay",
        "afterpay_bp",
        "stripe_3ds",
      ],
    },
    VND: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "giftcard",
        "krisFlyer",
        // "googlepay", // Google Pay is not supported in South Africa
        "stripe_3ds",
      ],
    },
  },
  yidu: {
    CNY: {
      paymentMethods: [
        "partner",
      ],
    },
  },
  zoomzoom: {
    AUD: {
      paymentMethods: [
        "partner",
      ],
    },
  },
  newwhitelabel: {
      AUD: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "braintree",
          "qantas",
          "giftcard",
          "bridgerpay",
          "applepay",
          "googlepay",
          "afterpay_bp",
          "stripe_3ds",
        ],
      },
  },
};
