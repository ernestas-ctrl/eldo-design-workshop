import { EldoradoFooter } from "./components/EldoradoFooter";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ProductNavigation } from "./components/ProductNavigation";
import { ThemeProvider } from "./components/theme/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <ProductNavigation />
      <Main />
      <EldoradoFooter />
    </ThemeProvider>
  );
}
