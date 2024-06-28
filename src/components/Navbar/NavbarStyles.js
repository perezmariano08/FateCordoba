import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    background-color: var(--gray-light);
    height: 80px;
    border-top: 5px solid var(--red);
    z-index: 99;
`

export const NavbarWraper = styled.header`
    max-width: 1260px;
    display: flex;
    padding: 0 20px;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    img {
        height: 46px;
    }
`

export const NavbarList = styled.ul`
    display: flex;
    gap: 20px;

    li a {
        font-weight: 500;
        text-transform: uppercase;
        color: var(--text);
    }
`