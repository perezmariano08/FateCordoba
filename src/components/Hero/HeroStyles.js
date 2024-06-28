import styled from "styled-components";

export const HeroContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 20px;
    background-image: url(/FATE-cargo.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    text-align: center;
    &::before {
        content: '';
        position: absolute;
        background-color: var(--black);
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: .6;
    }
`

export const HeroInfo = styled.div`
    z-index: 2;
    display: flex;
    color: var(--white);
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
`