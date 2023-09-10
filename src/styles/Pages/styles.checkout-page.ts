import { styled } from "styled-components";
import { block } from "../styles.utilities";

export const CheckoutWrapper = styled.div`
  ${block}
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1150px) {
    flex-direction: row;
    align-items: start;
    gap: 3rem;
  }
`;
