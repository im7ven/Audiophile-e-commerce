import { ReactNode } from "react";
import {
  Picture,
  ProductFeatureContainer,
  ProductFeatureDescription,
  ProductFeatureDetailWrapper,
  ProductFeatureHeading,
  ProductFeatureImage,
} from "../../styles/Product/styles.ProductFeature";

interface Props {
  src: string;
  tabletSrc: string;
  mobileSrc: string;
  heading: string;
  description: string;
  button?: ReactNode;
  overline?: ReactNode;
  alt: string;
  order: string;
}

export const ProductFeature = ({
  src,
  tabletSrc,
  mobileSrc,
  heading,
  description,
  button,
  overline,
  alt,
  order,
}: Props) => {
  return (
    <ProductFeatureContainer>
      <Picture order={order}>
        <source
          type="image/webp"
          srcSet={tabletSrc}
          media="(min-width: 480px) and (max-width:1024px)"
        />
        <source
          type="image/webp"
          srcSet={mobileSrc}
          media="(max-width: 480px)"
        />
        <ProductFeatureImage
          loading="lazy"
          width="540px"
          height="560px"
          src={src}
          alt={alt}
        />
      </Picture>
      <ProductFeatureDetailWrapper>
        {overline}
        <ProductFeatureHeading>{heading}</ProductFeatureHeading>
        <ProductFeatureDescription>{description}</ProductFeatureDescription>
        <div style={{ width: "auto" }}>{button}</div>
      </ProductFeatureDetailWrapper>
    </ProductFeatureContainer>
  );
};
