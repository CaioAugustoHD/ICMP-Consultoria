import styled from "styled-components";

export const MenuStyled = styled.div`

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.text}
    }

    .desktopMenu {
        ul {
            display: flex;
            gap: 3em;
        }

        @media (max-width: 985px) {
            font-size: 0.9em;
        }
    }

    .mobileMenu {
        margin-top: 69px;

        ul {
            line-height: 3em;
            text-align: center;
        }
    }
`;