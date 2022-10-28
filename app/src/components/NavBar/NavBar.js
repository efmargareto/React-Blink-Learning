import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css' 

export const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink className='NavBar-link NavBar-link_left' to='/exercice'>Exercice</NavLink>
      <NavLink className='NavBar-link' to='/result'>Result</NavLink>
    </div>
  )
}
