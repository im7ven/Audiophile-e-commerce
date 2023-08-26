import { NavBar } from "./components/NavBar";
import { ProductCategoryCard } from "./components/Product/ProductCategoryCard";
import { GlobalStyles } from "./styles/styles.global";
import earphonesL from "./images/image-category-thumbnail-earphones.webp";
import earphonesS from "./images/earphone-category-thumbnail-S.webp";
import speakerS from "./images/category-thumbnail-speakers-S.webp";
import speakerL from "./images/category-thumbnail-speakers-L.webp";
import headphonesS from "./images/category-thumbnail-headphones-S.webp";
import headphonesL from "./images/category-thumbnail-headphones-L.webp";

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <ProductCategoryCard
        label="Earphones"
        smallSrc={earphonesL}
        mediumSrc={earphonesS}
        largeSrc={earphonesS}
        minWidth="165px"
        alt="Earphones"
      />
      <ProductCategoryCard
        label="speakers"
        smallSrc={speakerL}
        mediumSrc={speakerS}
        largeSrc={speakerS}
        minWidth="141px"
        alt="Earphones"
      />
      <ProductCategoryCard
        label="headphones"
        smallSrc={headphonesL}
        mediumSrc={headphonesS}
        largeSrc={headphonesS}
        minWidth="141px"
        alt="Earphones"
      />
    </>
  );
}

export default App;
