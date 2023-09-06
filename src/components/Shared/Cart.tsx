import { MouseEventHandler, useRef } from "react";
import {
  CartBody,
  CartContainer,
  CartFooter,
  CartHeader,
  CartOverlay,
  CartOverlayWrapper,
  CartPlaceHolder,
  CartQuantitySelector,
  CartTotal,
  ClearCartBtn,
  ProductDetails,
  ProductName,
  ProductPrice,
  ProductThumbnail,
  ProductWrapper,
  Quantity,
  TotalLabel,
} from "../../styles/Shared/styles.Cart";
import { useCart } from "../../context/CartContext";
import { CardHeading } from "../../styles/Shared/styles.SuggestionProductCard";
import {
  AddButton,
  RemoveButton,
} from "../../styles/Product/styles.ProductItem";
import { PrimaryBtn } from "../../styles/styles.button";

interface Props {
  onCloseCart: () => void;
}

export const Cart = ({ onCloseCart }: Props) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const overlayWrapperRef = useRef<HTMLDivElement | null>(null);
  const { cart, clearCart, decreaseProductQuantity, increaseProductQuantity } =
    useCart();

  const handleOverlayClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (
      e.target === overlayRef.current ||
      e.target === overlayWrapperRef.current
    ) {
      return onCloseCart();
    }
  };

  return (
    <CartOverlayWrapper ref={overlayWrapperRef} onClick={handleOverlayClick}>
      <CartOverlay ref={overlayRef} onClick={handleOverlayClick}>
        <CartContainer>
          <CartHeader>
            <div>
              <CardHeading>Cart ({cart.length})</CardHeading>
            </div>
            <ClearCartBtn onClick={() => clearCart()}>Remove all</ClearCartBtn>
          </CartHeader>
          {cart.length < 1 ? (
            <CartPlaceHolder>No items in your cart</CartPlaceHolder>
          ) : (
            <>
              <CartBody>
                {cart.map((product) => (
                  <ProductWrapper key={product.id}>
                    <ProductDetails>
                      <ProductThumbnail src={product.image} />
                      <div>
                        <ProductName>{product.name}</ProductName>
                        <ProductPrice>${product.basePrice}</ProductPrice>
                      </div>
                    </ProductDetails>
                    <CartQuantitySelector>
                      <RemoveButton
                        onClick={() => decreaseProductQuantity(product.id)}
                      >
                        -
                      </RemoveButton>
                      <Quantity>{product.quantity}</Quantity>
                      <AddButton
                        onClick={() => increaseProductQuantity(product.id)}
                      >
                        +
                      </AddButton>
                    </CartQuantitySelector>
                  </ProductWrapper>
                ))}
              </CartBody>
              <CartFooter>
                <TotalLabel>Total</TotalLabel>
                <CartTotal>
                  $
                  {cart.reduce((acc, product) => {
                    return acc + product.price;
                  }, 0)}
                </CartTotal>
                <PrimaryBtn style={{ width: "100%" }}>Checkout</PrimaryBtn>
              </CartFooter>
            </>
          )}
        </CartContainer>
      </CartOverlay>
    </CartOverlayWrapper>
  );
};
