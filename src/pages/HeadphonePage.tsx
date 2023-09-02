import { Category } from "../components/Product/Category";
import { ProductFeature } from "../components/Product/ProductFeature";
import { BestGearBlock } from "../components/Shared/BestGearBlock";
import { CategoryPageHeading } from "../components/Shared/CategoryPageHeading";
import {
  xx59FeatureImgD,
  xx59FeatureImgM,
  xx59FeatureImgT,
  xx99M1FeatureImgD,
  xx99M1FeatureImgM,
  xx99M1FeatureImgT,
  xx99M2FeatureImgD,
  xx99M2FeatureImgM,
  xx99M2FeatureImgT,
} from "../images";
import { PagePadding, SeeProductBtn } from "../styles/Pages/styles.pages";
import {
  CategoryBlockWrapper,
  CategoryPageFeatureWrapper,
} from "../styles/Pages/sytles.category";
import { ProductOverline } from "../styles/Product/styles.ProductFeature";

export const HeadphonePage = () => {
  return (
    <>
      <CategoryPageHeading heading="speakers" />
      <PagePadding>
        <CategoryPageFeatureWrapper>
          <ProductFeature
            order="0"
            src={xx99M2FeatureImgD}
            tabletSrc={xx99M2FeatureImgT}
            mobileSrc={xx99M2FeatureImgM}
            overline={<ProductOverline>New product</ProductOverline>}
            heading="xx99 mark ii headphones"
            alt="XX99 Mark 2 Headphones"
            description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
            button={<SeeProductBtn to="xx99markII">See Product</SeeProductBtn>}
          ></ProductFeature>
          <ProductFeature
            order="1"
            src={xx99M1FeatureImgD}
            tabletSrc={xx99M1FeatureImgT}
            mobileSrc={xx99M1FeatureImgM}
            overline={<ProductOverline>New product</ProductOverline>}
            heading="xx99 mark i headphones"
            alt="XX99 Mark 1 Headphones"
            description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
            button={<SeeProductBtn to="xx99markI">See Product</SeeProductBtn>}
          ></ProductFeature>
          <ProductFeature
            order="0"
            src={xx59FeatureImgD}
            tabletSrc={xx59FeatureImgT}
            mobileSrc={xx59FeatureImgM}
            overline={<ProductOverline>New product</ProductOverline>}
            heading="xx59  headphones"
            alt="XX59  Headphones"
            description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
            button={<SeeProductBtn to="xx59">See Product</SeeProductBtn>}
          ></ProductFeature>
        </CategoryPageFeatureWrapper>
        <CategoryBlockWrapper>
          <Category />
        </CategoryBlockWrapper>
        <BestGearBlock />
      </PagePadding>
      ;
    </>
  );
};
