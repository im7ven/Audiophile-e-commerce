import { Category } from "../components/Product/Category";
import { ProductFeature } from "../components/Product/ProductFeature";
import { BestGearBlock } from "../components/Shared/BestGearBlock";
import { CategoryPageHeading } from "../components/Shared/CategoryPageHeading";
import { yx1FeatureImgT, yx1FeatureImgD, yx1FeatureImgM } from "../images";
import { PagePadding } from "../styles/Pages/styles.pages";
import {
  CategoryBlockWrapper,
  CategoryPageFeatureWrapper,
} from "../styles/Pages/sytles.category";
import { ProductOverline } from "../styles/Product/styles.ProductFeature";
import { PrimaryBtn } from "../styles/styles.button";

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
            heading="yx1 speaker"
            alt="YX1 Speaker"
            description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
            button={<PrimaryBtn>See Product</PrimaryBtn>}
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
