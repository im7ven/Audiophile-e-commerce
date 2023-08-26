import {
  CategoryCard,
  CategoryImgContainer,
  CategoryCardLabel,
  CategoryBtnContainer,
} from "../../styles/Product/styles.ProductCategoryCard";
import { BtnArrow, LinkBtn } from "../../styles/styles.button";
import { ProductImage } from "./ProductImage";
import arrow from "../../images/icon-arrow-right.svg";

interface Props {
  label: string;
  smallSrc: string;
  mediumSrc: string;
  largeSrc: string;
  minWidth: string;
  alt: string;
}

export const ProductCategoryCard = ({
  label,
  smallSrc,
  mediumSrc,
  largeSrc,
  minWidth,
  alt,
}: Props) => {
  return (
    <CategoryCard>
      <CategoryImgContainer>
        <ProductImage
          smallSrc={smallSrc}
          mediumSrc={mediumSrc}
          largeSrc={largeSrc}
          minWidth={minWidth}
          alt={alt}
        />
      </CategoryImgContainer>
      <CategoryCardLabel>{label}</CategoryCardLabel>
      <CategoryBtnContainer>
        <LinkBtn>
          Shop
          <BtnArrow src={arrow} />
        </LinkBtn>
      </CategoryBtnContainer>
    </CategoryCard>
  );
};
