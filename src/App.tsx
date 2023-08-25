import { LinkBtn, OutlineBtn, PrimaryBtn } from "./styles/styles.button";
import { GlobalStyles } from "./styles/styles.global";

function App() {
  return (
    <>
      <GlobalStyles />
      <h1>hello world</h1>
      <PrimaryBtn>see product</PrimaryBtn>
      <OutlineBtn>see product</OutlineBtn>
      <LinkBtn>Shop</LinkBtn>
      <h2>hello world</h2>
    </>
  );
}

export default App;
