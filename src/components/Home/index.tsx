import { ButtonContato, ButtonIcone, ButtonSobre, ContainerBase, ContainerButton, ContainerExp, ContainerInfo, ContainerProjetos, MainContainer } from "./styles";

export function Home() {

    return (
        <MainContainer>
            <ContainerBase>
                <h1>PROFESSIONAL <strong>FRONT-END</strong> WEB DEVELOPER</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat </p>

            </ContainerBase>

            <ContainerInfo>
                <ContainerExp>
                    <div>
                        <ButtonIcone>F</ButtonIcone>
                        <ButtonIcone>F</ButtonIcone>
                        <ButtonIcone>F</ButtonIcone>
                        <ButtonIcone>F</ButtonIcone>
                        <ButtonIcone>F</ButtonIcone>
                    </div>

                    <h2>ESPECIALIZAÇÕES</h2>
                </ContainerExp>

                <ContainerButton>
                    <ButtonSobre>SOBRE</ButtonSobre>

                    <ButtonContato>CONTATO</ButtonContato>
                </ContainerButton>

            </ContainerInfo>

            <ContainerProjetos>
                <h2>PROJETOS</h2>
                <section>
                    <button></button>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <button></button>
                </section>
            </ContainerProjetos>
        </MainContainer>
    )
}