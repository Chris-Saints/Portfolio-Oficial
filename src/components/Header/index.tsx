
import { useNavigate } from "react-router-dom";
import { BaseHeader, LogoHeader, NavButtonHeader, NavHeader, ThemeButton } from "./styles";

export function Header() {
    const navigate = useNavigate()

    return (
        <BaseHeader>
            <LogoHeader  />

            <NavHeader>
                <NavButtonHeader onClick={() => navigate("/")}>Home</NavButtonHeader>
                <NavButtonHeader onClick={() => navigate("/sobre")}>Sobre</NavButtonHeader>
                <NavButtonHeader onClick={() => navigate("/projetos")}>Projetos</NavButtonHeader>
            </NavHeader>

            <ThemeButton></ThemeButton>

        </BaseHeader>
    )
}