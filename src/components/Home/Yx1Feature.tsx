import {
  Yx1DetailContainer,
  Yx1FeatureHeading,
  Yx1FeatureWrapper,
  Yx1ImgContainer,
  Yx1InfoWrapper,
} from "../../styles/Home/styles.Yx1Feature";
import { OutlineBtn } from "../../styles/styles.button";

export const Yx1Feature = () => {
  return (
    <Yx1FeatureWrapper>
      <Yx1ImgContainer />
      <Yx1DetailContainer>
        <Yx1InfoWrapper>
          <Yx1FeatureHeading>Yx1 earphones</Yx1FeatureHeading>
          <OutlineBtn>See product</OutlineBtn>
        </Yx1InfoWrapper>
      </Yx1DetailContainer>
    </Yx1FeatureWrapper>
  );
};
