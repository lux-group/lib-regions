// This map will only include payment methods which are to be added for a particular region only
// and not for all regions with a particular currency. If a payment method is to be switched on for
// all regions for the currency (i.e. currencywide) add the payment method in currencies.ts instead

interface PaymentMethodsByRegion {
  [brand: string]: Region;
}

interface Region {
  [regionCode: string]: PaymentMethodLimit[];
}

interface PaymentMethodLimit {
  paymentMethod: string;
  limit: number;
}

export const paymentMethodLimitsByRegion: PaymentMethodsByRegion = {
  luxuryescapes: {
    AU: [ // Australia
      {
        paymentMethod: "stripe_payment_element_klarna",
        limit: 3000,
      },
    ],
    US: [ // America
      {
        paymentMethod: "stripe_payment_element_klarna",
        limit: 4000,
      },
    ],
    NZ: [ // New Zealand
      {
        paymentMethod: "stripe_payment_element_klarna",
        limit: 4000,
      },
    ],
    GB: [ // UK
      {
        paymentMethod: "stripe_payment_element_klarna",
        limit: 2000,
      },
    ],
    DE: [ // Germany
      {
        paymentMethod: "stripe_payment_element_klarna",
        limit: 10000,
      },
    ],
    FR: [ // France
      {
        paymentMethod: "stripe_payment_element_klarna",
        limit: 1500,
      },
    ],
    IE: [ // Ireland
      {
        paymentMethod: "stripe_payment_element_klarna",
        limit: 1500,
      },
    ],
    IT: [ // Italy
      {
        paymentMethod: "stripe_payment_element_klarna",
        limit: 1500,
      },
    ],
    ES: [ // Spain
      {
        paymentMethod: "stripe_payment_element_klarna",
        limit: 1500,
      },
    ],
    NL: [ // Netherlands
      {
        paymentMethod: "stripe_payment_element_klarna",
        limit: 4000,
      },
    ],
  },
};
