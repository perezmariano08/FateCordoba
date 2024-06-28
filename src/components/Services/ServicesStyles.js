import styled from "styled-components";

export const ServicesContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0 80px 0;
    height: auto;
`

export const ServicesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 30px;
    width: 100%;
    max-width: 1200px;
`

export const ServicesInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const ServiceInfo = styled.div`
    display: flex;
    gap: 50px;
    span {
        min-width: 105px;
        font-size: 24px;
    }
`

export const ServiceInfoDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const ServiceInfoDetailText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    font-weight: 500;
    span {
        font-size: 16px;
        color: var(--red);
    }
    p {
        font-weight: 400;
        color: var(--text);
    }
`

export const ServicesDivider = styled.div`
    height: 1px;
    background-color: var(--gray-light);
    width: 100%;
`