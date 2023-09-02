import { ProductItem } from "../components/Product/ProductItem";
import { yx1ProductImgD, yx1ProductImgM, yx1ProductImgT } from "../images";
import { PagePadding } from "../styles/Pages/styles.pages";
import { ProductItemOverline } from "../styles/Product/styles.ProductItem";

export const Yx1Earphone = () => {
  return (
    <PagePadding>
      <ProductItem
        tabletSrc={yx1ProductImgT}
        mobileSrc={yx1ProductImgM}
        src={yx1ProductImgD}
        productName="Yx1 wireless Earphones"
        alt="YX1 Wireless Earphones"
        price="$599"
        overline={<ProductItemOverline>New product</ProductItemOverline>}
        description="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
      />
    </PagePadding>
  );
};
