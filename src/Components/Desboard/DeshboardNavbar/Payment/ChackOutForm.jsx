import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const ChackOutForm = () => {
    const [error,setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!stripe || !elements){
        return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
    if(error){
        console.log('Payment Error',error);
        setError(error?.message);
    }
    else{
        console.log('Payment Method',paymentMethod);
        setError('')
    }
  

  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-primary my-6 px-10" type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-600 italic">{error}</p>
    </form>
  );
};

export default ChackOutForm;
