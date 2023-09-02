import styled from "styled-components";
import { bodyText, h2, overline } from "../styles.typography";
import { block, caramel } from "../styles.utilities";

interface Props {
  order: string;
}

export const ProductFeatureContainer = styled.div`
  ${block}
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media screen and (min-width: 768px) {
    gap: 5.2rem;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 12.5rem;
    align-items: center;
  }
`;

export const Picture = styled.picture<Props>`
  @media screen and (min-width: 1024px) {
    order: ${(props) => props.order};
  }
`;

export const ProductFeatureImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 35.2rem;
  border-radius: 8px;
  max-width: 32.7rem;
  display: block;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 68.9rem;
  }

  @media screen and (min-width: 1024px) {
    height: 56rem;
  }
`;

export const ProductFeatureDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    gap: 0;
    padding: 0;
  }

  @media screen and (min-width: 1024px) {
    text-align: left;
    align-items: flex-start;
  }
`;

export const ProductOverline = styled.p`
  ${overline}
  ${caramel}
  margin: 0;

  @media screen and (min-width: 768px) {
    margin-bottom: 1.6rem;
  }
`;

export const ProductFeatureHeading = styled.h2`
  ${h2}
  color: #000;
  margin: 0;

  @media screen and (min-width: 768px) {
    margin-bottom: 3.2rem;
  }
`;

export const ProductFeatureDescription = styled.p`
  ${bodyText}
  margin: 0;
  align-self: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 2.4rem;
    max-width: 57.2rem;
  }

  @media screen and (min-width: 1024px) {
    max-width: 44.5rem;
    align-self: flex-start;
  }
`;
