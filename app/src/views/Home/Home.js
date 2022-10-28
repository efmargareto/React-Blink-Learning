import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import logo from './../../assets/logo.png'
import './Home.css'

export const Home = () => {
  return (
    <div className='Home'>
      <div className='container'>
          <img id='logo' src={logo} alt='logo'></img>
          <h1>Prueba Técnica React</h1>
          <NavBar />
      </div>
    </div>
  )
}
