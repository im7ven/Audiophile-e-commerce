import { Hero } from "../components/Hero";
import { Yx1Feature } from "../components/Home/Yx1Feature";

import { Zx7Feature } from "../components/Home/Zx7Feature";
import { Zx9Feature } from "../components/Home/Zx9Feature";
import { Category } from "../components/Product/Category";
import { MainContainer } from "../styles/Home/styles.MainContainer";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <MainContainer>
        <Category
          marginM="9.2rem auto  12rem "
          marginT="14.6rem auto 9.65rem "
          marginD="20rem auto 16.8rem "
        />
        <Zx9Feature />
        <Zx7Feature />
        <Yx1Feature />
      </MainContainer>
    </>
  );
};
