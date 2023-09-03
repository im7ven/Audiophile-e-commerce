import {
  AddButton,
  QuantityAmount,
  QuantitySelectorWrapper,
  RemoveButton,
} from "../../styles/Product/style.QuantitySelector";

export const QuantitySelector = () => {
  return (
    <QuantitySelectorWrapper>
      <RemoveButton>-</RemoveButton>
      <span>
        <QuantityAmount>1</QuantityAmount>
      </span>
      <AddButton>+</AddButton>
    </QuantitySelectorWrapper>
  );
};
