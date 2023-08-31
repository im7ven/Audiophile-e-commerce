import styled from "styled-components";
import { block } from "../styles.utilities";

export const CategoryWrapper = styled.div`
  ${block}
  display: flex;
  flex-direction: column;
  gap: 6.8rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
    padding: 0 3.9rem;
  }

  @media screen and (min-width: 1024px) {
    gap: 3rem;
  }
`;
