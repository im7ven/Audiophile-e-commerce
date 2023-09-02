import { BestGearBlock } from "../components/Shared/BestGearBlock";
import { Hero } from "../components/Shared/Hero";
import { HomeCategory } from "../components/Home/HomeCategory";
import { Yx1Feature } from "../components/Home/Yx1Feature";
import { Zx7Feature } from "../components/Home/Zx7Feature";
import { Zx9Feature } from "../components/Home/Zx9Feature";
import { PagePadding } from "../styles/Pages/styles.pages";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <PagePadding>
        <HomeCategory />
        <Zx9Feature />
        <Zx7Feature />
        <Yx1Feature />
        <BestGearBlock />
      </PagePadding>
    </>
  );
};
