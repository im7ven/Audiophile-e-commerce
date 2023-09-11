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
  xx99M1Cart,
  xx99M1ProductImgD,
  xx99M1ProductImgM,
  xx99M1ProductImgT,
  xx99M1gallery1D,
  xx99M1gallery1M,
  xx99M1gallery1T,
  xx99M1gallery2D,
  xx99M1gallery2M,
  xx99M1gallery2T,
  xx99M1gallery3D,
  xx99M1gallery3M,
  xx99M1gallery3T,
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

export const Xx99MarkIHeadphone = () => {
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
      3,
      xx99M1Cart,
      "xx99 Mark I",
      1750,
      1750 * productQuantity,
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
        tabletSrc={xx99M1ProductImgT}
        mobileSrc={xx99M1ProductImgM}
        src={xx99M1ProductImgD}
        productName="XX99 Mark I Headphones"
        alt="XX99 Mark I Headphones"
        price="$1,750"
        addToCartBtn={
          <PrimaryBtn onClick={handleAddProduct}>Add to Cart</PrimaryBtn>
        }
        description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. "
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
        As the headphones all others are measured against, the XX99 Mark I
        demonstrates over five decades of audio expertise, redefining the
        critical listening experience. This pair of closed-back headphones are
        made of industrial, aerospace-grade materials to emphasize durability at
        a relatively light weight of 11 oz.
        <br />
        <br />
        From the handcrafted microfiber ear cushions to the robust metal
        headband with inner damping element, the components work together to
        deliver comfort and uncompromising sound. Its closed-back design
        delivers up to 27 dB of passive noise cancellation, reducing resonance
        by reflecting sound to a dedicated absorber. For connectivity, a
        specially tuned cable is included with a balanced gold connector.
      </ProductItemFeature>
      <ProductImageGallery
        image1D={xx99M1gallery1D}
        image1T={xx99M1gallery1T}
        image1M={xx99M1gallery1M}
        image2D={xx99M1gallery2D}
        image2T={xx99M1gallery2T}
        image2M={xx99M1gallery2M}
        image3D={xx99M1gallery3D}
        image3T={xx99M1gallery3T}
        image3M={xx99M1gallery3M}
        alt="Show casing XX99 Mark I Headphones"
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
