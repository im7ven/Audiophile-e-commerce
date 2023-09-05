import { styled } from "styled-components";
import { block } from "../styles.utilities";

export const CartOverlayWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
`;

export const CartOverlay = styled.div`
  ${block}
  display: flex;
  justify-content: end;
  padding: 12rem 2.4rem;

  @media screen and (min-width: 768px) {
    padding: 12rem 3.2rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 14rem 3rem;
  }
`;

export const CartContainer = styled.div`
  width: 100%;
  max-width: 32.7rem;
  height: 48.8rem;
  background: #fff;

  @media screen and (min-width: 768px) {
    max-width: 37rem;
  }
`;
