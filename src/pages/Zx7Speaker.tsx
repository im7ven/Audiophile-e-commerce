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
  zx7Cart,
  zx7ProductImgD,
  zx7ProductImgM,
  zx7ProductImgT,
  zx7gallery1D,
  zx7gallery1M,
  zx7gallery1T,
  zx7gallery2D,
  zx7gallery2M,
  zx7gallery2T,
  zx7gallery3D,
  zx7gallery3M,
  zx7gallery3T,
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

export const Zx7Speaker = () => {
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
      2,
      zx7Cart,
      "zx7",
      3500,
      3500 * productQuantity,
      productQuantity
    );
  };

  return (
    <PagePadding>
      <ReturnButton route="/speakers" />
      <ProductItem
        onRemove={handleRemoveQuantity}
        onAdd={handleAddQuantity}
        quantity={productQuantity}
        tabletSrc={zx7ProductImgT}
        mobileSrc={zx7ProductImgM}
        src={zx7ProductImgD}
        productName="Zx7 Speaker"
        alt="ZX7 Speaker"
        price="$3,500"
        addToCartBtn={
          <PrimaryBtn onClick={handleAddProduct}>Add to Cart</PrimaryBtn>
        }
        description="Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
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
              <ListItem>3.5mm 7.5m Audio Cable</ListItem>
            </li>
            <li>
              <ListItemQuantity>1x</ListItemQuantity>
              <ListItem>7.5m Optical Cable</ListItem>
            </li>
          </>
        }
      >
        Reap the advantages of a flat diaphragm tweeter cone. This provides a
        fast response rate and excellent high frequencies that lower tiered
        bookshelf speakers cannot provide. The woofers are made from aluminum
        that produces a unique and clear sound. XLR inputs allow you to connect
        to a mixer for more advanced usage.
        <br />
        <br />
        The ZX7 speaker is the perfect blend of stylish design and high
        performance. It houses an encased MDF wooden enclosure which minimises
        acoustic resonance. Dual connectivity allows pairing through bluetooth
        or traditional optical and RCA input. Switch input sources and control
        volume at your finger tips with the included wireless remote. This
        versatile speaker is equipped to deliver an authentic listening
        experience.
      </ProductItemFeature>
      <ProductImageGallery
        image1D={zx7gallery1D}
        image1T={zx7gallery1T}
        image1M={zx7gallery1M}
        image2D={zx7gallery2D}
        image2T={zx7gallery2T}
        image2M={zx7gallery2M}
        image3D={zx7gallery3D}
        image3T={zx7gallery3T}
        image3M={zx7gallery3M}
        alt="Show casing ZX9 Speaker"
      />
      <SuggestionBlockHeading>You may also like</SuggestionBlockHeading>
      <SuggestionBlockContainer>
        <SuggestionProductCard
          tabletSrc={zx9SuggestT}
          mobileSrc={zx9SuggestM}
          desktopSrc={zx9SuggestD}
          alt="Zx9 Speaker"
          productName="Zx9 Speaker"
          route="/zx9"
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
