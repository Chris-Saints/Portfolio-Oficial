import { AnchorSocial, BasePerfil, ButtonContato, ButtonCV, ContainerButton, ContatoFixed, DivInfo, ImgPerfil, NavSocial } from "./styles";
import FotoPerfil from "../../assets/Foto1.jpg"
import InstagramLogo from "../../assets/instragam.webp"
import LinkedInLogo from "../../assets/linkedin.png"
import GithubLogo from "../../assets/GitHub.png"
import { useEffect, useState } from "react";
import { Envelope } from "phosphor-react";



export function Perfil() {

    const [visible, setVisible] = useState(3);
  
    useEffect(() => {
      function updateVisible() {
        if(window.innerWidth <= 480) {
          setVisible(40);
        }else if(window.innerWidth <= 900) {
          setVisible(50)
        } else if(window.innerWidth <= 1024) {
          setVisible(60)
        }   
      }

      updateVisible();
      window.addEventListener("resize", updateVisible);
      return () => window.removeEventListener("resize", updateVisible)
    }, [])

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

            <ContatoFixed href="mailto:christianpicoli18@gmail.com"><Envelope color={"black"} size={visible} /></ContatoFixed>

        </BasePerfil>
    )
}