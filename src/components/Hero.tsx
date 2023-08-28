import { Link } from "react-router-dom";
import {
  H1,
  HeroContent,
  HeroDescription,
  HeroInfo,
  HeroOverline,
  HeroWrapper,
} from "../styles/styles.Hero";
import { PrimaryBtn } from "../styles/styles.button";

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
          <Link to={"/"}>
            <PrimaryBtn>See product</PrimaryBtn>
          </Link>
        </HeroInfo>
      </HeroContent>
    </HeroWrapper>
  );
};
