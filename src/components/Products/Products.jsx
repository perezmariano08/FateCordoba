import React, { useState } from 'react';
import { 
    ProductCatalago, 
    ProductImgCategory, 
    ProductItem, 
    ProductsCategories, 
    ProductsCategory, 
    ProductsCategoryItem, 
    ProductsContainerStyled, 
    ProductsDetails, 
    ProductsInfo, 
    ProductsWrapper 
} from './ProductsStyles';
import styled from 'styled-components';

const productData = {
    Automovil: {
        imageUrl: '/categoria-automovil.png',
        items: [
            { name: 'eximia', description: 'by Pininfarina HP' },
            { name: 'eximia', description: 'by Pininfarina Sport' },
            { name: 'eximia', description: 'by Pininfarina Green' },
            { name: 'sentiva sport', description: '' },
            { name: 'sentiva ar-360', description: '' },
            { name: 'prestiva', description: '' },
            { name: 'advance ar-35', description: '' },
            { name: 'ar-300', description: '' },
        ],
        catalogo: '/pdf/Auto-A4-web-ABRIL-2024.pdf'
    },
    Camioneta: {
        imageUrl: '/categoria-camioneta.png',
        items: [
            { name: 'eximia', description: 'by Pininfarina HP SUV' },
            { name: 'eximia', description: 'by Pininfarina HP SUV' },
            { name: 'range runner mtp', description: '' },
            { name: 'range runner ht', description: '' },
            { name: 'range runner at', description: 'serie 4' },
            { name: 'range runner at/r', description: '' },
            { name: 'range runner mt', description: '' },
            { name: 'range runner at/r', description: 'serie 4' },
            { name: 'plentia cross', description: '' },
            { name: 'advantia ar 410', description: '' },
            { name: 'ar 440', description: '' },
            { name: 'gaucha cd-38', description: '' },
            { name: 'super agarre', description: '' },
            // Add more camioneta products here
        ],
        catalogo: '/pdf/Catalogo_Camioneta_ENE2024.pdf'
    },
    Transporte: {
        imageUrl: '/categoria-transporte.png',
        items: [
            { name: 'fatecargo sr-200', description: 'Uso Regional sin cámara' },
            { name: 'fatecargo sr-210', description: 'Uso Regional sin cámara' },
            { name: 'fatecargo sr-260', description: 'Uso Regional sin cámara' },
            { name: 'fatecargo dr-400', description: 'Uso Regional sin cámara' },
            { name: 'fatecargo dr-410', description: 'Uso Regional sin cámara' },
            { name: 'fatecargo dr-460', description: 'Uso Regional sin cámara' },
            { name: 'fatecargo dr-470', description: 'Uso Regional sin cámara' },
            { name: 'fatecargo tr-500', description: 'Uso Regional sin cámara' },
            { name: 'fatecargo tr-560', description: 'Uso Regional sin cámara' },
            { name: 'fatecargo su-100', description: 'Servicio urbano sin cámara' },
            { name: 'fatecargo sc-240', description: 'Camino Mixto sin cámara' },
            { name: 'fatecargo dc-480', description: 'Camino Mixto sin cámara' },
            { name: 'fatecargo do-820', description: 'Fuera de Camino (OTR) sin cámara' },
            { name: 'fateexpress sr-200', description: 'Uso Regional sin cámara' },
            { name: 'fateexpress dr-400', description: 'Uso Regional sin cámara' },
            { name: 'carretera plus', description: '' },
            { name: 'pcr', description: '' },
            // Add more transporte products here
        ],
        catalogo: '/pdf/Transporte_web_20213.pdf'
    },
    AgroVial: {
        imageUrl: '/categoria-agrovial.png',
        items: [
            { name: 'g180', description: '' },
            { name: 'sdt-80', description: '' },
            { name: 'GR850 (R1-W)', description: '' },
            { name: 'GD-800 (R-1)', description: '' },
            { name: 'GD-700 (R-2)', description: '' },
            { name: 'GD-900 (R-4)', description: '' },
            { name: 'GD-800 TWARON (R-1)', description: '' },
            { name: 'GD-79 (R-1)', description: '' },
            { name: 'GD-79 TWARON (R-1)', description: '' },
            { name: 'FORESTAL (R-1)', description: '' },
            { name: 'GD-790 (R-3)', description: '' },
            { name: 'AGRARIA (R-1)', description: '' },
            { name: 'NT (R-1)', description: '' },
            { name: 'SP ARROCERA (R-2)', description: '' },
            { name: 'SD (F-3)', description: '' },
            { name: 'SDT (I-3)', description: '' },
            { name: 'SD (I-1)', description: '' },
            { name: '2-GUÍAS (F-2)', description: '' },
            { name: '3-GUÍAS (F-2)', description: '' },
            { name: '4-GUÍAS (F-2M)', description: '' },
            { name: '5-GUÍAS (I-1)', description: '' },
            { name: 'SEMBRADORA (I-1)', description: '' },
            { name: 'TRAILER', description: 'Uso Exclusivo Agrícola' },
            { name: 'VIAL (L-2/G-2)', description: '' },
            { name: 'VIAL (L-3)', description: '' },
            { name: 'APLANADORA (C-1)', description: '' },
        ],
        catalogo: '/pdf/Catalogo_Agro_Vial-Ori-01.2024_.pdf'
    }
};

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('Automovil');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const selectedData = productData[selectedCategory];

    return (
        <ProductsContainerStyled>
            <ProductsWrapper>
                <h2>nuestros productos</h2>
                <ProductsInfo>
                    <ProductsCategories>
                        {Object.keys(productData).map((category) => (
                            <ProductsCategoryItem key={category} onClick={() => handleCategoryClick(category)}>
                                <StyledProductsCategory isSelected={category === selectedCategory}>
                                    <span>{category}</span>
                                    <img src={`/${category.toLowerCase()}.png`} alt={category} />
                                </StyledProductsCategory>
                                <ProductCatalago href={productData[category].catalogo} target='_blank'>
                                    Catalogo
                                </ProductCatalago>
                            </ProductsCategoryItem>
                        ))}
                    </ProductsCategories>
                    <ProductImgCategory imageUrl={selectedData.imageUrl} />
                    <ProductsDetails>
                        {selectedData.items.map((item, index) => (
                            <ProductItem key={index}>
                                <span>{item.name}</span>
                                {item.description && <p>{item.description}</p>}
                            </ProductItem>
                        ))}
                    </ProductsDetails>
                </ProductsInfo>
            </ProductsWrapper>
        </ProductsContainerStyled>
    );
};

export default Products;

// Styled component with conditional background color
const StyledProductsCategory = styled(ProductsCategory)`
    background-color: ${props => props.isSelected ? '#D72F23' : '#E0E3DC'};
    span {
        color: ${props => props.isSelected ? '#E0E3DC' : '#D72F23' };
    }
    cursor: pointer;

    &:hover {
        img {
            opacity: .9;
        }
    }
`;
