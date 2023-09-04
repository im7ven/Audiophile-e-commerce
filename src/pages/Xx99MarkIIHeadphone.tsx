import { ProductImageGallery } from "../components/Product/ProductImageGallery";
import { ProductItem } from "../components/Product/ProductItem";
import { ProductItemFeature } from "../components/Product/ProductItemFeature";
import { BestGearBlock } from "../components/Shared/BestGearBlock";
import { Category } from "../components/Shared/Category";
import { ReturnButton } from "../components/Shared/ReturnButton";
import { SuggestionProductCard } from "../components/Shared/SuggestionProductCard";
import {
  xx99M2ProductImgT,
  xx99M2ProductImgM,
  xx99M2ProductImgD,
  xx99M2gallery1D,
  xx99M2gallery1T,
  xx99M2gallery1M,
  xx99M2gallery2D,
  xx99M2gallery2T,
  xx99M2gallery2M,
  xx99M2gallery3D,
  xx99M2gallery3T,
  xx99M2gallery3M,
  xx99M1SuggestT,
  xx99M1SuggestM,
  xx99M1SuggestD,
  xx59SuggestT,
  xx59SuggestM,
  xx59SuggestD,
  zx9SuggestT,
  zx9SuggestM,
  zx9SuggestD,
} from "../images";
import { CategoryBlockWrapper } from "../styles/Pages/styles.category-page";
import { PagePadding } from "../styles/Pages/styles.pages";
import {
  ListItemQuantity,
  ListItem,
} from "../styles/Product/styles.ProductItemFeature";
import {
  SuggestionBlockHeading,
  SuggestionBlockContainer,
} from "../styles/Shared/styles.SuggestionProductBlock";

export const Xx99MarkIIHeadphone = () => {
  return (
    <PagePadding>
      <ReturnButton route="/headphones" />
      <ProductItem
        tabletSrc={xx99M2ProductImgT}
        mobileSrc={xx99M2ProductImgM}
        src={xx99M2ProductImgD}
        productName="XX99 Mark II Headphones"
        alt="XX99 Mark II Headphones"
        price="$2,999"
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
