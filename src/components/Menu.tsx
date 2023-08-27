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

interface Props {
  isVisible: boolean;
}
export const Menu = ({ isVisible }: Props) => {
  return (
    <MenuContent isVisible={isVisible}>
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
    </MenuContent>
  );
};
