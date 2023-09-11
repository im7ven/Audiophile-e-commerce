import {
  CheckoutIcon,
  CheckoutMessage,
  CheckoutModalHeading,
  ExpandProductBtn,
  GrandTotal,
  Hr,
  ModalContainer,
  OrderInfoWrapper,
  PriceContainer,
  PurchaseContainer,
  PurchaseImg,
  TotalWrapper,
} from "../../styles/Checkout/styles.CheckoutModal";
import {
  CartTotal,
  ModalOverlay,
  ModalWrapper,
  ProductDetails,
  ProductName,
  ProductPrice,
  ProductWrapper,
} from "../../styles/Shared/styles.Cart";
import checkoutIcon from "../../images/icon-order-confirmation.svg";
import {
  ProductQuantity,
  ReturnHomeButton,
} from "../../styles/Checkout/styles.CheckOutSummary";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { PrimaryBtnFullW } from "../../styles/styles.button";
import { ReturnButton } from "../Shared/ReturnButton";

interface Props {
  onReturn: () => void;
}

export const CheckoutModal = ({ onReturn }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { cart } = useCart();

  const visibleProducts = isCollapsed ? cart : cart.slice(0, 1);

  const cartTotal = cart.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  console.log(cart);
  console.log(cartTotal);

  return (
    <ModalWrapper>
      <ModalOverlay className="checkout-modal">
        <ModalContainer>
          <CheckoutIcon src={checkoutIcon} />
          <CheckoutModalHeading>
            Thank you
            <CheckoutModalHeading>for your order</CheckoutModalHeading>
          </CheckoutModalHeading>
          <CheckoutMessage>
            You will receive an email confirmation shortly.
          </CheckoutMessage>
          <OrderInfoWrapper>
            <PurchaseContainer>
              {visibleProducts.map((product) => (
                <ProductWrapper className="checkout-modal" key={product.id}>
                  <ProductDetails>
                    <PurchaseImg src={product.image} />
                    <div>
                      <ProductName>{product.name}</ProductName>
                      <ProductPrice>$ {product.price}</ProductPrice>
                    </div>
                  </ProductDetails>
                  <ProductQuantity>x{product.quantity}</ProductQuantity>
                </ProductWrapper>
              ))}
              {cart.length > 1 && (
                <>
                  <Hr />
                  <ExpandProductBtn
                    onClick={() => setIsCollapsed(!isCollapsed)}
                  >
                    {isCollapsed ? "View Less" : "View More"}
                  </ExpandProductBtn>
                </>
              )}
            </PurchaseContainer>
            <PriceContainer>
              <TotalWrapper>
                <GrandTotal>Grand Total</GrandTotal>
                <CartTotal className="light">${cartTotal + 50}</CartTotal>
              </TotalWrapper>
            </PriceContainer>
          </OrderInfoWrapper>
          <ReturnHomeButton to="/" onClick={() => onReturn()}>
            back to home
          </ReturnHomeButton>
        </ModalContainer>
      </ModalOverlay>
    </ModalWrapper>
  );
};
