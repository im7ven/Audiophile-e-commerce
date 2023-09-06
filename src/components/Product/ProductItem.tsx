import { ReactNode } from "react";
import {
  AddButton,
  ProductItemBtnWrapper,
  ProductItemContainer,
  ProductItemDescription,
  ProductItemDetails,
  ProductItemImage,
  ProductItemName,
  ProductItemPrice,
  QuantityAmount,
  QuantitySelectorWrapper,
  RemoveButton,
} from "../../styles/Product/styles.ProductItem";

interface Props {
  tabletSrc: string;
  mobileSrc: string;
  src: string;
  alt: string;
  overline?: ReactNode;
  productName: string;
  description: string;
  price: string;
  addToCartBtn: ReactNode;
  onAdd: () => void;
  onRemove: () => void;
  quantity: number;
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
  addToCartBtn,
  onAdd,
  onRemove,
  quantity,
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
          <QuantitySelectorWrapper>
            <RemoveButton onClick={() => onRemove()}>-</RemoveButton>
            <span>
              <QuantityAmount>{quantity}</QuantityAmount>
            </span>
            <AddButton onClick={() => onAdd()}>+</AddButton>
          </QuantitySelectorWrapper>
          {addToCartBtn}
        </ProductItemBtnWrapper>
      </ProductItemDetails>
    </ProductItemContainer>
  );
};
