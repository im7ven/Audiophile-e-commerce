import {
  H1,
  HeroContent,
  HeroDescription,
  HeroInfo,
  HeroOverline,
  HeroWrapper,
} from "../../styles/Home/styles.Hero";
import { SeeProductBtn } from "../../styles/Pages/styles.pages";

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroInfo>
          <HeroOverline>New Product</HeroOverline>
          <H1>xx99 Mark II Headphones</H1>
          <HeroDescription>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </HeroDescription>
          <SeeProductBtn className="inline" to="/xx99markII">
            See product
          </SeeProductBtn>
        </HeroInfo>
      </HeroContent>
    </HeroWrapper>
  );
};
