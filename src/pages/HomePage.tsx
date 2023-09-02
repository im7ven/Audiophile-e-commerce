import { BestGearBlock } from "../components/BestGearBlock";
import { Hero } from "../components/Hero";
import { HomeCategory } from "../components/Home/HomeCategory";
import { Yx1Feature } from "../components/Home/Yx1Feature";
import { Zx7Feature } from "../components/Home/Zx7Feature";
import { Zx9Feature } from "../components/Home/Zx9Feature";
import { MainContainer } from "../styles/styles.MainContainer";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <MainContainer>
        <HomeCategory />
        <Zx9Feature />
        <Zx7Feature />
        <Yx1Feature />
        <BestGearBlock />
      </MainContainer>
    </>
  );
};
