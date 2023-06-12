import React from 'react'
import imagen from "../../public/img/carrito.png"

import { Link, useLocation } from '@remix-run/react'
function Navegacion() {

    const location = useLocation()
    return (
        <nav className='navegacion'>
            <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
                Inicio
            </Link>
            <Link to='/nosotros' className={location.pathname === '/nosotros' ? 'active' : ''}>
                Nosotros
            </Link>
            <Link to='/posts' className={location.pathname === '/posts' ? 'active' : ''}>
                Blog
            </Link>
            <Link to='/guitarras' className={location.pathname === '/guitarras' ? 'active' : ''}>
                tienda
            </Link>
            <Link to='/carrito' className={location.pathname === '/guitarras' ? 'active' : ''}>
                <img src={imagen} alt="carrito de compras" />
            </Link>
        </nav>
  )
}

export default Navegacion