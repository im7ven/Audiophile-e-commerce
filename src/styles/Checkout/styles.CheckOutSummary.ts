import { styled } from "styled-components";
import { bodyText, h6 } from "../styles.typography";
import { Link } from "react-router-dom";
import { btnBaseStyle } from "../styles.button";
import { caramelBg } from "../styles.utilities";

export const SummaryContainer = styled.div`
  padding: 3.2rem 2.4rem;
  margin: 3.2rem auto 11.6rem;
  background: #fff;
  border-radius: 8px;
  width: 100%;
  max-width: 65rem;

  @media screen and (min-width: 768px) {
    padding: 3.2rem 3.3rem;
  }

  @media screen and (min-width: 1150px) {
    margin: 0;
    max-width: 100%;
  }
`;

export const SummaryHeading = styled.h3`
  ${h6}
  color: #000;
  line-height: normal;
`;

export const ProductSection = styled.div`
  margin: 8px 0 3.2rem;
`;

export const PriceInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const ProductQuantity = styled.p`
  ${bodyText}
  font-weight:700;
`;

export const PriceHeading = styled.p`
  ${bodyText}
  text-transform: uppercase;
  margin: 0;
`;

export const ReturnHomeButton = styled(Link)`
  ${btnBaseStyle}
  ${caramelBg}
  text-decoration: none;
  color: #fff;
  text-align: center;
  display: block;
`;
