import { MenuStyled } from "./style"

export function Menu({display}) {
    return (
        <MenuStyled>
            <nav className={display}>
                <ul>
                    <li>Quem somos</li>
                    <li>Serviços</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </MenuStyled>
    )
}