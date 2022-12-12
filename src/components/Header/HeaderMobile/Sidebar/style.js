import styled from "styled-components";

export const SidebarStyled = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 300px;
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

    @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

