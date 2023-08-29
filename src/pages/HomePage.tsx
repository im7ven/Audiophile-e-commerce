import { Hero } from "../components/Hero";
import { Category } from "../components/Product/Category";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Category
        marginM="9.2rem auto  12rem "
        marginT="14.6rem auto 9.65rem "
        marginD="20rem auto 16.8rem "
      />
    </>
  );
};
