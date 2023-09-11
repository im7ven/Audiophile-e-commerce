import { useCart } from "../../context/CartContext";
import {
  PriceHeading,
  PriceInfoWrapper,
  ProductQuantity,
  ProductSection,
  SummaryContainer,
  SummaryHeading,
} from "../../styles/Checkout/styles.CheckOutSummary";
import {
  CartTotal,
  ProductDetails,
  ProductName,
  ProductPrice,
  ProductThumbnail,
  ProductWrapper,
} from "../../styles/Shared/styles.Cart";
import { PrimaryBtnFullW } from "../../styles/styles.button";

export const CheckoutSummary = () => {
  const { cart, formatValue } = useCart();

  const cartTotal = cart.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  const vatTotal = cart
    .reduce((acc, product) => {
      return acc + product.vat;
    }, 0)
    .toFixed(0);

  return (
    <SummaryContainer>
      <SummaryHeading>Summary</SummaryHeading>
      <ProductSection>
        {cart.map((product) => (
          <ProductWrapper className="spacing" key={product.id}>
            <ProductDetails>
              <ProductThumbnail src={product.image} />
              <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>${formatValue(product.basePrice)}</ProductPrice>
              </div>
            </ProductDetails>
            <span>
              <ProductQuantity>x{product.quantity}</ProductQuantity>
            </span>
          </ProductWrapper>
        ))}
      </ProductSection>

      <PriceInfoWrapper>
        <PriceHeading>Total</PriceHeading>
        <CartTotal>${formatValue(cartTotal)}</CartTotal>
      </PriceInfoWrapper>
      <PriceInfoWrapper>
        <PriceHeading>Shipping</PriceHeading>
        <CartTotal>$50</CartTotal>
      </PriceInfoWrapper>
      <PriceInfoWrapper>
        <PriceHeading>Vat (included)</PriceHeading>
        <CartTotal>${formatValue(parseInt(vatTotal))}</CartTotal>
      </PriceInfoWrapper>
      <PriceInfoWrapper style={{ margin: "24px 0 3.2rem" }}>
        <PriceHeading>Grand Total</PriceHeading>
        <CartTotal style={{ color: "#d87d4a" }}>
          ${formatValue(cartTotal + 50)}
        </CartTotal>
      </PriceInfoWrapper>
      <PrimaryBtnFullW type="submit" form="checkoutForm" formNoValidate>
        Checkout
      </PrimaryBtnFullW>
    </SummaryContainer>
  );
};
