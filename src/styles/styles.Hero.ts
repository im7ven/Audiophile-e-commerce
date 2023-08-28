import { styled } from "styled-components";
import { heroImg, heroMobile, heroTablet } from "../images";
import { bodyText, h1, overline } from "./styles.typography";
import { block, grid1x2M_D } from "./styles.utilities";

export const HeroWrapper = styled.div`
  background-color: #1a1a1a;
  height: 55rem;
  background-image: url(${heroMobile});
  background-size: 40rem;
  background-repeat: no-repeat;
  background-position: center -9rem;

  @media screen and (min-width: 768px) {
    background-image: url(${heroTablet});
    height: 68rem;
    background-size: 82rem;
    background-position: center -10rem;
    background-color: #181818;
  }

  @media screen and (min-width: 1024px) {
    background-image: none;
    height: 63.2rem;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: bottom;
  height: 100%;
  
  @media screen and (min-width: 1024px) {
    ${grid1x2M_D}
    ${block}
    padding: 0 16.5rem;
    background: url(${heroImg}) 0rem -10rem / 100% 115% no-repeat;
`;

export const HeroInfo = styled.div`
  align-self: center;
  text-align: center;
  max-width: 30rem;

  @media screen and (min-width: 768px) {
    max-width: 40rem;
    margin-bottom: 10rem;
  }

  @media screen and (min-width: 1024px) {
    text-align: left;
    margin-bottom: 2rem;
  }
`;

export const HeroOverline = styled.h3`
  ${overline}
  color: #979797;
  margin: 0;
`;

export const H1 = styled.h1`
  ${h1}
  color: #fff;
  margin: 2.4rem 0;
`;

export const HeroDescription = styled.p`
  ${bodyText}
  margin-bottom: 4rem;
  max-width: 35rem;
`;
