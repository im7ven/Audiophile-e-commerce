import {
  Zx7Container,
  Zx7DetailWrapper,
  Zx7FeatureHeading,
} from "../../styles/Home/styles.Zx7Feature";
import { OutlineBtn } from "../../styles/styles.button";

export const Zx7Feature = () => {
  return (
    <Zx7Container>
      <Zx7DetailWrapper>
        <Zx7FeatureHeading>zx7 Speaker</Zx7FeatureHeading>
        <OutlineBtn>See product</OutlineBtn>
      </Zx7DetailWrapper>
    </Zx7Container>
  );
};
