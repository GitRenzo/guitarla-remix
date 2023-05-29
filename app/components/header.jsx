import React from 'react'
import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navegacion from './navegacion'
function Header() {

  return (
    <header className='header'>
      <div className='contenedor barra'>
        <Link to='/ '>
          <img className='logo' alt='imagen logo' src={logo}/> 
        </Link>
        <Navegacion/>
      </div>
    </header>
  )
}

export default Header