import styled from "styled-components";

export const SidebarStyled = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 200px;
    background-color: ${({theme}) => theme.body};
    animation: showSidebar .4s;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

    > svg {
        position: fixed;
        right: 2em;
        top: 1em;
        width: 30px;
        height: 30px;
        color: ${({theme}) => theme.blue};
        cursor: pointer;
    }

    @media (max-width: 500px) {
        svg {
            right: 1em
        }
    }

    @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 200px;
    }
  }
`;

export const ButtonClient = styled.button`
    width: 150px;
    display: block;
    margin: 2em auto 0;
    font-size: 0.9em;
    border: none;
    border-radius: 18px;
    padding: 6px 0;
    background-color: ${({theme}) => theme.red};
    color: #FFF;
`;

