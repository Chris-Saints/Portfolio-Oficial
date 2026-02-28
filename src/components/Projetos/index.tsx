import { CodeContainer, Containerbase, ContainerTask, Line, LineProject, ProjectContainer } from "./styles";
import TimerIgnite from "../../assets/timer-ignite.png"
import CartasRPG from "../../assets/cartas-rpg.png"
import ChessMaster from "../../assets/chess-master.png"
import FundamentosIgnite from "../../assets/fundamentos-ignite.png"
import ToDoList from "../../assets/to-do-List.png"
import AssistenteIA from "../../assets/assistente-ia-gemini.png"
import DtMoney from "../../assets/dt-money.png"
import EmObra from "../../assets/emobras.jpg"
import Pokedexyz from "../../assets/pokedexyz.png"
import CoffeeDelivery from "../../assets/coffee-delivery.png"
import GithubBlog from "../../assets/githubthumb.png"

export function Projetos() {
    return (
        <Containerbase>
            <h1>PROJETOS</h1>
            <LineProject>

                <ProjectContainer>
                    <ContainerTask id="pokedexyz" href="https://pokedexyz-alpha.vercel.app">
                        <img src={Pokedexyz} alt="Wallpaper Pokedex" />
                        <div>
                            <h3>Pokedexyz</h3>
                        </div>
                    </ContainerTask>
                    <CodeContainer href='https://github.com/Chris-Saints/Pokedexyz'>Código do projeto</CodeContainer>
                </ProjectContainer> 

                <Line />

                <ProjectContainer>
                    <ContainerTask id="dt-money" href="https://03-dt-money-rocket-seat.vercel.app">
                        <img src={DtMoney} alt="Thumb do Site Dt-Money"/>
                        <div>
                            <h3>Dt-Money</h3>
                        </div>
                    </ContainerTask>
                    <CodeContainer href='https://github.com/Chris-Saints/03-dt-money-RocketSeat'>Código do projeto</CodeContainer>
                </ProjectContainer>


                <Line />

                <ProjectContainer>
                    <ContainerTask id="xadrez" href="https://jogo-de-xadrez.vercel.app">
                        <img src={ChessMaster} alt="Thumb do Site Chess Master" />
                        <div>
                            <h3>Chess Master</h3>
                        </div>
                    </ContainerTask>  
                    <CodeContainer href='https://github.com/Chris-Saints/Jogo-de-Xadrez'>Código do projeto</CodeContainer>
                </ProjectContainer>

                <Line />


                

                

            </LineProject>

            <LineProject>

                <ProjectContainer>
                    <ContainerTask id="coffee-delivery" href="https://coffee-delivery-sigma-one.vercel.app">
                        <img src={CoffeeDelivery} alt="Thumb do site Coffee Delivery"/>
                        <div>
                            <h3>Coffee Delivery</h3>
                        </div>
                    </ContainerTask>
                    <CodeContainer href='https://github.com/Chris-Saints/Coffee-Delivery'>Código do projeto</CodeContainer>
                </ProjectContainer>

                <Line />

                <ProjectContainer>
                    <ContainerTask id="assistente-ia" href="https://assistente-de-meta-com-ia-gemini.vercel.app">
                        <img src={AssistenteIA} alt="Thumb do Site de Assistente de IA"/>
                        <div>
                            <h3>Assistente IA Gemini</h3>
                        </div>
                    </ContainerTask>
                    <CodeContainer href='https://github.com/Chris-Saints/Assistente-de-Meta-com-IA-Gemini'>Código do projeto</CodeContainer>
                </ProjectContainer>

                <Line />

                <ProjectContainer>
                    <ContainerTask id="timer-ignite" href="https://02-timer-ignite-rocketseat.vercel.app">
                        <img src={TimerIgnite} alt="Thumb do Site Timer - Ignite" />
                        <div>
                            <h3>Timer - Ignite</h3>
                        </div>
                    </ContainerTask> 
                    <CodeContainer href='https://github.com/Chris-Saints/02-Timer-Ignite-RocketSeat'>Código do projeto</CodeContainer>
                </ProjectContainer>

                <Line />
                
                

            </LineProject>

            <LineProject>

                <ProjectContainer>
                    <ContainerTask id="github-blog" href="https://github-blog-black-pi.vercel.app">
                        <img src={GithubBlog} alt="Thumb github Blog"/>
                        <div>
                            <h3>Github Blog</h3>
                        </div>
                    </ContainerTask> 
                    <CodeContainer href='https://github.com/Chris-Saints/Github-Blog'>Código do projeto</CodeContainer>
                </ProjectContainer>
        

                <Line />

                <ProjectContainer>
                    <ContainerTask id="to-do-list" href="https://00-to-do-list-ignite.vercel.app">
                        <img src= {ToDoList} alt="Thumb do site To-do List" />
                        <div>
                            <h3>To-do List</h3>
                        </div>
                        
                    </ContainerTask>

                    <CodeContainer href='https://github.com/Chris-Saints/00-To-do-List-Ignite'>Código do projeto</CodeContainer>
                </ProjectContainer>

                <Line />
                
                <ProjectContainer>
                    <ContainerTask id="ignite-feed" href="https://01-fundamentos-do-react-ignite-rock.vercel.app">
                        <img src={FundamentosIgnite} alt="Thumb do Site Ignite Feed" />
                        <div>
                            <h3>Ignite Feed</h3>
                        </div>
                    </ContainerTask> 
                    <CodeContainer href='https://github.com/Chris-Saints/01-Fundamentos-do-React-Ignite-RocketSeat'>Código do projeto</CodeContainer>
                </ProjectContainer>

                <Line />

                

            </LineProject>

            <LineProject>

                
                <ProjectContainer>
                    <ContainerTask id="classes-rpg" href="https://alura-classes-cartas.vercel.app">
                        <img src={CartasRPG} alt="Thumb do Site Classes RPG" />
                        <div>
                            <h3>Classes RPG</h3>
                        </div>
                    </ContainerTask> 
                    <CodeContainer href='https://github.com/Chris-Saints/Alura-Classes-Cartas'>Código do projeto</CodeContainer>
                </ProjectContainer> 



                <ProjectContainer>
                    <ContainerTask id="obra" href="#">
                        <img src={EmObra} alt="wallpaper amarelo e preto"/>
                        <div>
                            <h3>Em Obra</h3>
                        </div>
                    </ContainerTask> 

                </ProjectContainer> 

                <ProjectContainer>
                    <ContainerTask id="obra" href="#">
                        <img src={EmObra} alt="wallpaper amarelo e preto"/>
                        <div>
                            <h3>Em Obra</h3>
                        </div>
                    </ContainerTask> 

                </ProjectContainer> 
            </LineProject>
        </Containerbase>
    )
}



// <ProjectContainer>
//     <ContainerTask id="obra" href="#">
//         <img src={EmObra} alt="wallpaper amarelo e preto"/>
//         <div>
//             <h3>Em Obra</h3>
//         </div>
//     </ContainerTask> 
//     <CodeContainer href='#'>Código do projeto</CodeContainer>
// </ProjectContainer>