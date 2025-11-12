import { ButtonContato, ButtonIcone, ButtonSobre, ContainerBase, ContainerButton, ContainerExp, ContainerInfo, ContainerProjetos, ContainerSlider, MainContainer, MoreProjects } from "./styles";
import CSSLogo from "../../assets/css.png"
import HTMLLogo from "../../assets/html.png"
import TypeLogo from "../../assets/Typescript.png"
import FigmaLogo from "../../assets/figma.png"
import ReactLogo from "../../assets/React-Logo.png"
import { useNavigate } from "react-router-dom";
import { Carrossel } from "../Swiper/Carrossel";
import { CaretLeft, CaretRight } from "phosphor-react";




export function Home() {
    const navigate = useNavigate();


    

  
    return (
        <MainContainer>
            <ContainerBase>
                <h1>PROFISSIONAL <strong>FRONT-END</strong> WEB DEVELOPER</h1>
                <p>Em constante evolução, construindo minha jornada no Front-End com dedicação e curiosidade. Busco transformar ideias em experiências digitais cativantes.
                Rumo a me tornar um profissional Full Stack completo e preparado para o mercado. Em busca de oportunidades para demonstrar meu trabalho.</p>


            </ContainerBase>

            <ContainerInfo>
                <ContainerExp>
                    <div>
                        <ButtonIcone><img src={HTMLLogo} alt="Logo HTML"/></ButtonIcone>
                        <ButtonIcone><img src={CSSLogo} alt="Logo CSS" /></ButtonIcone>
                        <ButtonIcone><img src={TypeLogo} alt="Logo Typescript" /></ButtonIcone>
                        <ButtonIcone><img id="imgFigma"src={FigmaLogo} alt="Logo Figma" /></ButtonIcone>
                        <ButtonIcone><img id="imgReact" src={ReactLogo} alt="Logo React" /></ButtonIcone>
                    </div>

                    <h2>ESPECIALIZAÇÕES</h2>
                </ContainerExp>

                <ContainerButton>
                    <ButtonSobre onClick={() => navigate("sobre")}>SOBRE</ButtonSobre>

                    <ButtonContato>CONTATO</ButtonContato>

                    
                </ContainerButton>

            </ContainerInfo>

            <ContainerProjetos id="containerProjeto">
                <h2>DESTAQUES</h2>
                <ContainerSlider>

                    <CaretLeft id="caretleft" color="#ffd900" weight="bold" size={30} />
                    

                    <Carrossel />

                    <CaretRight id="caretright" color="#ffd900" weight="bold" size={30} />
                    
                </ContainerSlider>

                <MoreProjects onClick={() => navigate("projetos")}>Mais projetos</MoreProjects>
            </ContainerProjetos>
        </MainContainer>
    )
}