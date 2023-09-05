import { MouseEventHandler, useRef } from "react";
import {
  CartContainer,
  CartOverlay,
  CartOverlayWrapper,
} from "../../styles/Shared/styles.Cart";

interface Props {
  onCloseCart: () => void;
}

export const Cart = ({ onCloseCart }: Props) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const overlayWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleOverlayClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (
      e.target === overlayRef.current ||
      e.target === overlayWrapperRef.current
    ) {
      return onCloseCart();
    }
  };

  return (
    <CartOverlayWrapper ref={overlayWrapperRef} onClick={handleOverlayClick}>
      <CartOverlay ref={overlayRef} onClick={handleOverlayClick}>
        <CartContainer></CartContainer>
      </CartOverlay>
    </CartOverlayWrapper>
  );
};
