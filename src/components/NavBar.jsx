import React from 'react'
import './styles/navBar.css'
const NavBar = ({positionType}) => {
  return (
    <nav style={{position:positionType}} >
        <h1>Logo</h1>
        <ul></ul>
    </nav>
  )
}

export default NavBar