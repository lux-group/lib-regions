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
      ],
    },
  },
  dealstravel: {
    AUD: {
      paymentMethods: [
        "stripe",
        "braintree",
      ],
    },
  },
  cudotravel: {
    AUD: {
      paymentMethods: [
        "stripe",
        "braintree",
      ],
    },
  },
  cudo: {
    AUD: {
      paymentMethods: [
        "stripe",
        "braintree",
      ],
    },
  },
  deals: {
    AUD: {
      paymentMethods: [
        "stripe",
        "braintree",
      ],
    },
  },
  treatme: {
    NZD: {
      paymentMethods: [
        "stripe",
        "braintree",
      ],
    },
  },
  scooponexperience: {
    AUD: {
      paymentMethods: [
        "stripe",
        "braintree",
      ],
    },
  },
  scoopontravel: {
    AUD: {
      paymentMethods: [
        "stripe",
        "braintree",
        "latitude_pay",
      ],
    },
  },
  led_admin: {
    AUD: {
      paymentMethods: [
        "stripe",
        "braintree",
        "latitude_pay",
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
        "braintree",
        "qantas",
        "latitude",
        "latitude_gem",
        "latitude_pay",
        "giftcard",
        "klarna",
        "bridgerpay",
        "applepay",
        "googlepay",
        "afterpay_bp",
      ],
    },
    CAD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "applepay",
        "googlepay",
      ],
    },
    CNY: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
        "applepay",
      ],
    },
    EUR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "applepay",
        "googlepay",
      ],
    },
    HKD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
        "applepay",
        "googlepay",
        "hoolah_bp",
      ],
    },
    INR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "razorpay",
        "giftcard",
        "vistara",
      ],
    },
    IDR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
        "googlepay",
      ],
    },
    ILS: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        // "applepay",  // Apple Pay is not supported in IL
        // "googlepay", // Google Pay is not supported in IL
      ],
    },
    JPY: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
        "applepay",
        "googlepay",
      ],
    },
    KRW: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
      ],
    },
    MOP: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "applepay",
      ],
    },
    MYR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
        "googlepay",
        "hoolah_bp",
      ],
    },
    NZD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
        "afterpay_bp",
        "applepay",
        "googlepay",
        "klarna_bp",
      ],
    },
    PHP: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
        "googlepay",
      ],
    },
    QAR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        // "applepay",  // Apple Pay is not supported in QA
        // "googlepay", // Google Pay is not supported in QA
      ],
    },
    RUB: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        // "applepay", // Apple Pay is not supported in RU
        // "googlepay", // Google Pay is not supported in RU
      ],
    },
    SAR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        // "applepay", // Apple Pay is not supported in SA
        // "googlepay", // Google Pay is not supported in SA
      ],
    },
    SGD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
        "applepay",
        "googlepay",
        "hoolah_bp",
      ],
    },
    TWD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
        "applepay",
        "googlepay",
      ],
    },
    THB: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
        "googlepay",
      ],
    },
    ZAR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        // "applepay", Apple Pay is not supported in South Africa
        // "googlepay", Google Pay is not supported in South Africa
      ],
    },
    AED: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "applepay",
        "googlepay",
      ],
    },
    GBP: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
        "applepay",
        "googlepay",
        "klarna_bp",
      ],
    },
    USD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
        "applepay",
        "googlepay",
        "klarna_bp",
      ],
    },
    VND: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
        // "googlepay", // Google Pay is not supported in South Africa
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
  nwl: {    
      AUD: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "braintree",
          "qantas",
          "latitude",
          "latitude_gem",
          "latitude_pay",
          "giftcard",
          "klarna",
          "bridgerpay",
          "applepay",
          "googlepay",
          "afterpay_bp",
        ],
      },
      CAD: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "applepay",
          "googlepay",
        ],
      },
      CNY: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "krisFlyer",
          "applepay",
        ],
      },
      EUR: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "applepay",
          "googlepay",
        ],
      },
      HKD: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "krisFlyer",
          "applepay",
          "googlepay",
          "hoolah_bp",
        ],
      },
      INR: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "razorpay",
          "giftcard",
          "vistara",
        ],
      },
      IDR: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "krisFlyer",
          "googlepay",
        ],
      },
      ILS: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          // "applepay",  // Apple Pay is not supported in IL
          // "googlepay", // Google Pay is not supported in IL
        ],
      },
      JPY: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "krisFlyer",
          "applepay",
          "googlepay",
        ],
      },
      KRW: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "krisFlyer",
        ],
      },
      MOP: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "applepay",
        ],
      },
      MYR: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "krisFlyer",
          "googlepay",
          "hoolah_bp",
        ],
      },
      NZD: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "krisFlyer",
          "afterpay_bp",
          "applepay",
          "googlepay",
          "klarna_bp",
        ],
      },
      PHP: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "krisFlyer",
          "googlepay",
        ],
      },
      QAR: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          // "applepay",  // Apple Pay is not supported in QA
          // "googlepay", // Google Pay is not supported in QA
        ],
      },
      RUB: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          // "applepay", // Apple Pay is not supported in RU
          // "googlepay", // Google Pay is not supported in RU
        ],
      },
      SAR: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          // "applepay", // Apple Pay is not supported in SA
          // "googlepay", // Google Pay is not supported in SA
        ],
      },
      SGD: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "krisFlyer",
          "applepay",
          "googlepay",
          "hoolah_bp",
        ],
      },
      TWD: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "krisFlyer",
          "applepay",
          "googlepay",
        ],
      },
      THB: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "krisFlyer",
          "googlepay",
        ],
      },
      ZAR: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          // "applepay", Apple Pay is not supported in South Africa
          // "googlepay", Google Pay is not supported in South Africa
        ],
      },
      AED: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "applepay",
          "googlepay",
        ],
      },
      GBP: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "krisFlyer",
          "applepay",
          "googlepay",
          "klarna_bp",
        ],
      },
      USD: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "krisFlyer",
          "applepay",
          "googlepay",
          "klarna_bp",
        ],
      },
      VND: {
        paymentMethods: [
          "le_credit",
          "stripe",
          "giftcard",
          "krisFlyer",
          // "googlepay", // Google Pay is not supported in South Africa
        ],
      },    
  }
};
