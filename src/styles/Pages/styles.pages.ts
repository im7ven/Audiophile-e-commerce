import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { atomicTangerineBg, caramelBg } from "../styles.utilities";
import { btnBaseStyle } from "../styles.button";

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

export const SeeProductBtn = styled(Link)`
  ${btnBaseStyle}
  ${caramelBg}
  color: #fff;
  border: 0;
  text-decoration: none;
  display: block;

  &:hover {
    transition: 0.3s;
    ${atomicTangerineBg}
  }
`;
