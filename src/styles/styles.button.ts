import { css } from "styled-components";
import styled from "styled-components";
import { bodyText, subTitle } from "./styles.typography";
import { atomicTangerineBg, caramel, caramelBg } from "./styles.utilities";

const btnBaseStyle = css`
  padding: 1.5rem 3rem;
  outline: 0;
  cursor: pointer;
  ${subTitle}
`;

const primaryBtnHover = css`
  &:hover {
    transition: 0.3s;
    transform: scale(1.1);
    ${atomicTangerineBg}
  }
`;

const outlineBtnHover = css`
  &:hover {
    transition: 0.3s;
    transform: scale(1.1);
    background: #000;
    color: #fff;
  }
`;

export const PrimaryBtn = styled.button`
  ${btnBaseStyle}
  ${caramelBg}
  ${primaryBtnHover}
  color: #fff;
  border: 0;
`;

export const PrimaryBtnFullW = styled.button`
  ${btnBaseStyle}
  ${caramelBg}
  ${primaryBtnHover}
  display:block;
  width: 100%;
`;

export const OutlineBtn = styled.button`
  ${btnBaseStyle}
  ${outlineBtnHover}
  border: 1.5px solid black;
  background: #fff;
`;

export const LinkBtn = styled.button`
  ${bodyText}
  ${subTitle}
  outline: 0;
  border: 0;
  background: none;
  cursor: pointer;

  &:hover {
    ${caramel}
    transition: 0.3s
  }
`;

export const BtnArrow = styled.img`
  margin-left: 1.3rem;
`;
