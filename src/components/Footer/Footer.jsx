import React from 'react'
import { FooterContainerStyled, FooterItem, FooterItemList, FooterWrapper } from './FooterStyles'

const Footer = () => {
    return (
        <FooterContainerStyled>
            <FooterWrapper>
                <FooterItem>
                    <span>productos</span>
                    <FooterItemList>
                        <li>&gt; Automovil</li>
                        <li>&gt; Camioneta</li>
                        <li>&gt; Transporte</li>
                        <li>&gt; Agro/Vial</li>
                    </FooterItemList>
                </FooterItem>
                <FooterItem>
                    <span>contacto</span>
                    <FooterItemList>
                        <li>&gt; Contactanos por WhatsApp</li>
                    </FooterItemList>
                </FooterItem>
                <FooterItem>
                    <span>servicios</span>
                    <FooterItemList>
                        <li>&gt; Presion de inflado</li>
                        <li>&gt; Balanceo</li>
                        <li>&gt; Alineacion</li>
                        <li>&gt; Rotacion</li>
                        <li>&gt; Diagnostico</li>
                    </FooterItemList>
                </FooterItem>
            </FooterWrapper>
        </FooterContainerStyled>
    )
}

export default Footer