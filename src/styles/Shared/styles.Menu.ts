import styled from "styled-components";

interface MenuContentProps {
  isvisible: boolean;
}

export const MenuContent = styled.div<MenuContentProps>`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  background: #fff;
  opacity: ${({ isvisible }) => (isvisible ? "1" : "0")};
  max-height: ${({ isvisible }) => (isvisible ? "auto" : "0")};
  overflow: hidden;
  transition: all 0.2s ease-out;
  padding: ${({ isvisible }) => (isvisible ? " 8.4rem 2.4rem 3.5rem" : "0")};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }

  @media screen and (min-width: 1100px) {
    display: none;
  }
`;
