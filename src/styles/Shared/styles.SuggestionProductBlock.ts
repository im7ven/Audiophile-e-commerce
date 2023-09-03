import { styled } from "styled-components";
import { h2 } from "../styles.typography";
import { block } from "../styles.utilities";

export const SuggestionBlockHeading = styled.h2`
  ${h2}
  color: #000;
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 5.6rem;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 6.4rem;
  }
`;

export const SuggestionBlockContainer = styled.div`
  ${block}
  display: flex;
  flex-direction: column;
  gap: 5.6rem;

  @media screen and (min-width: 768px) {
    gap: 1.1rem;
    flex-direction: row;
    justify-content: center;
  }

  @media screen and (min-width: 1024px) {
    gap: 3rem;
  }
`;
