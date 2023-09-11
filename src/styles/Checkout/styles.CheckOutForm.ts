import styled from "styled-components";
import { bodyText, h2, subTitle } from "../styles.typography";
import { caramel, caramelBg, grid1x2M_T } from "../styles.utilities";

export const FormContainer = styled.div`
  padding: 3.1rem 2.4rem;
  background: #fff;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 3rem 2.8rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 5.4rem 4.8rem 4.8rem;
  }

  @media screen and (min-width: 1150px) {
    margin-bottom: 14.1rem;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  max-width: 63.5rem;
`;

export const FormHeading = styled.h2`
  ${h2}
  margin:  0 0 3.2rem;

  @media screen and (min-width: 768px) {
    margin: 0 0 4.1rem;
  }
`;

export const SectionHeading = styled.h4`
  ${subTitle}
  ${caramel}
  line-height: 2.5rem;
`;

export const FormControl = styled.div``;

export const FormLabel = styled.label`
  font-weight: 700;
  color: #000;
  line-height: 1.6rem;
  letter-spacing: -0.02rem;
  font-size: 1.2rem;
  display: block;
  margin-bottom: 0.9rem;

  &.label-error {
    color: #cd2c2c;
  }
`;

export const FormInput = styled.input`
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  padding: 1.8rem 2.4rem;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 2.4rem;
  background: #fff;
  outline: 0;

  &:focus {
    border: 1px solid #d87d4a;
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
  }

  &.input-error {
    border: 2px solid #cd2c2c;
  }
  @media screen and (min-width: 768px) {
    width: 30.9rem;
  }
`;

export const RadioWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 1.6rem;
  border-radius: 8px;
  padding: 1.8rem 2.4rem;
  border: 1px solid #cfcfcf;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  flex: 0 0 auto;
  align-self: center;
  margin: 0 1rem 0 0;
  accent-color: #d87d4a;
`;

export const CashOnDelivery = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  margin: 3rem 0;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    gap: 3.2rem;
  }
`;

export const CashOnDeliveryImg = styled.img`
  width: 4.8rem;
`;

export const CashOnDeliveryDescription = styled.p`
  ${bodyText}
  margin: 0;
`;

export const InputTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1.6rem;
  }
`;

export const RadioInputWrapper = styled.div`
  ${grid1x2M_T}
  gap: 2.4rem;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  &.smallInput {
    @media screen and (min-width: 768px) {
      max-width: 31rem;
    }
  }
`;

export const ErrorMsg = styled.p`
  color: #cd2c2c;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.214px;
  margin: 0;
`;
