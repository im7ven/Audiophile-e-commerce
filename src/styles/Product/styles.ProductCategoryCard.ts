import { styled } from "styled-components";
import { flashWhiteBg } from "../styles.utilities";
import { h6 } from "../styles.typography";

export const CategoryCard = styled.div`
  ${flashWhiteBg}
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 10rem auto 0 auto;
  padding-bottom: 2.2rem;
  max-width: 35rem;
  border-radius: 9px;
  width: 100%;
`;

export const CategoryImgContainer = styled.div`
  position: absolute;
  left: 50%;
  top: -40%;
  transform: translateX(-50%);
`;

export const CategoryBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: start;
  margin-top: 1.7rem;
`;

export const CategoryCardLabel = styled.h6`
  ${h6}
  text-align: center;
  margin: 8rem 0 0 0;
`;
