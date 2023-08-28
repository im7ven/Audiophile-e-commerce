import styled from "styled-components";

interface MenuContentProps {
  isVisible: boolean;
}

export const MenuContent = styled.div<MenuContentProps>`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  background: #fff;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  max-height: ${({ isVisible }) => (isVisible ? "auto" : "0")};
  overflow: hidden;
  transition: all 0.2s ease-out;
  padding: ${({ isVisible }) => (isVisible ? " 8.4rem 2.4rem 3.5rem" : "0")};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }

  @media screen and (min-width: 1100px) {
    display: none;
  }
`;
