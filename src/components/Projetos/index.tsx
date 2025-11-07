import { Containerbase, ContainerTask, LineProject } from "./styles";
import TimerIgnite from "../../assets/timer-ignite.png"
import CartasRPG from "../../assets/cartas-rpg.png"
import ChessMaster from "../../assets/chess-master.png"
import FundamentosIgnite from "../../assets/fundamentos-ignite.png"
import ToDoList from "../../assets/to-do-List.png"
import AssistenteIA from "../../assets/assistente-ia-gemini.png"
import DtMoney from "../../assets/dt-money.png"
import EmObra from "../../assets/emobras.jpg"

export function Projetos() {
    return (
        <Containerbase>
            <h1>PROJETOS</h1>
            <LineProject>
                <ContainerTask href="https://00-to-do-list-ignite.vercel.app">
                    <img src= {ToDoList} alt="Thumb do site To-do List" />
                    <div>
                        <h3>To-do List</h3>
                    </div>
                </ContainerTask>

                <ContainerTask href="https://02-timer-ignite-rocketseat.vercel.app">
                    <img src={TimerIgnite} alt="Thumb do Site Timer - Ignite" />
                    <div>
                        <h3>Timer - Ignite</h3>
                    </div>
                </ContainerTask> 

                <ContainerTask href="https://jogo-de-xadrez.vercel.app">
                    <img src={ChessMaster} alt="Thumb do Site Chess Master" />
                    <div>
                        <h3>Chess Master</h3>
                    </div>
                </ContainerTask>  
            </LineProject>

            <LineProject>
                <ContainerTask href="https://assistente-de-meta-com-ia-gemini.vercel.app">
                    <img src={AssistenteIA} alt="Thumb do Site de Assistente de IA"/>
                    <div>
                        <h3>Assistente IA Gemini</h3>
                    </div>
                </ContainerTask>

                <ContainerTask href="https://01-fundamentos-do-react-ignite-rock.vercel.app">
                    <img src={FundamentosIgnite} alt="Thumb do Site Ignite Feed" />
                    <div>
                        <h3>Ignite Feed</h3>
                    </div>
                </ContainerTask> 

                <ContainerTask href="https://alura-classes-cartas.vercel.app">
                    <img src={CartasRPG} alt="Thumb do Site Classes RPG" />
                    <div>
                        <h3>Classes RPG</h3>
                    </div>
                </ContainerTask>  
            </LineProject>

            <LineProject>
                <ContainerTask href="https://03-dt-money-rocket-seat.vercel.app">
                    <img src={DtMoney} alt="Thumb do Site Dt-Money"/>
                    <div>
                        <h3>Dt-Money</h3>
                    </div>
                </ContainerTask>

                <ContainerTask href="#">
                    <img src={EmObra} alt="wallpaper amarelo e preto"/>
                    <div>
                        <h3>Em Obra</h3>
                    </div>
                </ContainerTask> 

                <ContainerTask href="#">
                    <img src={EmObra} alt="wallpaper amarelo e preto" />
                    <div>
                        <h3>Em Obra</h3>
                    </div>
                </ContainerTask>  
            </LineProject>
        </Containerbase>
    )
}