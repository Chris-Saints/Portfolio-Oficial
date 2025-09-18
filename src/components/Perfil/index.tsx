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

                <AnchorSocial href="https://github.com/Chris-Saints">
                    Git
                </AnchorSocial>

                <AnchorSocial href="https://www.linkedin.com/in/christian-picoli-961897344">
                    Link
                </AnchorSocial>

                <AnchorSocial href="https://www.instagram.com/picolisev/?igsh=MTVwdXZhNjI4cnY4cQ%3D%3D">
                    Insta
                </AnchorSocial>

            </NavSocial>

            <ContainerButton>
                <ButtonContato onClick={() => navigate("/Contato")}>Contate-me!</ButtonContato>
                <ButtonCV>Download CV</ButtonCV>
            </ContainerButton> 
        </BasePerfil>
    )
}