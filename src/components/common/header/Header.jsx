import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Accueil</Link>
            </li>
            <li>
              <Link to='/courses'>Modules</Link>
            </li>
            <li>
              <Link to='/about'>À propos</Link>
            </li>
            {/* <li>
              <Link to='/team'>Équipe</Link>
            </li>
            <li>
              <Link to='/pricing'>Tarification</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li> */}
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
          <div className='button'> <Link to='/contact' style={{ color: 'white' }}>OBTENIR UN PACKAGE</Link></div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
