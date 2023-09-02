import { css, styled } from "styled-components";
import { flashWhiteBg } from "../styles.utilities";
import { subTitle } from "../styles.typography";

export const QuantitySelectorWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${flashWhiteBg}
  width: 12rem;
  height: 4.8rem;
`;

export const QuantityAmount = styled.p`
  ${subTitle}
`;

export const SelectorBtn = css`
  outline: 0;
  border: 0;
`;

export const RemoveButton = styled.button`
  ${SelectorBtn}
`;

export const AddButton = styled.button`
  ${SelectorBtn}
`;
