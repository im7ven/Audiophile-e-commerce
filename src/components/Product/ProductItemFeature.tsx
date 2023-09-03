import { ReactNode } from "react";
import {
  FeatureDetailWrapper,
  FeatureHeading,
  FeatureItemDescription,
  FeatureItemList,
  InBoxDetailWrapper,
  ProductItemFeatureWrapper,
} from "../../styles/Product/styles.ProductItemFeature";

interface Props {
  children: ReactNode;
  listItem: ReactNode;
}

export const ProductItemFeature = ({ children, listItem }: Props) => {
  return (
    <ProductItemFeatureWrapper>
      <FeatureDetailWrapper>
        <FeatureHeading>Features</FeatureHeading>
        <FeatureItemDescription>{children}</FeatureItemDescription>
      </FeatureDetailWrapper>
      <InBoxDetailWrapper>
        <FeatureHeading>In the box</FeatureHeading>
        <FeatureItemList>{listItem}</FeatureItemList>
      </InBoxDetailWrapper>
    </ProductItemFeatureWrapper>
  );
};
