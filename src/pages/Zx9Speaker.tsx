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
  zx7SuggestD,
  zx7SuggestM,
  zx7SuggestT,
  zx9Cart,
  zx9ProductImgD,
  zx9ProductImgM,
  zx9ProductImgT,
  zx9gallery1D,
  zx9gallery1M,
  zx9gallery1T,
  zx9gallery2D,
  zx9gallery2M,
  zx9gallery2T,
  zx9gallery3D,
  zx9gallery3M,
  zx9gallery3T,
} from "../images";
import { CategoryBlockWrapper } from "../styles/Pages/styles.category-page";
import { PagePadding } from "../styles/Pages/styles.pages";
import { ProductItemOverline } from "../styles/Product/styles.ProductItem";
import {
  ListItemQuantity,
  ListItem,
} from "../styles/Product/styles.ProductItemFeature";
import {
  SuggestionBlockHeading,
  SuggestionBlockContainer,
} from "../styles/Shared/styles.SuggestionProductBlock";
import { PrimaryBtn } from "../styles/styles.button";

export const Zx9Speaker = () => {
  const { addToCart, cart } = useCart();
  const [productQuantity, setProductQuantity] = useState(1);

  const handleAddQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const handleRemoveQuantity = () => {
    productQuantity <= 1 ? null : setProductQuantity(productQuantity - 1);
  };

  const handleAddProduct = () => {
    return addToCart(
      1,
      zx9Cart,
      "zx9",
      4500,
      4500 * productQuantity,
      productQuantity
    );
  };

  console.log(cart);

  return (
    <PagePadding>
      <ReturnButton route="/speakers" />
      <ProductItem
        onRemove={handleRemoveQuantity}
        onAdd={handleAddQuantity}
        quantity={productQuantity}
        tabletSrc={zx9ProductImgT}
        mobileSrc={zx9ProductImgM}
        src={zx9ProductImgD}
        productName="Zx9 Speaker"
        alt="ZX9 Speaker"
        price="$4,500"
        addToCartBtn={
          <PrimaryBtn onClick={handleAddProduct}>Add to Cart</PrimaryBtn>
        }
        description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        overline={<ProductItemOverline>New product</ProductItemOverline>}
      />
      <ProductItemFeature
        listItem={
          <>
            <li>
              <ListItemQuantity>2x</ListItemQuantity>
              <ListItem>Speaker Unit</ListItem>
            </li>
            <li>
              <ListItemQuantity>2x</ListItemQuantity>
              <ListItem>Speaker Cloth Panel</ListItem>
            </li>
            <li>
              <ListItemQuantity>1x</ListItemQuantity>
              <ListItem>User Manual</ListItem>
            </li>
            <li>
              <ListItemQuantity>1x</ListItemQuantity>
              <ListItem>3.5mm 10m Audio Cable</ListItem>
            </li>
            <li>
              <ListItemQuantity>1x</ListItemQuantity>
              <ListItem>10m Optical Cable</ListItem>
            </li>
          </>
        }
      >
        Connect via Bluetooth or nearly any wired source. This speaker features
        optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs,
        allowing you to have up to five wired source devices connected for easy
        switching. Improved Bluetooth technology offers near lossless audio
        quality at up to 328ft (100m).
        <br />
        <br />
        Discover clear, more natural sounding highs than the competition with
        ZX9’s signature planar diaphragm tweeter. Equally important is its
        powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit.
        You’ll be able to enjoy equal sound quality whether in a large room or
        small den. Furthermore, you will experience new sensations from old
        songs since it can respond to even the subtle waveforms.
      </ProductItemFeature>
      <ProductImageGallery
        image1D={zx9gallery1D}
        image1T={zx9gallery1T}
        image1M={zx9gallery1M}
        image2D={zx9gallery2D}
        image2T={zx9gallery2T}
        image2M={zx9gallery2M}
        image3D={zx9gallery3D}
        image3T={zx9gallery3T}
        image3M={zx9gallery3M}
        alt="Show casing ZX9 Speaker"
      />
      <SuggestionBlockHeading>You may also like</SuggestionBlockHeading>
      <SuggestionBlockContainer>
        <SuggestionProductCard
          tabletSrc={zx7SuggestT}
          mobileSrc={zx7SuggestM}
          desktopSrc={zx7SuggestD}
          alt="Zx7 Speaker"
          productName="Zx7 Speaker"
          route="/zx7"
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
          tabletSrc={xx59SuggestT}
          mobileSrc={xx59SuggestM}
          desktopSrc={xx59SuggestD}
          alt="XX59 Headphones"
          productName="xx59"
          route="/xx59"
        />
      </SuggestionBlockContainer>
      <CategoryBlockWrapper>
        <Category />
      </CategoryBlockWrapper>
      <BestGearBlock />
    </PagePadding>
  );
};
