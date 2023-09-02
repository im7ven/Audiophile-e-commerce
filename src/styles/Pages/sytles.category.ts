import { styled } from "styled-components";

export const CategoryPageFeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12rem;
  margin-top: 6.4erm;

  @media screen and (min-width: 768px) {
    margin-top: 12rem;
  }

  @media screen and (min-width: 1024px) {
    gap: 16rem;
    margin-top: 16rem;
  }
`;

export const CategoryBlockWrapper = styled.div`
  margin: 17.2rem 0 12rem;

  @media screen and (min-width: 1024px) {
    margin: 24.1rem 0 16rem;
  }
`;
