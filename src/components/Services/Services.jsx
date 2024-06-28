import React from 'react'
import { ServiceInfo, ServiceInfoDetail, ServiceInfoDetailText, ServicesContainerStyled, ServicesDivider, ServicesInfoWrapper, ServicesWrapper } from './ServicesStyles'

const Services = () => {
    return (
        <ServicesContainerStyled>
            <ServicesWrapper>
                <h2>servicios</h2>
                <ServicesInfoWrapper>
                    <ServiceInfo>
                        <span>Balanceo</span>
                        <ServiceInfoDetail>
                            <ServiceInfoDetailText>
                                <span>¿Por qué debo balancear las ruedas?</span>
                                <p>Los neumáticos bien balanceados contribuyen a un mayor confort de marcha y se aseguran una mayor vida útil. Los neumáticos mal balanceados pueden generar vibraciones, cuyas consecuencias son una mayor fatiga del conductor, desgaste prematuro y desparejo de los neumáticos y un desgaste mayor del sistema de amortiguación del vehículo.</p>
                            </ServiceInfoDetailText>
                            <ServicesDivider/>
                            <ServiceInfoDetailText>
                                <span>¿Cuándo debo balancear las ruedas?</span>
                                <p>Los neumáticos deben ser balanceados cuando son montados en las llantas por primera vez (neumáticos nuevos), o cuando son remontados luego de ser reparados. Además, deben ser rebalanceados ante la primera señal de vibración o cada 10.000 kilómetros. Si problemas de vibración no se eliminan con el balanceo, debe revisar la alineación y/o el sistema de suspensión. Un balanceo y una alineación correctos contribuyen a un desgaste parejo de los neumáticos.</p>
                            </ServiceInfoDetailText>
                        </ServiceInfoDetail>
                    </ServiceInfo>
                    <ServiceInfo>
                        <span>Alineación</span>
                        <ServiceInfoDetail>
                            <ServiceInfoDetailText>
                                <span>¿Qué es la alineación?</span>
                                <p>Se dice que un vehículo está correctamente alineado cuando todos los componentes de suspensión y dirección están sincronizados, y todas sus ruedas y neumáticos se presentan paralelos al vehículo y entre sí. Bajo esta condición se producirá un desgaste uniforme de los neumáticos y se asegura también un control preciso de la dirección.</p>
                            </ServiceInfoDetailText>
                            <ServicesDivider/>
                            <ServiceInfoDetailText>
                                <span>¿Cuándo debo realizar una alineación?</span>
                                <p>Una alineación es necesaria cuando se cambian los neumáticos, si observa un desgaste prematuro irregular, después de fuertes impactos en obstáculos o baches, cuando el vehículo presenta tendencias a la deriva ("tira" hacia un lado) o inestabilidad, y cada 10.000 kilómetros.</p>
                            </ServiceInfoDetailText>
                        </ServiceInfoDetail>
                    </ServiceInfo>
                </ServicesInfoWrapper>
            </ServicesWrapper>
        </ServicesContainerStyled>
    )
}

export default Services