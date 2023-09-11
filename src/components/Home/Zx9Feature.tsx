import { homeZx9D, homeZx9M, homeZx9T } from "../../images";
import {
  ImageWrapper,
  Zx9FeatureDescription,
  Zx9FeatureHeading,
  Zx9FeatureInfo,
  Zx9FeatureWrapper,
} from "../../styles/Home/styles.Zx9Feature";
import { SeeProductBtn } from "../../styles/Pages/styles.pages";

export const Zx9Feature = () => {
  return (
    <Zx9FeatureWrapper>
      <ImageWrapper>
        <img
          srcSet={`${homeZx9D} 1024w, ${homeZx9T} 768w, ${homeZx9M} 320w`}
          src={homeZx9T}
          width="100%"
        />
      </ImageWrapper>
      <Zx9FeatureInfo>
        <Zx9FeatureHeading>Zx9 speaker</Zx9FeatureHeading>
        <Zx9FeatureDescription>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Zx9FeatureDescription>
        <SeeProductBtn className="darkBg inline" to="/zx9">
          See product
        </SeeProductBtn>
      </Zx9FeatureInfo>
    </Zx9FeatureWrapper>
  );
};
