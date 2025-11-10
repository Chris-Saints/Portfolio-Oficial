import { AnchorSocial, BasePerfil, ButtonContato, ButtonCV, ContainerButton, DivInfo, ImgPerfil, NavSocial } from "./styles";
import FotoPerfil from "../../assets/Foto1.jpg"
import InstagramLogo from "../../assets/instragam.webp"
import LinkedInLogo from "../../assets/linkedin.png"
import GithubLogo from "../../assets/GitHub.png"



export function Perfil() {

    return (
        <BasePerfil>
            <ImgPerfil src={FotoPerfil} />

            <DivInfo>
                <h2>CHRISTIAN PICOLI</h2>
                <p>Front-End Developer</p>
                <div>
                    <p>christianpicoli18@gmail.com</p>
                </div>
            </DivInfo>

            <NavSocial>

                <AnchorSocial href="https://github.com/Chris-Saints">
                    <img src={GithubLogo} alt="Logo Github" />
                </AnchorSocial>

                <AnchorSocial href="https://www.linkedin.com/in/christian-picoli-961897344">
                    <img src={LinkedInLogo} alt="Logo LinkedIn" />
                </AnchorSocial>

                <AnchorSocial href="https://www.instagram.com/picolisev/?igsh=MTVwdXZhNjI4cnY4cQ%3D%3D">
                    <img src={InstagramLogo} alt="Logo Instagram" />
                </AnchorSocial>

            </NavSocial>

            <ContainerButton>
                <ButtonContato href="mailto:christianpicoli18@gmail.com">Contate-me!</ButtonContato>
                <a href="/CurriculoChristian.pdf" download="Curriculo-Christian.pdf">
                    <ButtonCV>Download CV</ButtonCV>
                </a>

            </ContainerButton> 

        </BasePerfil>
    )
}