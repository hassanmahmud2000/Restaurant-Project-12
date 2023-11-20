import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../SheardItem/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import ChackOutForm from "./ChackOutForm";

// TODO: Take PK Key from New Account
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Key)
const Payment = () => {
    return (
        <div>
            <SectionTitle heder='DO PAYMENT' subHeader='....Money...'></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <ChackOutForm></ChackOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;