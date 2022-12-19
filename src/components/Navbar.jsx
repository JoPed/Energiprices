import '../scss/Navigation.scss'

import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [ isMenuOpen, setIsMenuOpen ] = useState( false );

  const liRef = useRef( [] );

  const handleClickHamburgerMenu = () => setIsMenuOpen( !isMenuOpen )

  const closeMenu = () => setIsMenuOpen( false );


  return (
    <header className="container-fluid " id="navigation">
      <nav className="container-fluid " id="navbar">
        <ul className={ isMenuOpen ? "navbar__menu active" : "navbar__menu" }>
          <li>
            <NavLink to="/" onClick={ closeMenu } >
              Energipriser
            </NavLink>
          </li>
          <li>
            <NavLink to="/guide" onClick={ closeMenu } >
              Guide
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={ closeMenu } >
              Om projektet
            </NavLink>
          </li>
        </ul>

        <div id="hamburger" onClick={ handleClickHamburgerMenu }>
          { isMenuOpen ? <FaTimes size={ 30 } /> : <FaBars size={ 30 } /> }
        </div>

      </nav>
    </header>
  );


}
export default Navbar;