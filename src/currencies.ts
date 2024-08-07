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
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
    },
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
        "stripe_custom_payto",
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
        "stripe_3ds_v2",
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
        "stripe_payment_element_card",
      ],
    },
    INR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "deposit_stripe",
        "razorpay",
        "giftcard",
        "stripe_3ds",
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
        "stripe_payment_element_card",
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
          "stripe_payment_element_card",
        ],
      },
  },
};
