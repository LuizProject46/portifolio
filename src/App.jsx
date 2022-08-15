import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { createGlobalStyle } from "styled-components"
import { Bio } from "./components/Bio"
import { Profile } from "./components/Profile"


const GlobalStyle = createGlobalStyle`
  body, .container {
    background: ${props => (props.theme === "dark" ? 'var(--light-dark)' : 'var(--white-smoke)')};
  }
  
  @media(max-width: 600px){
    body, .container{
      background: ${props => (props.theme === "dark" ? 'var(--dark)' : 'var(--white)')};
    }
  }  
  
`


export default function App(){
  const [user, setUser] = useState({})
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
      fetch('https://api.github.com/users/LuizProject46').then( resp => {
        resp.json().then( resp => {
        
          let aux = {
              name: resp.name,
              avatar_url: resp.avatar_url,
              bio: resp.bio
          }


          setUser(aux)
        })
      })

      let theme = localStorage.getItem('@theme')

      if(theme){
        setTheme(theme)
      }
      
  }, [])
  return (
    <>
      <GlobalStyle theme={theme}/>
      <div className="container"> 
      
          <Profile 
            avatar={user.avatar_url}
            name={user.name}
            setTheme={setTheme}
            theme={theme}
          />
          <Bio
            description={user.bio}
            theme={theme}
          />
        
      </div>
    </>
   
    
  )
}