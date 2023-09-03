import { ReactNode } from "react";
import {
  ProductItemBtnWrapper,
  ProductItemContainer,
  ProductItemDescription,
  ProductItemDetails,
  ProductItemImage,
  ProductItemName,
  ProductItemPrice,
} from "../../styles/Product/styles.ProductItem";
import { QuantitySelector } from "../Shared/QuantitySelector";
import { PrimaryBtn } from "../../styles/styles.button";

interface Props {
  tabletSrc: string;
  mobileSrc: string;
  src: string;
  alt: string;
  overline?: ReactNode;
  productName: string;
  description: string;
  price: string;
}

export const ProductItem = ({
  tabletSrc,
  mobileSrc,
  src,
  alt,
  overline,
  productName,
  description,
  price,
}: Props) => {
  return (
    <ProductItemContainer>
      <picture>
        <source
          type="image/webp"
          srcSet={tabletSrc}
          media="(min-width:480px) and (max-width: 1024px)"
        />
        <source
          type="image/webp"
          srcSet={mobileSrc}
          media="(max-width: 480px)"
        />
        <ProductItemImage src={src} alt={alt} width="540px" height="560px" />
      </picture>
      <ProductItemDetails>
        {overline}
        <ProductItemName>{productName}</ProductItemName>
        <ProductItemDescription>{description}</ProductItemDescription>
        <ProductItemPrice>{price}</ProductItemPrice>
        <ProductItemBtnWrapper>
          <QuantitySelector />
          <PrimaryBtn>Add to cart</PrimaryBtn>
        </ProductItemBtnWrapper>
      </ProductItemDetails>
    </ProductItemContainer>
  );
};
