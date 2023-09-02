import { css } from "styled-components";
import styled from "styled-components";
import { bodyText, subTitle } from "./styles.typography";
import { atomicTangerineBg, caramel, caramelBg } from "./styles.utilities";

export const btnBaseStyle = css`
  padding: 1.5rem 3rem;
  outline: 0;
  cursor: pointer;
  ${subTitle}
`;

export const PrimaryBtn = styled.button`
  ${btnBaseStyle}
  ${caramelBg}
  color: #fff;
  border: 0;

  &:hover {
    transition: 0.3s;
    ${atomicTangerineBg}
  }
`;

export const PrimaryBtnFullW = styled.button`
  ${btnBaseStyle}
  ${caramelBg}
  display:block;
  width: 100%;
`;

export const SecondaryBtn = styled.button`
  ${btnBaseStyle}
  color: #fff;
  background: black;
  border: 0;

  &:hover {
    transition: 0.3s;
    background: #fff;
    color: #000;
  }
`;

export const OutlineBtn = styled.button`
  ${btnBaseStyle}
  border: 1.5px solid black;
  background: 0;

  &:hover {
    transition: 0.3s;
    background: #000;
    color: #fff;
  }
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
