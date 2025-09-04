import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Perfil } from "./components/Perfil";
import { Home } from "./components/Home";
import { DivPrincipal } from "./styles";
import { Route, Routes } from "react-router-dom";
import { Sobre } from "./components/Sobre";
import { Projetos } from "./components/Projetos";
import { Contato } from "./components/Contato";
import { Footer } from "./components/Footer";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <DivPrincipal>
        <Perfil />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contatos" element={<Contato />} />
        </Routes>
      </DivPrincipal>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>

  )
}