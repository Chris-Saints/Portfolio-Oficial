import { BotaoDireito, BotaoEsquerdo, ButtonContato, ButtonIcone, ButtonSobre, ContainerBase, ContainerButton, ContainerExp, ContainerInfo, ContainerProjetos, ContainerSlider, Item, ItemOverlay, MainContainer, MoreProjects, Slider } from "./styles";
import CSSLogo from "../../assets/css.png"
import HTMLLogo from "../../assets/html.png"
import TypeLogo from "../../assets/Typescript.png"
import FigmaLogo from "../../assets/figma.png"
import ReactLogo from "../../assets/React-Logo.png"
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import toDoList from "../../assets/to-do-List.png"
import TimerIgnite from "../../assets/timer-ignite.png"
import ChessMaster from "../../assets/chess-master.png"
import DtMoney from "../../assets/dt-money.png"
import CardsRpg from "../../assets/cartas-rpg.png"


export function Home() {
    const navigate = useNavigate();

    const [itemWidth, setItemWidth] = useState(0)
    const [index, setIndex] = useState(0);
    const ref = useRef<HTMLDivElement>(null);


    const projetos = [
        {
            nome: "To-Do List",
            id: 1,
            img: toDoList
        },
        {
            nome: "Timer Ignite",
            id: 2,
            img: TimerIgnite
        },
        {
            nome: "Chess Master",
            id: 3,
            img: ChessMaster
        },
        {
            nome: "Dt-Money",
            id: 4,
            img: DtMoney
        },
        {
            nome: "Cards Classes",
            id: 5,
            img: CardsRpg
        }
    ]

    const [visible, setVisible] = useState(3);

    useEffect(() => {
        function updateVisible() {
            if(window.innerWidth <= 480) {
                setVisible(1);
            } else {
                setVisible(3)
            }
        }

        updateVisible();
        window.addEventListener("resize", updateVisible);
        return () => window.removeEventListener("resize", updateVisible)
    }, [])

    const maxIndex = projetos.length - visible

    useEffect(() => {
        function updateItemWidth() {
            if(ref.current) {
                const firstItem = ref.current.querySelector("div");
                if (firstItem) {
                    const width = firstItem.clientWidth + 8;
                    setItemWidth(width);
                }
            }
        }

        updateItemWidth();
        window.addEventListener("resize", updateItemWidth)

        return () => window.removeEventListener("resize", updateItemWidth)
    }, [])

    function next() {
            setIndex(prev => Math.min(prev + 1, maxIndex));
    }

    function prev() {
        setIndex(prev => Math.max(prev - 1, 0))
    }

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
                        <ButtonIcone><img src={FigmaLogo} alt="Logo Figma" /></ButtonIcone>
                        <ButtonIcone><img src={ReactLogo} alt="Logo React" /></ButtonIcone>
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
                    <BotaoEsquerdo onClick={prev} >{"<"}</BotaoEsquerdo>
                    <Slider ref={ref} translate={-index * itemWidth}>
                        {projetos.map((projeto) => (
                            <Item key={projeto.id} >
                                <img
                                    src={projeto.img}
                                    alt={projeto.nome} 
                                 />
                                 <ItemOverlay>{projeto.nome}</ItemOverlay>
                             </Item>
                        ))}
                    </Slider>
                    <BotaoDireito onClick={next} >{">"}</BotaoDireito>
                </ContainerSlider>
                <MoreProjects onClick={() => navigate("projetos")}>Mais projetos</MoreProjects>
            </ContainerProjetos>
        </MainContainer>
    )
}