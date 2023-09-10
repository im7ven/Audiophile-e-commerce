import { CheckoutForm } from "../components/Checkout/CheckoutForm";
import { CheckoutSummary } from "../components/Checkout/CheckoutSummary";
import { ReturnButton } from "../components/Shared/ReturnButton";
import { CheckoutWrapper } from "../styles/Pages/styles.checkout-page";
import { PagePadding } from "../styles/Pages/styles.pages";

export const CheckOutPage = () => {
  return (
    <>
      <PagePadding
        style={{
          background: "#fafafa",
          paddingTop: "0.1rem",
          paddingBottom: "0.01rem",
        }}
      >
        <ReturnButton route="/" />
        <CheckoutWrapper>
          <CheckoutForm />
          <CheckoutSummary />
        </CheckoutWrapper>
      </PagePadding>
    </>
  );
};
