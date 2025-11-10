import { BaseHeader, LogoHeader, NavHeader, NavItem, ThemeButton } from "./styles";

export function Header() {

    return (
        <BaseHeader>
            <LogoHeader  />

            <NavHeader>
                <NavItem to="/" end>Home</NavItem>
                <NavItem to="/sobre" >Sobre</NavItem>
                <NavItem to="/projetos">Projetos</NavItem>
            </NavHeader>

            <ThemeButton></ThemeButton>

        </BaseHeader>
    )
}