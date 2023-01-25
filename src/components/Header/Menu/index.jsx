import { MenuStyled } from "./style"

export function Menu({display}) {
    return (
        <MenuStyled>
            <nav className={display}>
                <ul>
                    <li><a>Quem somos</a></li>
                    <li><a href="#contractedServices">Serviços</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </MenuStyled>
    )
}