import { Category } from "../components/Shared/Category";
import { ProductFeature } from "../components/Product/ProductFeature";
import { BestGearBlock } from "../components/Shared/BestGearBlock";
import { CategoryPageHeading } from "../components/Shared/CategoryPageHeading";
import { yx1FeatureImgT, yx1FeatureImgD, yx1FeatureImgM } from "../images";
import { PagePadding, SeeProductBtn } from "../styles/Pages/styles.pages";
import {
  CategoryBlockWrapper,
  CategoryPageFeatureWrapper,
} from "../styles/Pages/styles.category-page";
import { ProductOverline } from "../styles/Product/styles.ProductFeature";

export const EarphonePage = () => {
  return (
    <>
      <CategoryPageHeading heading="Earphones" />
      <PagePadding>
        <CategoryPageFeatureWrapper>
          <ProductFeature
            order="0"
            src={yx1FeatureImgD}
            tabletSrc={yx1FeatureImgT}
            mobileSrc={yx1FeatureImgM}
            overline={<ProductOverline>New product</ProductOverline>}
            heading="yx1 wireless earphones"
            alt="YX1 Speaker"
            description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
            button={<SeeProductBtn to="yx1wireless">See Product</SeeProductBtn>}
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
