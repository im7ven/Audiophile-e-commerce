import { styled } from "styled-components";
import { flashWhiteBg } from "../styles.utilities";
import { h6 } from "../styles.typography";

export const CategoryCard = styled.div`
  ${flashWhiteBg}
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 2.2rem;
  max-width: 35rem;
  border-radius: 9px;
  width: 100%;
`;

export const CategoryImgContainer = styled.div`
  position: absolute;
  left: 50%;
  top: -30%;
  transform: translateX(-50%);
`;

export const CategoryBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: start;
  margin-top: 1.7rem;
`;

export const CategoryCardLabel = styled.h2`
  font-weight: 700;
  letter-spacing: 0.17rem;
  line-height: 2rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  margin: 8rem 0 0 0;
`;
