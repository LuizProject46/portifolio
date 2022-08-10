import React from "react"
import { FaCode, FaCss3,  FaDocker, FaHtml5, FaJs, FaNode, FaPencilAlt, FaPhp, FaReact } from "react-icons/fa"
import {Card,Container, Description, Tech, TechsContainer, Title} from './style'

export function Bio({ description, theme }){
    return (
        <Container>
            <Card theme={theme}>
                <Title theme={theme}>
                    <FaPencilAlt color="rgb(15, 209, 122)"/> Sobre mim
                </Title>
                <Description theme={theme}>
                    {description}
                </Description>
            </Card>
            <Card theme={theme}>
                <Title theme={theme}>
                    <FaCode color="rgb(15, 209, 122)"/> Tecnologias
                </Title>
                <TechsContainer>
                    <Tech theme={theme}>
                        <FaJs size={80} color="#ecdf17"/>
                    </Tech>
                    <Tech theme={theme}>
                        <FaPhp size={80} color="#2b1bd1"/>
                    </Tech>
                    <Tech theme={theme}>
                        <FaHtml5 size={80} color="orange"/>
                    </Tech>
                    <Tech theme={theme}>
                        <FaCss3 size={80} color="#1457ff"/>
                    </Tech>
                    <Tech theme={theme}>
                        <FaNode size={80} color="#6e9007"/>
                    </Tech>
                    <Tech theme={theme}>
                        <FaReact size={80} color="#4a8fae"/>
                    </Tech>
                    <Tech theme={theme}>
                        <FaDocker size={80} color="#2795f6"/>
                    </Tech>
                    
                </TechsContainer>
            </Card>

        </Container>
    )
}