// This map will only include payment methods which are to be added for a particular region only
// and not for all regions with a particular currency. If a payment method is to be switched on for
// all regions for the currency (i.e. currencywide) add the payment method in currencies.ts instead

interface PaymentMethodsByRegion {
  [brand: string]: Region;
}

interface PaymentMethods {
  paymentMethods: string[];
}

interface Region {
  [regionCode: string]: PaymentMethods;
}

export const paymentMethodsByRegion: PaymentMethodsByRegion = {
  luxuryescapes: {
    DE: {
      paymentMethods: [
        "stripe_payment_element_card",
      ],
    },
  },
};
