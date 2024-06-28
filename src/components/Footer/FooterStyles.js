import styled from "styled-components";

export const FooterContainerStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    background-color: var(--gray-light);
`

export const FooterWrapper = styled.footer`
    max-width: 1200px;
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 100px;
    width: 100%
`

export const FooterItem = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 10px;
    span {
        font-weight: 500;
        text-transform: uppercase;
        font-size: 16px;
    }
`

export const FooterItemList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    li {
        font-size: 16px;
        font-weight: 300;
    }
`