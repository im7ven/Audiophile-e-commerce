import { ProductItem } from "../components/Product/ProductItem";
import { ProductItemFeature } from "../components/Product/ProductItemFeature";
import { yx1ProductImgD, yx1ProductImgM, yx1ProductImgT } from "../images";
import { PagePadding } from "../styles/Pages/styles.pages";
import { ProductItemOverline } from "../styles/Product/styles.ProductItem";
import {
  ListItem,
  ListItemQuantity,
} from "../styles/Product/styles.ProductItemFeature";

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
      <ProductItemFeature
        listItem={
          <>
            <li>
              <ListItemQuantity>2x</ListItemQuantity>
              <ListItem>Earphone Unit</ListItem>
            </li>
            <li>
              <ListItemQuantity>6x</ListItemQuantity>
              <ListItem>Multi-size-Earplugs</ListItem>
            </li>
            <li>
              <ListItemQuantity>1x</ListItemQuantity>
              <ListItem>User Manual</ListItem>
            </li>
            <li>
              <ListItemQuantity>1x</ListItemQuantity>
              <ListItem>USB-C Charging Cable</ListItem>
            </li>
            <li>
              <ListItemQuantity>1x</ListItemQuantity>
              <ListItem>Travel Pouch</ListItem>
            </li>
          </>
        }
      >
        Experience unrivalled stereo sound thanks to innovative acoustic
        technology. With improved ergonomics designed for full day wearing,
        these revolutionary earphones have been finely crafted to provide you
        with the perfect fit, delivering complete comfort all day long while
        enjoying exceptional noise isolation and truly immersive sound.
        <br />
        <br />
        The YX1 Wireless Earphones features customizable controls for volume,
        music, calls, and voice assistants built into both earbuds. The new
        7-hour battery life can be extended up to 28 hours with the charging
        case, giving you uninterrupted play time. Exquisite craftsmanship with a
        splash resistant design now available in an all new white and grey color
        scheme as well as the popular classic black.
      </ProductItemFeature>
    </PagePadding>
  );
};
