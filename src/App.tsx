import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Perfil } from "./components/Perfil";
import { Home } from "./components/Home";
import { ContainerFooter, ContainerHeader, ContatoFixed, DivPrincipal } from "./styles";
import { Route, Routes } from "react-router-dom";
import { Sobre } from "./components/Sobre";
import { Projetos } from "./components/Projetos";
import { Footer } from "./components/Footer";
import { Envelope } from "phosphor-react";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <ContainerHeader>
        <Header />
      </ContainerHeader>

      <DivPrincipal>
        <Perfil />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </DivPrincipal>

      <ContatoFixed href="mailto:christianpicoli18@gmail.com"><Envelope color={"black"} size={40} /></ContatoFixed>

      <ContainerFooter>
        <Footer />
      </ContainerFooter>

      <GlobalStyle />
    </ThemeProvider>

  )
}