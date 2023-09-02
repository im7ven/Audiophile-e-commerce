import styled from "styled-components";
import { block, grid1x2M_D } from "../styles.utilities";
import { bodyText, h2 } from "../styles.typography";
import { homeBlockMargin } from "../styles.MainContainer";

export const BestGearWrapper = styled.div`
  ${grid1x2M_D}
  ${block}
  ${homeBlockMargin}
  text-align: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    gap: 12.5rem;
    text-align: left;
  }
`;

export const BestGearImage = styled.div`
  height: 30rem;

  @media screen and (min-width: 1024px) {
    height: 58.8rem;
    order: 2;
  }
`;

export const BestGearDetails = styled.div`
  align-center: center;
`;

export const BestGearHeading = styled.h2`
  ${h2}
  margin: 4rem 0 3.2rem;

  @media screen and (min-width: 768px) {
    margin-top: 6.3rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 0 3.2rem 0;
  }
`;

export const BestGearDescription = styled.p`
  ${bodyText}
`;
