import {
  headphoneCategoryL,
  headphoneCategoryS,
  speakerCategoryL,
  speakerCategoryS,
  earphoneCategoryL,
  earphoneCategoryS,
} from "../../images";
import { CategoryWrapper } from "../../styles/Shared/styles.Category";
import { ProductCategoryCard } from "../Product/ProductCategoryCard";

export const Category = () => {
  return (
    <CategoryWrapper>
      <ProductCategoryCard
        label="headphones"
        smallSrc={headphoneCategoryL}
        mediumSrc={headphoneCategoryS}
        largeSrc={headphoneCategoryS}
        minWidth="160px"
        alt="Earphones"
      />
      <ProductCategoryCard
        label="speakers"
        smallSrc={speakerCategoryL}
        mediumSrc={speakerCategoryS}
        largeSrc={speakerCategoryS}
        minWidth="160px"
        alt="Earphones"
      />
      <ProductCategoryCard
        label="Earphones"
        smallSrc={earphoneCategoryL}
        mediumSrc={earphoneCategoryS}
        largeSrc={earphoneCategoryS}
        minWidth="170px"
        alt="Earphones"
      />
    </CategoryWrapper>
  );
};
