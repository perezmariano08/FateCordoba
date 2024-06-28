import React from 'react'
import { HeroContainerStyled, HeroInfo } from './HeroStyles'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <HeroContainerStyled>
            <HeroInfo>
                <h1>COMPRÁ TU NEUMÁTICO FATE AL MEJOR PRECIO</h1>
                <Button>
                    consultá por tu modelo
                </Button>
            </HeroInfo>
        </HeroContainerStyled>
    )
}

export default Hero