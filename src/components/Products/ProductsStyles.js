import styled from "styled-components";

export const ProductsContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 0 40px 0;
    height: auto;
`

export const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 30px;
    width: 100%;
    max-width: 1200px;
`

export const ProductsInfo = styled.div`
    display: flex;
    gap: 15px;
`

export const ProductsCategories = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const ProductsCategoryItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const ProductsCategory = styled.div`
    width: 250px;
    height: 150px;
    padding: 20px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all .2s ease-in-out;
    span {
        font-weight: 500;
        font-size: 18px;
        text-transform: uppercase;
        color: var(--red);
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
`

export const ProductsDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 800px;
    flex-wrap: wrap;
    padding: 0 0 0 5px;
    column-gap: 40px;
`

export const ProductCatalago = styled.a`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #6A6C6A;
    text-transform: uppercase;
    color: var(--white);
`

export const ProductImgCategory = styled.div`
    display: flex;
    width: 400px;
    background-image: url(${props => props.imageUrl});
    background-size: cover; /* Para cubrir toda el área */
    background-position: center; /* Para centrar la imagen */
`

export const ProductItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 16px;
    span {
        color: red;
        text-transform: uppercase;
        font-weight: 500;
    }
    p {
        font-style: italic;
        font-weight: 300;
    }
`