import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
    :root {
        --red: #D72F23;
        /* Gray Scale */
        --white: #fafafa;
        --gray-light: #E0E3DC;
        --gray: #6A6C6A;
        --black: #222222;
        /* text */
        --text: #58585B;
    }

    .container {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    .wrapper {
        width: 100%;
        display: flex;
        max-width: 1260px;
    }

    @font-face {
        font-family: 'Cubat';
        src: local('Cubat Light'), url(./uber-font/UberMoveAR-Light.ttf) format('truetype');
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: 'Cubat';
        src: local('Cubat Regular'), url(./uber-font/UberMoveAR-Regular.ttf) format('truetype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Cubat';
        src: local('Cubat Medium'), url(./uber-font/UberMoveAR-Medium.ttf) format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Geogtq';
        src: local('Geogtq-Th'), url(./geogtq-font/GeogrotesqueCyr-Thin.ttf) format('truetype');
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: 'Geogtq';
        src: local('Geogtq-El'), url(./geogtq-font/GeogrotesqueCyr-ExtraLight.ttf) format('truetype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Geogtq';
        src: local('Geogtq-Lg'), url(./geogtq-font/GeogrotesqueCyr-Light.ttf) format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Geogtq';
        src: local('Geogtq-Rg'), url(./geogtq-font/GeogrotesqueCyr-Regular.ttf) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Geogtq';
        src: local('Geogtq-Md'), url(./geogtq-font/GeogrotesqueCyr-Medium.ttf) format('truetype');
        font-weight: 500;
        font-style: normal;
    }


    html {
        scroll-behavior: smooth;
        font-family: 'Geogtq';
    }

    .no-scroll {
        overflow: hidden;
        overflow: -moz-scrollbars-none; /* Firefox */
        -ms-overflow-style: none; /* Internet Explorer / Edge */
    }

    img {
        user-select: none;
    }

    body {
        font-family: 'Geogtq', Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 1.42857143;
        background-color: var(--white);
        color: var(--black);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
    }
    

    /*? Headings */
    

    .visible {
        opacity: 1 !important;
    }

    h1 {
        font-size: 45px;
        line-height: 45px;
        font-weight: 600;
        text-transform: uppercase;
        @media (max-width: 575px) {
            h1 {
                
            }
        }
    }

    h2 {
        font-size: 30px;
        line-height: 30px;
        font-weight: 500;
        text-transform: uppercase;
        @media (max-width: 575px) {
            h2 {
                
            }
        }
    }

    h3 {
        font-size: 33.2px;
        line-height: 33.2px;
        font-weight: 400;
    }

    h4 {
        font-size: 27.9px;
        line-height: 27.9px;
        font-weight: 400;
    }

    h5 {
        font-size: 30px;
        line-height: 30px;
        font-weight: 400;
    }

    h6 {
        font-size: 25px;
        line-height: 25px;
        font-weight: 400;
    }

    p {
        font-size: 18px;
        font-weight: 200;
        line-height: normal;
    }

    /* Mobile */
    @media (max-width: 575px) {
        h1 {
            font-size: 40px;
            line-height: 40px;
            font-weight: 700;
        }
        
        h2 {
            font-size: 30px;
            line-height: 30px;
            font-weight: 700;
        }
        
        h3 {
            font-size: 30px;
            line-height: 30px;
            font-weight: 700;
        }
        
        h4 {
            font-size: 30px;
            font-weight: 700;
        }
        
        h5 {
            font-size: 25px;
            font-weight: 700;
        }
        
        h6 {
            font-size: 20px;
            font-weight: 700;
        }

        p {
            font-size: 16px;
        }
    } 
    // Estilo de la barra de desplazamiento para Chrome
    ::-webkit-scrollbar {
        width: 10px; /* Ancho de la barra de desplazamiento */
    }

    /* Estilo del botón de flecha (flecha de desplazamiento) en Chrome */
    ::-webkit-scrollbar-button {
        display: none;
    }

    /* Estilo de la pista (fondo) de la barra de desplazamiento en Chrome */
    ::-webkit-scrollbar-track {
        background-color: #f0f0f0; /* Color de fondo de la pista */
    }

    /* Estilo del pulgar (el indicador que se arrastra) de la barra de desplazamiento en Chrome */
    ::-webkit-scrollbar-thumb {
        background-color: var(--black); /* Color del pulgar */
        height: 80px;
    }

    /* Estilo del pulgar cuando se pasa el mouse por encima en Chrome */
    ::-webkit-scrollbar-thumb:hover {
        background-color: #999; /* Color del pulgar al pasar el mouse por encima */
    }

    ::selection {
        background-color: var(--yellow); /* Cambia el color de fondo del texto seleccionado */
        color: var(--black); /* Cambia el color del texto seleccionado */
    }
`