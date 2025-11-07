import { ContainerBase, ContainerBaseExpForm, ContainerEspecializacao, ContainerEspecializacaoBase, ContainerExpFormacao, MainContent, SectionExpForm } from "./styles";

import BarraReact from "../../assets/barraReact.svg"
import BarraCSS from "../../assets/barraCSS.svg"
import BarraTypeScript from "../../assets/barraTypeScript.svg"
import BarraJavaScript from "../../assets/barraJavaScript.svg"
import BarraFigma from "../../assets/barraFigma.svg"

export function Sobre() {
    return(
        <MainContent>
            <ContainerBase>
                <h1>SOBRE MIM!</h1>

                <p>Estou em uma jornada de transformação, buscando mudar de carreira e me dedicando ao máximo para evoluir a cada dia. Encontrei no Front-End algo divertido, desafiador e um ótimo espaço para expressar minha criatividade enquanto trabalho. Assim como eu, este portfólio está em constante evolução.</p>

            </ContainerBase>

            <SectionExpForm>
                <ContainerBaseExpForm>
                    <h2>EXPERIÊNCIAS</h2>

                    <ContainerExpFormacao>
                        <p>2020 - 2020</p>
                        <h3>Ajudante de Entregador</h3>
                        <p>Guarulimp</p>
                    </ContainerExpFormacao>

                    <ContainerExpFormacao>
                        <p>2022 - 2025</p>
                        <h3>Soldador</h3>
                        <p>Union-Tec</p>
                    </ContainerExpFormacao>
                </ContainerBaseExpForm>

                <ContainerBaseExpForm>
                    <h2>FORMAÇÃO</h2>

                    <ContainerExpFormacao>
                        <p>2020 - 2020</p>
                        <h3>Desenhista Industrial</h3>
                        <p>Escola Senai</p>
                    </ContainerExpFormacao>

                    <ContainerExpFormacao>
                        <p>2025 -</p>
                        <h3>Front-End Developer</h3>
                        <p>Escola Alura</p>
                    </ContainerExpFormacao>
                </ContainerBaseExpForm>
            </SectionExpForm>

            <ContainerEspecializacaoBase>
                <h2>ESPECIALIZAÇÃO</h2>

                <ContainerEspecializacao>
                    <div>
                        <p>React Js</p>

                        <span>30%</span>
                    </div>

                    <img src={BarraReact} /> 
                </ContainerEspecializacao>

                <ContainerEspecializacao>
                    <div>
                        <p>TypeScript</p>

                        <span>50%</span>
                    </div>

                    <img src={BarraTypeScript} /> 

                </ContainerEspecializacao>

                <ContainerEspecializacao>
                    <div>
                        <p>JavaScript</p>

                        <span>57%</span>
                    </div>



                    <img src={BarraJavaScript} /> 

                </ContainerEspecializacao>

                <ContainerEspecializacao>
                    <div>
                        <p>CSS</p>

                        <span>55%</span>
                    </div>



                    <img src={BarraCSS} /> 

                </ContainerEspecializacao>

                <ContainerEspecializacao>
                    <div>
                        <p>Figma</p>

                        <span>60%</span>
                    </div>

                    <img src={BarraFigma} /> 
                </ContainerEspecializacao>
            </ContainerEspecializacaoBase>
        </MainContent>
    )
}