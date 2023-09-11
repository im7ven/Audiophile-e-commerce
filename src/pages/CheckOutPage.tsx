import { useEffect, useState } from "react";
import {
  CheckoutForm,
  CheckoutFormData,
} from "../components/Checkout/CheckoutForm";
import { CheckoutSummary } from "../components/Checkout/CheckoutSummary";
import { ReturnButton } from "../components/Shared/ReturnButton";
import { CheckoutWrapper } from "../styles/Pages/styles.checkout-page";
import { PagePadding } from "../styles/Pages/styles.pages";
import { CheckoutModal } from "../components/Checkout/CheckoutModal";
import { useCart } from "../context/CartContext";

export const CheckOutPage = () => {
  const { clearCart } = useCart();
  const [isCheckoutModalVisible, setCheckoutModalVisibility] = useState(false);

  useEffect(() => {
    if (isCheckoutModalVisible) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isCheckoutModalVisible]);

  const handleSubmit = (data: CheckoutFormData) => {
    if (data) {
      setCheckoutModalVisibility(true);
    }
  };

  const handleReturnHome = () => {
    setCheckoutModalVisibility(false);
    clearCart();
  };

  return (
    <>
      {isCheckoutModalVisible && <CheckoutModal onReturn={handleReturnHome} />}
      <PagePadding
        style={{
          background: "#fafafa",
          paddingTop: "0.1rem",
          paddingBottom: "0.01rem",
        }}
      >
        <ReturnButton route="/" />
        <CheckoutWrapper>
          <CheckoutForm onSubmit={handleSubmit} />
          <CheckoutSummary />
        </CheckoutWrapper>
      </PagePadding>
    </>
  );
};
