import { css } from "styled-components";

// Color Pallette

export const caramel = css`
  color: #d87d4a;
`;

export const caramelBg = css`
  background: #d87d4a;
`;

export const atomicTangerineBg = css`
  background: #fbaf85;
`;

export const nightBlackBg = css`
  background: #101010;
`;

export const flashWhiteBg = css`
  background: #f1f1f1;
`;

export const seaSaltBg = css`
  background: #fafafa;
`;

// Grid

export const grid1x2M_T = css`
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const grid1x2M_D = css`
  display: grid;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const grid1x3 = css`
  display: grid;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Block

export const block = css`
  max-width: 1110px;
  margin-right: auto;
  margin-left: auto;
`;

// Icons

export const icon = css`
  &:hover {
    transform: scale(1.1);
    fill: #d87d4a;
    transition: 0.3s;
  }
`;

// List

export const navList = css`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  list-style: none;
  padding: 0;

  @media screen and (min-width: 768px) {
    gap: 3.4rem;
    flex-direction: row;
  }
`;
