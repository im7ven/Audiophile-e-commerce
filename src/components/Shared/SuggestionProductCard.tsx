import { SeeProductBtn } from "../../styles/Pages/styles.pages";
import {
  CardHeading,
  CardImage,
  SuggestionCard,
} from "../../styles/Shared/styles.SuggestionProductCard";

interface Props {
  tabletSrc: string;
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
  productName: string;
  route: string;
}

export const SuggestionProductCard = ({
  tabletSrc,
  mobileSrc,
  desktopSrc,
  alt,
  productName,
  route,
}: Props) => {
  return (
    <SuggestionCard>
      <picture>
        <source
          media="(min-width: 768px) and (max-width: 1024px)"
          srcSet={tabletSrc}
          type="image/webp"
        />
        <source
          media="(max-width: 768px)"
          srcSet={mobileSrc}
          type="image/webp"
        />
        <CardImage
          width="350px"
          height="318px"
          loading="lazy"
          alt={alt}
          src={desktopSrc}
        />
      </picture>
      <CardHeading>{productName}</CardHeading>
      <SeeProductBtn style={{ display: "inline" }} to={route}>
        See product
      </SeeProductBtn>
    </SuggestionCard>
  );
};
