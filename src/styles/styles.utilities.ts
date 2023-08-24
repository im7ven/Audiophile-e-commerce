import { css } from "styled-components";

// Color Pallette

export const caramel = css`
  color: #d87d4a;
`;

export const atomicTangerine = css`
  color: #fbaf85;
`;

export const nightBlack = css`
  color: #101010;
`;

export const flashWhite = css`
  color: #f1f1f1;
`;

export const seaSalt = css`
  color: #fafafa;
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
