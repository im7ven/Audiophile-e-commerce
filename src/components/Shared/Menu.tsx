import { MenuContent } from "../../styles/Shared/styles.Menu";
import { ProductCategoryCard } from "../Product/ProductCategoryCard";
import {
  headphoneCategoryL,
  headphoneCategoryS,
  speakerCategoryL,
  speakerCategoryS,
  earphoneCategoryL,
  earphoneCategoryS,
} from "../../images";

interface Props {
  isvisible: boolean;
  onClose: () => void;
}
export const Menu = ({ isvisible, onClose }: Props) => {
  return (
    <MenuContent isvisible={isvisible}>
      <ProductCategoryCard
        onClose={onClose}
        route="/headphones"
        label="headphones"
        smallSrc={headphoneCategoryL}
        mediumSrc={headphoneCategoryS}
        largeSrc={headphoneCategoryS}
        minWidth="160px"
        alt="Earphones"
      />
      <ProductCategoryCard
        onClose={onClose}
        route="/speakers"
        label="speakers"
        smallSrc={speakerCategoryL}
        mediumSrc={speakerCategoryS}
        largeSrc={speakerCategoryS}
        minWidth="160px"
        alt="Earphones"
      />
      <ProductCategoryCard
        onClose={onClose}
        route="/earphones"
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
