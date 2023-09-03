import styled from "styled-components";
import { h5 } from "../styles.typography";

export const SuggestionCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.img`
  margin: 0 auto;
  display: block;
  height: 12rem;
  object-fit: cover;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 22.3rem;
    height: 31.8rem;
  }

  @media screen and (min-width: 1150px) {
    width: 35rem;
  }
`;

export const CardHeading = styled.h3`
  ${h5}
  color: #000;
  margin: 3.2rem auto;

  @media screen and (min-width: 768px) {
    margin-top: 4rem;
  }
`;
