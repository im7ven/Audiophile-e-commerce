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
  xx59SuggestD,
  xx59SuggestM,
  xx59SuggestT,
  xx99M1SuggestD,
  xx99M1SuggestM,
  xx99M1SuggestT,
  xx99M2Cart,
  xx99M2ProductImgD,
  xx99M2ProductImgM,
  xx99M2ProductImgT,
  xx99M2gallery1D,
  xx99M2gallery1M,
  xx99M2gallery1T,
  xx99M2gallery2D,
  xx99M2gallery2M,
  xx99M2gallery2T,
  xx99M2gallery3D,
  xx99M2gallery3M,
  xx99M2gallery3T,
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

export const Xx99MarkIIHeadphone = () => {
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
      4,
      xx99M2Cart,
      "xx99 Mark II",
      2999,
      2999 * productQuantity,
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
        tabletSrc={xx99M2ProductImgT}
        mobileSrc={xx99M2ProductImgM}
        src={xx99M2ProductImgD}
        productName="XX99 Mark II Headphones"
        alt="XX99 Mark II Headphones"
        price="$2,999"
        addToCartBtn={
          <PrimaryBtn onClick={handleAddProduct}>Add to Cart</PrimaryBtn>
        }
        description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
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
            <li>
              <ListItemQuantity>1x</ListItemQuantity>
              <ListItem>Travel Bag</ListItem>
            </li>
          </>
        }
      >
        Featuring a genuine leather head strap and premium earcups, these
        headphones deliver superior comfort for those who like to enjoy endless
        listening. It includes intuitive controls designed for any situation.
        Whether you’re taking a business call or just in your own personal
        space, the auto on/off and pause features ensure that you’ll never miss
        a beat.
        <br />
        <br />
        The advanced Active Noise Cancellation with built-in equalizer allow you
        to experience your audio world on your terms. It lets you enjoy your
        audio in peace, but quickly interact with your surroundings when you
        need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour
        battery life, the XX99 Mark II headphones gives you superior sound,
        cutting-edge technology, and a modern design aesthetic.
      </ProductItemFeature>
      <ProductImageGallery
        image1D={xx99M2gallery1D}
        image1T={xx99M2gallery1T}
        image1M={xx99M2gallery1M}
        image2D={xx99M2gallery2D}
        image2T={xx99M2gallery2T}
        image2M={xx99M2gallery2M}
        image3D={xx99M2gallery3D}
        image3T={xx99M2gallery3T}
        image3M={xx99M2gallery3M}
        alt="Show casing XX99 Mark II Headphones"
      />
      <SuggestionBlockHeading>You may also like</SuggestionBlockHeading>
      <SuggestionBlockContainer>
        <SuggestionProductCard
          tabletSrc={xx99M1SuggestT}
          mobileSrc={xx99M1SuggestM}
          desktopSrc={xx99M1SuggestD}
          alt="XX99 Mark I Headphones"
          productName="XX99 mark I"
          route="/xx99markI"
        />
        <SuggestionProductCard
          tabletSrc={xx59SuggestT}
          mobileSrc={xx59SuggestM}
          desktopSrc={xx59SuggestD}
          alt="XX59 Headphones"
          productName="XX59"
          route="/xx59"
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
