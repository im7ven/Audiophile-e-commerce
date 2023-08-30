import { bestGearD, bestGearM, bestGearT } from "../images";
import {
  BestGearDescription,
  BestGearDetails,
  BestGearHeading,
  BestGearImage,
  BestGearWrapper,
} from "../styles/styles.BestGearBlock";

export const BestGearBlock = () => {
  return (
    <BestGearWrapper>
      <BestGearImage>
        <picture>
          <source
            srcSet={bestGearT}
            media="(min-width: 480px) and (max-width: 1024px)"
            width="100%"
            height="300px"
          />
          <source
            srcSet={bestGearM}
            media="(max-width: 480px)"
            width="100%"
            height="300px"
          />
          <img
            src={bestGearD}
            alt="Responsive Image"
            width="540px"
            height="588px"
            style={{ borderRadius: "8px" }}
          />
        </picture>
      </BestGearImage>
      <BestGearDetails>
        <BestGearHeading>
          Bringing you the <span style={{ color: "#D87D4A" }}>best</span> audio
          gear
        </BestGearHeading>
        <BestGearDescription>
          Located at the heart of New York, Audiophile is the premier store for
          high end headphones, earphones, speakers and audio accessories. We
          have a large showroom and luxury demonstration rooms available for you
          to browse and experience a wide range of our products. Stop y our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.{" "}
        </BestGearDescription>
      </BestGearDetails>
    </BestGearWrapper>
  );
};
