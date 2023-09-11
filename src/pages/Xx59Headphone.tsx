import { useState } from "react";
import { ProductImageGallery } from "../components/Product/ProductImageGallery";
import { ProductItem } from "../components/Product/ProductItem";
import { ProductItemFeature } from "../components/Product/ProductItemFeature";
import { BestGearBlock } from "../components/Shared/BestGearBlock";
import { Category } from "../components/Shared/Category";
import { ReturnButton } from "../components/Shared/ReturnButton";
import { SuggestionProductCard } from "../components/Shared/SuggestionProductCard";
import { useCart } from "../context/CartContext";
import {
  xx59Cart,
  xx59ProductImgD,
  xx59ProductImgM,
  xx59ProductImgT,
  xx59gallery1D,
  xx59gallery1M,
  xx59gallery1T,
  xx59gallery2D,
  xx59gallery2M,
  xx59gallery2T,
  xx59gallery3D,
  xx59gallery3M,
  xx59gallery3T,
  xx99M1SuggestD,
  xx99M1SuggestM,
  xx99M1SuggestT,
  xx99M2SuggestD,
  xx99M2SuggestM,
  xx99M2SuggestT,
  zx9SuggestD,
  zx9SuggestM,
  zx9SuggestT,
} from "../images";
import { CategoryBlockWrapper } from "../styles/Pages/styles.category-page";
import { PagePadding } from "../styles/Pages/styles.pages";
import {
  ListItem,
  ListItemQuantity,
} from "../styles/Product/styles.ProductItemFeature";
import {
  SuggestionBlockContainer,
  SuggestionBlockHeading,
} from "../styles/Shared/styles.SuggestionProductBlock";
import { PrimaryBtn } from "../styles/styles.button";

export const Xx59Headphone = () => {
  const { addToCart } = useCart();
  const [productQuantity, setProductQuantity] = useState(1);

  const handleAddQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const handleRemoveQuantity = () => {
    productQuantity <= 1 ? null : setProductQuantity(productQuantity - 1);
  };

  const handleAddProduct = () => {
    return addToCart(
      5,
      xx59Cart,
      "xx59",
      899,
      899 * productQuantity,
      productQuantity
    );
  };

  return (
    <PagePadding>
      <ReturnButton route="/headphones" />
      <ProductItem
        onRemove={handleRemoveQuantity}
        onAdd={handleAddQuantity}
        quantity={productQuantity}
        tabletSrc={xx59ProductImgT}
        mobileSrc={xx59ProductImgM}
        src={xx59ProductImgD}
        productName="XX59 Headphones"
        alt="XX59 Headphones"
        price="$899"
        addToCartBtn={
          <PrimaryBtn onClick={handleAddProduct}>Add to Cart</PrimaryBtn>
        }
        description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
      />
      <ProductItemFeature
        listItem={
          <>
            <li>
              <ListItemQuantity>1x</ListItemQuantity>
              <ListItem>Headphone Unit</ListItem>
            </li>
            <li>
              <ListItemQuantity>2x</ListItemQuantity>
              <ListItem>Replacement Earcups</ListItem>
            </li>
            <li>
              <ListItemQuantity>1x</ListItemQuantity>
              <ListItem>User Manual</ListItem>
            </li>
            <li>
              <ListItemQuantity>1x</ListItemQuantity>
              <ListItem>3.5mm 5m Audio Cable</ListItem>
            </li>
          </>
        }
      >
        These headphones have been created from durable, high-quality materials
        tough enough to take anywhere. Its compact folding design fuses comfort
        and minimalist style making it perfect for travel. Flawless transmission
        is assured by the latest wireless technology engineered for audio
        synchronization with videos.
        <br />
        <br />
        More than a simple pair of headphones, this headset features a pair of
        built-in microphones for clear, hands-free calling when paired with a
        compatible smartphone. Controlling music and calls is also intuitive
        thanks to easy-access touch buttons on the earcups. Regardless of how
        you use the XX59 headphones, you can do so all day thanks to an
        impressive 30-hour battery life that can be rapidly recharged via USB-C.
      </ProductItemFeature>
      <ProductImageGallery
        image1D={xx59gallery1D}
        image1T={xx59gallery1T}
        image1M={xx59gallery1M}
        image2D={xx59gallery2D}
        image2T={xx59gallery2T}
        image2M={xx59gallery2M}
        image3D={xx59gallery3D}
        image3T={xx59gallery3T}
        image3M={xx59gallery3M}
        alt="Show casing XX59 Headphones"
      />
      <SuggestionBlockHeading>You may also like</SuggestionBlockHeading>
      <SuggestionBlockContainer>
        <SuggestionProductCard
          tabletSrc={xx99M2SuggestT}
          mobileSrc={xx99M2SuggestM}
          desktopSrc={xx99M2SuggestD}
          alt="XX99 Mark II Headphones"
          productName="XX99 mark II"
          route="/xx99markII"
        />
        <SuggestionProductCard
          tabletSrc={xx99M1SuggestT}
          mobileSrc={xx99M1SuggestM}
          desktopSrc={xx99M1SuggestD}
          alt="XX99 Mark I Headphones"
          productName="XX99 Mark I"
          route="/xx99markI"
        />
        <SuggestionProductCard
          tabletSrc={zx9SuggestT}
          mobileSrc={zx9SuggestM}
          desktopSrc={zx9SuggestD}
          alt="Zx9 Speaker"
          productName="zx9 speaker"
          route="/zx9"
        />
      </SuggestionBlockContainer>
      <CategoryBlockWrapper>
        <Category />
      </CategoryBlockWrapper>
      <BestGearBlock />
    </PagePadding>
  );
};
