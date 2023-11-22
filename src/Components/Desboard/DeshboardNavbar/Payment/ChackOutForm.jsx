import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/AxiosSecure";
import useCart from './../../../Hook/useCart';

const ChackOutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret,setClintSecret] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const cart = useCart();
  const price = cart.reduce((total,item)=> total + item.price,0)

  useEffect(()=>{
       axiosSecure.post('/create-payment-intent',{price})
        .then(res=>{
          console.log(res.data.clientSecret);
          setClintSecret(res.data.clientSecret)
        })
       
  },[])




  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment Error", error);
      setError(error?.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setError("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="p-3 "
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
      <button
        className="btn btn-primary btn-outline my-6 px-10"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600 italic">{error}</p>
    </form>
  );
};

export default ChackOutForm;
