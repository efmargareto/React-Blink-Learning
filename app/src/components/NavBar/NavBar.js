import React from 'react'
import { NavLink } from 'react-router-dom'
import { store } from '../../store.js';
import './NavBar.css' 

export const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink className='button button1 button-green' to='/exercice'>Ejercicio</NavLink>
      <NavLink className={`button ${store.getState().enableResult?'':'disabled'}`} to='/result'>Resultado</NavLink>
    </div>
  )
}
