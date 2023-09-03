import { ProductFeature } from "../components/Product/ProductFeature";
import { CategoryPageHeading } from "../components/Shared/CategoryPageHeading";
import {
  zx7FeatureImgD,
  zx7FeatureImgM,
  zx7FeatureImgT,
  zx9FeatureImgD,
  zx9FeatureImgM,
  zx9FeatureImgT,
} from "../images";
import {
  CategoryBlockWrapper,
  CategoryPageFeatureWrapper,
} from "../styles/Pages/styles.category-page";
import { ProductOverline } from "../styles/Product/styles.ProductFeature";
import { PagePadding, SeeProductBtn } from "../styles/Pages/styles.pages";
import { Category } from "../components/Shared/Category";
import { BestGearBlock } from "../components/Shared/BestGearBlock";

export const SpeakerPage = () => {
  return (
    <>
      <CategoryPageHeading heading="Speakers" />
      <PagePadding>
        <CategoryPageFeatureWrapper>
          <ProductFeature
            order="0"
            src={zx9FeatureImgD}
            tabletSrc={zx9FeatureImgT}
            mobileSrc={zx9FeatureImgM}
            overline={<ProductOverline>New product</ProductOverline>}
            heading="zx9 speaker"
            alt="ZX9 Speaker"
            description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
            button={<SeeProductBtn to="zx9">See Product</SeeProductBtn>}
          ></ProductFeature>
          <ProductFeature
            order="1"
            src={zx7FeatureImgD}
            tabletSrc={zx7FeatureImgT}
            mobileSrc={zx7FeatureImgM}
            heading="zx7 speaker"
            alt="ZX7 Speaker"
            description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
            button={<SeeProductBtn to="zx7">See Product</SeeProductBtn>}
          ></ProductFeature>
        </CategoryPageFeatureWrapper>
        <CategoryBlockWrapper>
          <Category />
        </CategoryBlockWrapper>
        <BestGearBlock />
      </PagePadding>
    </>
  );
};
