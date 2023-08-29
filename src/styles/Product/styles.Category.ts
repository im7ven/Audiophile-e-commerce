import styled from "styled-components";
import { block } from "../styles.utilities";

interface CategoryProps {
  marginM: string;
  marginT: string;
  marginD: string;
}

export const CategoryWrapper = styled.div<CategoryProps>`
  margin: ${(props) => props.marginM};
  ${block}
  display: flex;
  flex-direction: column;
  gap: 6.8rem;

  @media screen and (min-width: 768px) {
    margin: ${(props) => props.marginT};
    flex-direction: row;
    gap: 1rem;
    padding: 0 3.9rem;
  }

  @media screen and (min-width: 1024px) {
    margin: ${(props) => props.marginD};
    gap: 3rem;
  }
`;
