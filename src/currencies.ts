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
        "latitude_pay",
        "giftcard",
      ],
    },
    CAD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
      ],
    },
    CNY: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
      ],
    },
    EUR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
      ],
    },
    HKD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
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
      ],
    },
    ILS: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
      ],
    },
    JPY: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
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
      ],
    },
    MYR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
      ],
    },
    NZD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
      ],
    },
    PHP: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
      ],
    },
    QAR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
      ],
    },
    RUB: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
      ],
    },
    SAR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
      ],
    },
    SGD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
      ],
    },
    TWD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
      ],
    },
    THB: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
      ],
    },
    ZAR: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
      ],
    },
    AED: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
      ],
    },
    GBP: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
      ],
    },
    USD: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
      ],
    },
    VND: {
      paymentMethods: [
        "le_credit",
        "stripe",
        "giftcard",
        "krisFlyer",
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
};
