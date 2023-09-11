import { useState } from "react";
import { useForm } from "react-hook-form";
import cashOnDelivery from "../../images/cashOnDelivery.svg";
import {
  CashOnDelivery,
  CashOnDeliveryDescription,
  CashOnDeliveryImg,
  ErrorMsg,
  ErrorWrapper,
  Form,
  FormContainer,
  FormControl,
  FormHeading,
  FormInput,
  FormLabel,
  InputTextWrapper,
  RadioInput,
  RadioInputWrapper,
  RadioWrapper,
  SectionHeading,
} from "../../styles/Checkout/styles.CheckOutForm";

export interface CheckoutFormData {
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  zipCode: number;
  city: string;
  country: string;
  payment: string;
  eNumber?: number;
  ePin?: number;
}
interface Props {
  onSubmit: (data: CheckoutFormData) => void;
}

export const CheckoutForm = ({ onSubmit }: Props) => {
  const [paymentType, setPaymentType] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  return (
    <FormContainer>
      <Form id="checkoutForm" onSubmit={handleSubmit(onSubmit)}>
        <FormHeading>Checkout</FormHeading>
        <SectionHeading>Billing Details</SectionHeading>
        <InputTextWrapper>
          <FormControl>
            <ErrorWrapper>
              <FormLabel className={errors.name && "label-error"}>
                Name
              </FormLabel>
              {errors.name && <ErrorMsg>Required</ErrorMsg>}
            </ErrorWrapper>
            <FormInput
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter Your Name"
              className={errors.name && "input-error"}
            />
          </FormControl>
          <FormControl>
            <ErrorWrapper>
              <FormLabel className={errors.email && "label-error"}>
                Email Address
              </FormLabel>
              {errors.email && (
                <ErrorMsg>{errors.email.message?.toString()}</ErrorMsg>
              )}
            </ErrorWrapper>
            <FormInput
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Enter Your Email"
              className={errors.email && "input-error"}
            />
          </FormControl>
        </InputTextWrapper>
        <FormControl>
          <ErrorWrapper className="smallInput">
            <FormLabel className={errors.phoneNumber && "label-error"}>
              Phone Number
            </FormLabel>
            {errors.phoneNumber && (
              <ErrorMsg>{errors.phoneNumber.message?.toString()}</ErrorMsg>
            )}
          </ErrorWrapper>
          <FormInput
            {...register("phoneNumber", {
              required: "Required",
              maxLength: { value: 10, message: "10 Character Maximum" },
            })}
            type="text"
            placeholder="Enter Your Phone Number"
            className={errors.phoneNumber && "input-error"}
          />
        </FormControl>
        <SectionHeading>Shipping Info</SectionHeading>
        <FormControl>
          <ErrorWrapper>
            <FormLabel className={errors.address && "label-error"}>
              Your Address
            </FormLabel>
            {errors.address && <ErrorMsg>Required</ErrorMsg>}
          </ErrorWrapper>
          <FormInput
            {...register("address", { required: true })}
            style={{ width: "100%" }}
            type="text"
            placeholder="Enter Your Phone Address"
            className={errors.address && "input-error"}
          />
        </FormControl>
        <InputTextWrapper>
          <FormControl>
            <ErrorWrapper>
              <FormLabel className={errors.zipCode && "label-error"}>
                Zip Code
              </FormLabel>
              {errors.zipCode && (
                <ErrorMsg>{errors.zipCode.message?.toString()}</ErrorMsg>
              )}
            </ErrorWrapper>
            <FormInput
              {...register("zipCode", {
                required: "Required",
                pattern: {
                  value: /^\d{5}$/,
                  message: "Invalid Zip Code",
                },
              })}
              type="number"
              placeholder="Enter Your Zip Code"
              className={errors.zipCode && "input-error"}
            />
          </FormControl>
          <FormControl>
            <ErrorWrapper>
              <FormLabel className={errors.city && "label-error"}>
                City
              </FormLabel>
              {errors.city && <ErrorMsg>Required</ErrorMsg>}
            </ErrorWrapper>
            <FormInput
              {...register("city", { required: true })}
              type="text"
              placeholder="Enter Your City"
              className={errors.city && "input-error"}
            />
          </FormControl>
        </InputTextWrapper>
        <FormControl>
          <ErrorWrapper className={"smallInput"}>
            <FormLabel className={errors.country && "label-error"}>
              Country
            </FormLabel>
            {errors.country && <ErrorMsg>Required</ErrorMsg>}
          </ErrorWrapper>
          <FormInput
            {...register("country", { required: true })}
            type="text"
            placeholder="Enter Your Country"
            className={errors.country && "input-error"}
          />
        </FormControl>
        <SectionHeading>Payment Details</SectionHeading>
        <RadioInputWrapper>
          <ErrorWrapper>
            <FormLabel className={errors.payment && "label-error"}>
              Payment Method
            </FormLabel>
            {errors.payment && <ErrorMsg>Required</ErrorMsg>}
          </ErrorWrapper>
          <div>
            <FormControl>
              <RadioWrapper>
                <RadioInput
                  {...register("payment", { required: true })}
                  onClick={() => setPaymentType("emoney")}
                  id="eMoney"
                  type="radio"
                  name="payment"
                  value="e-Money"
                />
                <FormLabel
                  htmlFor="eMoney"
                  style={{ margin: "0", fontSize: "1.3rem" }}
                >
                  e-Money
                </FormLabel>
              </RadioWrapper>
            </FormControl>
            <FormControl>
              <RadioWrapper>
                <RadioInput
                  {...register("payment", { required: true })}
                  onClick={() => setPaymentType("cash")}
                  id="cash"
                  type="radio"
                  name="payment"
                  value="cash"
                />
                <FormLabel
                  htmlFor="cash"
                  style={{ margin: "0", fontSize: "1.3rem" }}
                >
                  Cash on Delivery
                </FormLabel>
              </RadioWrapper>
            </FormControl>
          </div>
        </RadioInputWrapper>
        {paymentType === "emoney" ? (
          <InputTextWrapper>
            <FormControl>
              <ErrorWrapper>
                <FormLabel className={errors.eNumber && "label-error"}>
                  e-Money Number
                </FormLabel>
                {errors.eNumber && (
                  <ErrorMsg>{errors.eNumber.message?.toString()}</ErrorMsg>
                )}
              </ErrorWrapper>
              <FormInput
                {...register("eNumber", {
                  required: "Required",
                  maxLength: { value: 10, message: "10 Character Maximum" },
                })}
                className={errors.eNumber && "input-error"}
                type="number"
                placeholder="Enter e-Money Number"
              />
            </FormControl>
            <FormControl>
              <ErrorWrapper>
                <FormLabel className={errors.ePin && "label-error"}>
                  e-Money Pin
                </FormLabel>
                {errors.ePin && (
                  <ErrorMsg>{errors.ePin.message?.toString()}</ErrorMsg>
                )}
              </ErrorWrapper>
              <FormInput
                className={errors.ePin && "input-error"}
                {...register("ePin", {
                  required: "Required",
                  maxLength: { value: 4, message: "4 Character Maximum" },
                })}
                type="number"
                placeholder="Enter e-Money Pin"
              />
            </FormControl>
          </InputTextWrapper>
        ) : (
          <CashOnDelivery>
            <CashOnDeliveryImg src={cashOnDelivery} />
            <CashOnDeliveryDescription>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </CashOnDeliveryDescription>
          </CashOnDelivery>
        )}
      </Form>
    </FormContainer>
  );
};
