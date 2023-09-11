import styled from "styled-components";
import { bodyText, h2 } from "../styles.typography";
import { flashWhiteBg } from "../styles.utilities";

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 44rem;
  background: #fff;
  border-radius: 8px;
  padding: 3.2rem;

  @media screen and (min-width: 768px) {
    padding: 48px;
  }
`;

export const CheckoutIcon = styled.img`
  width: 64px;
  margin-bottom: 2.3rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 3.3rem;
  }
`;

export const CheckoutModalHeading = styled.h2`
  ${h2}
  color: #000;
  margin: 0;
  line-height: 3rem;
`;

export const CheckoutMessage = styled.p`
  ${bodyText}
  margin: 1.6rem 0 2.4rem;

  @media screen and (min-width: 768px) {
    margin: 2.4rem 0 3.3rem;
  }
`;

export const OrderInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  justify-content: center;
  margin: 0 auto 2.3rem;
  flex-shrink: 0;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin: 0 auto 4.6rem;
  }
`;

export const PurchaseContainer = styled.div`
  ${flashWhiteBg}
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex-grow: 1;
  padding: 2.4rem 2.4rem 2.4rem 0;

  @media screen and (min-width: 768px) {
    gap: 1.6rem;
  }
`;

export const PriceContainer = styled.div`
  background: #000;
  flex-grow: 1;
  padding: 1.6rem 2.4rem 1.9rem;
  display: flex;
  align-items: end;
`;

export const TotalWrapper = styled.div`
  algin-self: end;
`;

export const GrandTotal = styled.p`
  ${bodyText}
  text-transform: uppercase;
  margin: 0 0 8px;
`;

export const PurchaseImg = styled.img`
  width: 60px;
`;

export const PurchaseName = styled.p`
  ${bodyText}
  color: #000;
  text-transform: uppercase;
`;

export const Hr = styled.hr`
  color: blue;
  margin: 0 0 0 2.4rem;
`;

export const ExpandProductBtn = styled.button`
  border: 0;
  outline: 0;
  background: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.214px;
  color: #979797;
  padding-left: 2.4rem;
`;
