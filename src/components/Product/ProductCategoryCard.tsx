import arrow from "../../images/icon-arrow-right.svg";
import {
  CategoryBtnContainer,
  CategoryCard,
  CategoryCardLabel,
  CategoryImgContainer,
  CategoryLink,
} from "../../styles/Product/styles.ProductCategoryCard";
import { BtnArrow } from "../../styles/styles.button";
import { ProductImage } from "./ProductImage";

interface Props {
  label: string;
  smallSrc: string;
  mediumSrc: string;
  largeSrc: string;
  minWidth: string;
  alt: string;
  route: string;
  onClose: () => void;
}

export const ProductCategoryCard = ({
  label,
  smallSrc,
  mediumSrc,
  largeSrc,
  minWidth,
  alt,
  route,
  onClose,
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
        <CategoryLink onClick={() => onClose()} to={route}>
          Shop
          <BtnArrow src={arrow} />
        </CategoryLink>
      </CategoryBtnContainer>
    </CategoryCard>
  );
};
