import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Bio } from "./components/Bio"
import { Profile } from "./components/Profile"

export default function App(){
  const [user, setUser] = useState({})
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
  }, [])
  return (
    <div className="container"> 
      <Profile 
        avatar={user.avatar_url}
        name={user.name}
      />
      <Bio
        description={user.bio}
      />
    </div>
  )
}