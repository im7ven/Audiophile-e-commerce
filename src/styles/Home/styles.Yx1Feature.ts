import { styled } from "styled-components";
import { homeYx1D, homeYx1M, homeYx1T } from "../../images";
import { block, flashWhiteBg, grid1x2M_T } from "../styles.utilities";

export const Yx1FeatureWrapper = styled.div`
  ${grid1x2M_T}
  ${block}
  gap: 2.4rem;
  margin-bottom: 12rem;

  @media screen and (min-width: 768px) {
    gap: 1rem;
    margin-bottom: 9.6rem;
  }

  @media screen and (min-width: 1024px) {
    gap: 3rem;
    margin-bottom: 20rem;
  }
`;

export const Yx1ImgContainer = styled.div`
  background-image: url(${homeYx1M});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  height: 20rem;

  @media screen and (min-width: 768px) {
    height: 32rem;
    background-image: url(${homeYx1T});
  }

  @media screen and (min-width: 1024px) {
    background-image: url(${homeYx1D});
  }
`;

export const Yx1DetailContainer = styled.div`
  ${flashWhiteBg};
  border-radius: 8px;
  height: 20rem;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: auto;
  }
`;

export const Yx1InfoWrapper = styled.div`
  margin-left: 2.25rem;

  @media screen and (min-width: 768px) {
    margin-left: 4.25rem;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 9.65rem;
  }
`;

export const Yx1FeatureHeading = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  line-height: 3.85rem;
  color: #000;
  margin-bottom: 3.2rem;
`;
