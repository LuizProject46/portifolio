import React from "react"
import { FaCode, FaCss3,  FaDocker, FaHtml5, FaJs, FaNode, FaPencilAlt, FaPhp, FaReact } from "react-icons/fa"
import {Card,Container, Description, Tech, TechsContainer, Title} from './style'

export function Bio({ description }){
    return (
        <Container>
            <Card>
                <Title>
                    <FaPencilAlt color="rgb(15, 209, 122)"/> Sobre mim
                </Title>
                <Description>
                    {description}
                </Description>
            </Card>
            <Card>
                <Title>
                    <FaCode color="rgb(15, 209, 122)"/> Tecnologias
                </Title>
                <TechsContainer>
                    <Tech>
                        <FaJs size={80} color="yellow"/>
                    </Tech>
                    <Tech>
                        <FaPhp size={80} color="#2b1bd1"/>
                    </Tech>
                    <Tech>
                        <FaHtml5 size={80} color="orange"/>
                    </Tech>
                    <Tech>
                        <FaCss3 size={80} color="#1457ff"/>
                    </Tech>
                    <Tech>
                        <FaNode size={80} color="#6e9007"/>
                    </Tech>
                    <Tech>
                        <FaReact size={80} color="#4a8fae"/>
                    </Tech>
                    <Tech>
                        <FaDocker size={80} color="#2795f6"/>
                    </Tech>
                    
                </TechsContainer>
            </Card>

        </Container>
    )
}