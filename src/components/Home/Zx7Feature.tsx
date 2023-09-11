import {
  Zx7Container,
  Zx7DetailWrapper,
  Zx7FeatureHeading,
} from "../../styles/Home/styles.Zx7Feature";
import { SeeProductBtn } from "../../styles/Pages/styles.pages";

export const Zx7Feature = () => {
  return (
    <Zx7Container>
      <Zx7DetailWrapper>
        <Zx7FeatureHeading>zx7 Speaker</Zx7FeatureHeading>
        <SeeProductBtn className="inline outline" to="/zx7">
          See product
        </SeeProductBtn>
      </Zx7DetailWrapper>
    </Zx7Container>
  );
};
