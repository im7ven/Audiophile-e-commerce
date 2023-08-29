import {
  headphoneCategoryL,
  headphoneCategoryS,
  speakerCategoryL,
  speakerCategoryS,
  earphoneCategoryL,
  earphoneCategoryS,
} from "../../images";
import { CategoryWrapper } from "../../styles/Product/styles.Category";
import { ProductCategoryCard } from "./ProductCategoryCard";

interface Props {
  marginM: string;
  marginT: string;
  marginD: string;
}

export const Category = ({ marginM, marginT, marginD }: Props) => {
  return (
    <CategoryWrapper marginM={marginM} marginT={marginT} marginD={marginD}>
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
