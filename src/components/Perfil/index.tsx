import { useNavigate } from "react-router-dom";
import { AnchorSocial, BasePerfil, ButtonContato, ButtonCV, ContainerButton, DivInfo, ImgPerfil, NavSocial } from "./styles";

export function Perfil() {
    const navigate = useNavigate()

    return (
        <BasePerfil>
            <ImgPerfil />

            <DivInfo>
                <h2>CHRISTIAN PICOLI</h2>
                <p>Front-End Developer</p>
            </DivInfo>

            <DivInfo>
                <p>christianpicoli18@gmail.com</p>
                <p>+55 (11) 95889-0338</p>
            </DivInfo>

            <NavSocial>
                <AnchorSocial>Git</AnchorSocial>
                <AnchorSocial>Link</AnchorSocial>
                <AnchorSocial>Insta</AnchorSocial>
            </NavSocial>

            <ContainerButton>
                <ButtonContato onClick={() => navigate("/Contato")}>Contate-me!</ButtonContato>
                <ButtonCV>Download CV</ButtonCV>
            </ContainerButton> 
        </BasePerfil>
    )
}