import { styled } from "styled-components";
import { block } from "../../styles/styles.utilities";
import { GoBackBtn } from "../../styles/Pages/styles.pages";

const ButtonWrapper = styled.div`
  ${block}
  margin: 1.6rem auto 2.4rem;

  @media screen and (min-width: 768px) {
    margin: 3.3rem auto 2.4rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 7.9rem auto 5.6rem;
  }
`;

interface Props {
  route: string;
}

export const ReturnButton = ({ route }: Props) => {
  return (
    <ButtonWrapper>
      <GoBackBtn to={route}>Go Back</GoBackBtn>
    </ButtonWrapper>
  );
};
