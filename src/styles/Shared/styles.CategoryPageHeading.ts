import { styled } from "styled-components";
import { h2 } from "../styles.typography";

export const PageHeadingContainer = styled.div`
  background: #191919;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10.2rem;

  @media screen and (min-width: 768px) {
    height: 24.6rem;
  }

  @media screen and (min-width: 1024px) {
    height: 23.9rem;
  }
`;

export const PageHeading = styled.h2`
  ${h2}
  color: #fff;
  margin: 0;
`;
