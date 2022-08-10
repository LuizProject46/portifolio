
import {Container, Content, ImageContainer, SocialContainer, TextName, SwitchThemeContainer, TextJob} from './style'
import {FaCode, FaEnvelope, FaGithub, FaLinkedin, FaMoon, FaSun} from 'react-icons/fa'
import Switch from 'react-switch'
export function Profile({ avatar, name, setTheme, theme }){
    
    function handleTheme(){
        if(theme === "dark"){
            setTheme('light')
            localStorage.setItem('@theme', 'light')
        }else{
            setTheme('dark')
            localStorage.setItem('@theme', 'dark')
        }
    }

    return(
        <Container theme={theme}>
            <SwitchThemeContainer>
                <Switch 
                    offHandleColor="#333" 
                    onHandleColor="#333" 
                    checkedIcon={<FaSun size={20} color="#bfa30a" style={{ margin: 5}}/>} 
                    onColor="#f1f1f1" 
                    uncheckedIcon={<FaMoon style={{ margin: 5}}/>}
                    onChange={handleTheme}
                    checked={theme === 'dark' ? false : true}
                />
            </SwitchThemeContainer>
            <Content>
                
                <ImageContainer>
                    <img src={avatar} alt="Foto de perfil"  />
                </ImageContainer>
                <TextName theme={theme}>
                    {name}
                </TextName>
                <TextJob theme={theme}>
                   <FaCode size={14} color="rgb(15, 209, 122)"/> Desenvolvedor Web
                </TextJob>
                <SocialContainer theme={theme}>
                    
                    <p>  <a href="https://www.linkedin.com/in/luiz-gustavo-oliveira-21311615b/"><FaLinkedin size={35}/></a></p>
                    <p>  <a href="https://github.com/LuizProject46"><FaGithub size={35}/></a></p>
                    <p>  <a href="mailto:lgmoliveira@hotmail.com"><FaEnvelope size={35}/></a></p>
                </SocialContainer>
            </Content>
        </Container>
    )
}