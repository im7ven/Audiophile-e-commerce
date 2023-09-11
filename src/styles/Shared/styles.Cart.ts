import { css, styled } from "styled-components";
import { bodyText, h6, subTitle } from "../styles.typography";
import {
  atomicTangerineBg,
  block,
  caramel,
  caramelBg,
  flashWhiteBg,
} from "../styles.utilities";
import { Link } from "react-router-dom";

const PrimaryFlexLayout = css`
  display: flex;
  justify-content: space-between;
`;

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
`;

export const ModalOverlay = styled.div`
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

  &.checkout-modal {
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 2.4rem;
  }
`;

export const CartContainer = styled.div`
  width: 100%;
  max-width: 32.7rem;
  height: auto;
  background: #fff;
  padding: 1rem;
  border-radius: 8px;

  @media screen and (min-width: 350px) {
    padding: 3.2rem;
  }

  @media screen and (min-width: 768px) {
    max-width: 37rem;
  }
`;

export const CartHeader = styled.header`
  ${PrimaryFlexLayout}
  align-items: center;
`;

export const CartHeading = styled.h3`
  ${h6}
  color: #000;
  margin: 0;
`;

export const ClearCartBtn = styled.button`
  ${bodyText}
  outline: 0;
  border: 0;
  background: 0;
  text-decoration: underline;

  &:hover {
    ${caramel}
    transition: 0.3s
  }
`;

export const CartBody = styled.div`
  ${PrimaryFlexLayout}
  flex-direction: column;
  gap: 2.4rem;
  text-transform: uppercase;
`;

export const ProductWrapper = styled.div`
  ${PrimaryFlexLayout}
  align-items: center;

  &.checkout-modal {
    justify-content: center;
    gap: 4.2rem;
  }

  &.spacing {
    margin-bottom: 2.4rem;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const ProductThumbnail = styled.img`
  width: 64px;
  border-radius: 8px;
`;

export const ProductName = styled.p`
  ${bodyText}
  text-transform: uppercase;
  font-weight: 700;
  color: #000;
  margin: 0;
`;

export const ProductPrice = styled.p`
  ${bodyText}
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
`;

export const CartQuantitySelector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 9.6rem;
  height: 3.2rem;
  ${flashWhiteBg}
`;

export const Quantity = styled.p`
  ${subTitle}
  color: #000;
`;

export const CartFooter = styled.footer`
  ${PrimaryFlexLayout}
  flex-wrap: wrap;
  align-items: center;
  column-gap: 2.4rem;
`;

export const TotalLabel = styled.p`
  ${bodyText}
  text-transform: uppercase;
`;

export const CartTotal = styled.p`
  ${h6}
  color: #000;
  margin: 0;

  &.light {
    color: #fff;
  }
`;

export const CartPlaceHolder = styled.p`
  ${bodyText}
`;

export const CheckOutBtn = styled(Link)`
  ${caramelBg}
  ${subTitle}
  padding:  1.6rem 5.5rem;
  width: 100%;
  text-decoration: none;
  color: #fff;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 1.6rem 6.2rem;
  }

  &:hover {
    transition: 0.3s;
    ${atomicTangerineBg}
  }
`;
