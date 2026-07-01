import { EldoradoFooter } from "./components/EldoradoFooter";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ProductNavigation } from "./components/ProductNavigation";

export default function App() {
  return (
    <>
      <Header />
      <ProductNavigation />
      <Main />
      <EldoradoFooter />
    </>
  );
}
