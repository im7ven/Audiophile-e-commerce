import { css, styled } from "styled-components";
import { block } from "../styles.utilities";

export const ProductGalleryWrapper = styled.div`
  ${block}
  display: grid;
  margin: 12rem auto;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 40% 60%;
    grid-template-rows: repeat(2, auto);
    max-height: 39rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 16rem auto;
    gap: 3.2rem;
    max-height: 59.2rem;
  }
`;

export const SmallImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 1150px) {
    gap: 3.2rem;
  }
`;

const baseImageStyle = css`
  margin: 0 auto;
  display: block;
  max-width: 32.7rem;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;

  @media screen and (min-width: 480px) {
    max-width: 40rem;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const SmallImage = styled.img`
  ${baseImageStyle}
  height: 17.4rem;

  @media screen and (min-width: 768px) {
    max-width: 100%;
  }

  @media screen and (min-width: 1150px) {
    height: 28rem;
  }
`;

export const LargeImage = styled.img`
  ${baseImageStyle}
  height: 36.8rem;

  @media screen and (min-width: 768px) {
    max-width: 94%;
    align-self: center;
  }

  @media screen and (min-width: 1150px) {
    max-width: 63.5rem;
    height: auto;
    max-height: 59.2rem;
  }
`;
