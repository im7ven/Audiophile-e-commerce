import { MenuContent } from "../styles/styles.Menu";
import { ProductCategoryCard } from "./Product/ProductCategoryCard";
import {
  headphoneCategoryL,
  headphoneCategoryS,
  speakerCategoryL,
  speakerCategoryS,
  earphoneCategoryL,
  earphoneCategoryS,
} from "../images";
export const Menu = () => {
  return (
    <MenuContent>
      <ProductCategoryCard
        label="headphones"
        smallSrc={headphoneCategoryL}
        mediumSrc={headphoneCategoryS}
        largeSrc={headphoneCategoryS}
        minWidth="141px"
        alt="Earphones"
      />
      <ProductCategoryCard
        label="speakers"
        smallSrc={speakerCategoryL}
        mediumSrc={speakerCategoryS}
        largeSrc={speakerCategoryS}
        minWidth="141px"
        alt="Earphones"
      />
      <ProductCategoryCard
        label="Earphones"
        smallSrc={earphoneCategoryL}
        mediumSrc={earphoneCategoryS}
        largeSrc={earphoneCategoryS}
        minWidth="165px"
        alt="Earphones"
      />
    </MenuContent>
  );
};
