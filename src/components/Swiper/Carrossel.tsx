import toDoList from "../../assets/to-do-List.png"
import TimerIgnite from "../../assets/timer-ignite.png"
import ChessMaster from "../../assets/chess-master.png"
import DtMoney from "../../assets/dt-money.png"
import CardsRpg from "../../assets/cartas-rpg.png"
import { Swiper, SwiperSlide } from "swiper/react"
import { Item, ItemOverlay } from "./styles"
import 'swiper/css';

export function Carrossel() {
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

    return (
        <Swiper
            direction="horizontal"
            spaceBetween={1}
            slidesPerView={3}
            breakpoints={{
                1024: { slidesPerView: 3},
                768: { slidesPerView: 2},
                0: { slidesPerView: 1},
            }}
            grabCursor={true}
            loop={false}
        >
            {projetos.map((projeto) => (
                <SwiperSlide key={projeto.nome}>
                    <Item>
                        <img src={projeto.img} alt={projeto.nome} />
                        <ItemOverlay>
                            {projeto.nome}
                        </ItemOverlay>
                    </Item>
                </SwiperSlide>
            ))}

        </Swiper>
    )
}