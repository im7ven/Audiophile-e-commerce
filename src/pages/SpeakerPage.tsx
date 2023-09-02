import { ProductFeature } from "../components/Product/ProductFeature";
import { zx9FeatureImgD, zx9FeatureImgM, zx9FeatureImgT } from "../images";
import { ProductOverline } from "../styles/Product/styles.ProductFeature";
import { MainContainer } from "../styles/styles.MainContainer";
import { PrimaryBtn } from "../styles/styles.button";

export const SpeakerPage = () => {
  return (
    <MainContainer>
      <ProductFeature
        order="0"
        src={zx9FeatureImgD}
        tabletSrc={zx9FeatureImgT}
        mobileSrc={zx9FeatureImgM}
        overline={<ProductOverline>New product</ProductOverline>}
        heading="zx9 speaker"
        alt="ZX9 Speaker"
        description="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        button={<PrimaryBtn>See Product</PrimaryBtn>}
      ></ProductFeature>
    </MainContainer>
  );
};
