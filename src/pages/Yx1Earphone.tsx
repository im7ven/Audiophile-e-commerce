import { ProductImageGallery } from "../components/Product/ProductImageGallery";
import { ProductItem } from "../components/Product/ProductItem";
import { ProductItemFeature } from "../components/Product/ProductItemFeature";
import { BestGearBlock } from "../components/Shared/BestGearBlock";
import { Category } from "../components/Shared/Category";
import { ReturnButton } from "../components/Shared/ReturnButton";
import { SuggestionProductCard } from "../components/Shared/SuggestionProductCard";
import {
  xx59SuggestD,
  xx59SuggestM,
  xx59SuggestT,
  xx99M1SuggestD,
  xx99M1SuggestM,
  xx99M1SuggestT,
  yx1ProductImgD,
  yx1ProductImgM,
  yx1ProductImgT,
  yx1gallery1D,
  yx1gallery1M,
  yx1gallery1T,
  yx1gallery2D,
  yx1gallery2M,
  yx1gallery2T,
  yx1gallery3D,
  yx1gallery3M,
  yx1gallery3T,
  zx9SuggestD,
  zx9SuggestM,
  zx9SuggestT,
} from "../images";
import { CategoryBlockWrapper } from "../styles/Pages/styles.category-page";
import { PagePadding } from "../styles/Pages/styles.pages";
import { ProductItemOverline } from "../styles/Product/styles.ProductItem";
import {
  ListItem,
  ListItemQuantity,
} from "../styles/Product/styles.ProductItemFeature";
import {
  SuggestionBlockContainer,
  SuggestionBlockHeading,
} from "../styles/Shared/styles.SuggestionProductBlock";

export const Yx1Earphone = () => {
  return (
    <PagePadding>
      <ReturnButton route="/earphones" />
      <ProductItem
        tabletSrc={yx1ProductImgT}
        mobileSrc={yx1ProductImgM}
        src={yx1ProductImgD}
        productName="Yx1 wireless Earphones"
        alt="YX1 Wireless Earphones"
        price="$599"
        overline={<ProductItemOverline>New product</ProductItemOverline>}
        description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
      />
      <ProductItemFeature
        listItem={
          <>
            <li>
              <ListItemQuantity>2x</ListItemQuantity>
              <ListItem>Earphone Unit</ListItem>
            </li>
            <li>
              <ListItemQuantity>6x</ListItemQuantity>
              <ListItem>Multi-size-Earplugs</ListItem>
            </li>
            <li>
              <ListItemQuantity>1x</ListItemQuantity>
              <ListItem>User Manual</ListItem>
            </li>
            <li>
              <ListItemQuantity>1x</ListItemQuantity>
              <ListItem>USB-C Charging Cable</ListItem>
            </li>
            <li>
              <ListItemQuantity>1x</ListItemQuantity>
              <ListItem>Travel Pouch</ListItem>
            </li>
          </>
        }
      >
        Experience unrivalled stereo sound thanks to innovative acoustic
        technology. With improved ergonomics designed for full day wearing,
        these revolutionary earphones have been finely crafted to provide you
        with the perfect fit, delivering complete comfort all day long while
        enjoying exceptional noise isolation and truly immersive sound.
        <br />
        <br />
        The YX1 Wireless Earphones features customizable controls for volume,
        music, calls, and voice assistants built into both earbuds. The new
        7-hour battery life can be extended up to 28 hours with the charging
        case, giving you uninterrupted play time. Exquisite craftsmanship with a
        splash resistant design now available in an all new white and grey color
        scheme as well as the popular classic black.
      </ProductItemFeature>
      <ProductImageGallery
        image1D={yx1gallery1D}
        image1T={yx1gallery1T}
        image1M={yx1gallery1M}
        image2D={yx1gallery2D}
        image2T={yx1gallery2T}
        image2M={yx1gallery2M}
        image3D={yx1gallery3D}
        image3T={yx1gallery3T}
        image3M={yx1gallery3M}
        alt="Show casing YX1 Wireless earphones"
      />
      <SuggestionBlockHeading>You may also like</SuggestionBlockHeading>
      <SuggestionBlockContainer>
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
          productName="XX59"
          route="/xx59"
        />
        <SuggestionProductCard
          tabletSrc={zx9SuggestT}
          mobileSrc={zx9SuggestM}
          desktopSrc={zx9SuggestD}
          alt="ZX9 Speaker"
          productName="zx9 Speaker"
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
