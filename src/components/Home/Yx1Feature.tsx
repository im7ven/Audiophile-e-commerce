import {
  Yx1DetailContainer,
  Yx1FeatureHeading,
  Yx1FeatureWrapper,
  Yx1ImgContainer,
  Yx1InfoWrapper,
} from "../../styles/Home/styles.Yx1Feature";
import { SeeProductBtn } from "../../styles/Pages/styles.pages";

export const Yx1Feature = () => {
  return (
    <Yx1FeatureWrapper>
      <Yx1ImgContainer />
      <Yx1DetailContainer>
        <Yx1InfoWrapper>
          <Yx1FeatureHeading>Yx1 earphones</Yx1FeatureHeading>
          <SeeProductBtn to="/yx1" className="inline outline">
            See product
          </SeeProductBtn>
        </Yx1InfoWrapper>
      </Yx1DetailContainer>
    </Yx1FeatureWrapper>
  );
};
