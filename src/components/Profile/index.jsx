
import {Container, Content, ImageContainer, SocialContainer, TextName, TextJob} from './style'
import {FaCode, FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa'
export function Profile({ avatar, name }){
    return(
        <Container>
            <Content>
                <ImageContainer>
                    <img src={avatar} alt="Foto de perfil"  />
                </ImageContainer>
                <TextName>
                    {name}
                </TextName>
                <TextJob>
                   <FaCode size={14} color="rgb(15, 209, 122)"/> Desenvolvedor Web
                </TextJob>
                <SocialContainer>
                    
                    <p>  <a href="https://www.linkedin.com/in/luiz-gustavo-oliveira-21311615b/"><FaLinkedin size={35}/></a></p>
                    <p>  <a href="https://github.com/LuizProject46"><FaGithub size={35}/></a></p>
                    <p>  <a href="mailto:lgmoliveira@hotmail.com"><FaEnvelope size={35}/></a></p>
                </SocialContainer>
            </Content>
        </Container>
    )
}