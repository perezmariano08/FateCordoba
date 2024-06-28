import React from 'react'
import { NavbarContainerStyled, NavbarList, NavbarWraper } from './NavbarStyles'

const Navbar = () => {
    return (
        <NavbarContainerStyled>
            <NavbarWraper>
                <img src="/logo-fate.svg" alt="Logo Fate" />
                <NavbarList>
                    <li><a href="">empresa</a></li>
                    <li><a href="">promo</a></li>
                    <li><a href="">productos</a></li>
                    <li><a href="">contacto</a></li>
                </NavbarList>
            </NavbarWraper>
        </NavbarContainerStyled>
    )
}

export default Navbar