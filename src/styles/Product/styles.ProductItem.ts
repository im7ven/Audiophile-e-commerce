import { styled } from "styled-components";
import { bodyText, h2, h6, overline } from "../styles.typography";
import { block, caramel } from "../styles.utilities";

export const ProductItemContainer = styled.div`
  ${block}
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media screen and (min-width: 768px) {
    gap: 6.95rem;
    flex-direction: row;
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    gap: 12.5rem;
  }
`;

export const ProductItemImage = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 32rem;
  height: 32.7rem;
  margin: 0 auto;
  display: block;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 28.1rem;
    height: 48rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 54rem;
    width: 100%;
    height: 56rem;
  }

  @media screen and (min-width: 1160px) {
    width: 54rem;
  }
`;

export const ProductItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  margin: 0 auto;
`;

export const ProductItemOverline = styled.p`
  ${overline}
  ${caramel}
  margin: 0.8rem 0 2.4rem;

  @media screen and (min-width: 768px) {
    margin: 0 0 1.7rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 0 1.6rem;
  }
`;

export const ProductItemName = styled.h2`
  ${h2}
  color: #000;
  margin: 0 0 2.4rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 3.2rem;
  }
`;

export const ProductItemDescription = styled.p`
  ${bodyText}
  color: #979797;
  margin: 0 0 2.4rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 3.2rem;
  }
`;

export const ProductItemPrice = styled.p`
  ${h6}
  color: #000;
  margin: 0 0 3.1rem;

  @media screen and (min-width: 1024px) {
    margin-bottom: 4.7rem;
  }
`;

export const ProductItemBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
