import styled, { css } from "styled-components";

export const PagePadding = styled.div`
  padding: 0 2.4rem;
`;

export const homeBlockMargin = css`
  margin-bottom: 12rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 9.6rem;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 20rem;
  }
`;
