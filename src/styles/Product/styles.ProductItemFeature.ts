import { styled } from "styled-components";
import { bodyText, h3 } from "../styles.typography";
import { block, caramel } from "../styles.utilities";

export const ProductItemFeatureWrapper = styled.div`
  ${block}
  display: flex;
  flex-direction: column;

  gap: 11.3rem;
  margin-top: 8.8rem;

  @media screen and (min-width: 768px) {
    gap: 12rem;
    margin-top: 12rem;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin-top: 16rem;
    gap: 16rem;
  }
`;

export const FeatureDetailWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    max-width: 63.5rem;
  }
`;

export const FeatureHeading = styled.h3`
  ${h3}
  color:#000;
  margin: 0;
`;

export const FeatureItemDescription = styled.p`
  ${bodyText}
  color: #979797;
  margin: 2.4rem 0 0 0;

  @media screen and (min-width: 768px) {
    margin-top: 3.2rem;
  }
`;

export const InBoxDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  min-width: 19.5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16rem;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    gap: 3.2rem;
  }
`;

export const FeatureItemList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListItemQuantity = styled.p`
  ${bodyText}
  ${caramel}
  font-weight: 700;
  display: inline;
`;

export const ListItem = styled.p`
  display: inline;
  margin-left: 2.1rem;
  ${bodyText}
  color: #979797;

  @media screen and( min-width: 768px) {
    margin-left: 2.4rem;
  }
`;
