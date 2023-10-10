// This map will only include payment methods which are to be added for a particular region only
// and not for all regions with a particular currency. If a payment method is to be switched on for
// all regions for the currency (i.e. currencywide) add the payment method in currencies.ts instead

import { Brand } from "./regions";

type PaymentMethodsByRegion = {
    [key in Brand]: {[key:string]: string[]}
}

export const paymentMethodsByRegion = {
    luxuryescapes:{
        DE: [
            "stripe_payment_element_card",
            "stripe_payment_element_giropay",
        ],
    }
};
