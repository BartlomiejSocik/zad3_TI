import React from 'react';
import { NavLink } from 'react-router-dom'

import '../styles/headerStyle.css'

const Header = () => {
  return(
    <header className='header'>
      <div>
        <NavLink
          to="/"
        >
          <img src="jpg/logov1.png" alt="logo jachty.pl" className='logo-header'/>
        </NavLink>
      </div>
      <div className='links-box'>
        <NavLink
          to="/o-nas"
          className="nav-link"
          activeClassName="selected"
        >
          O nas
        </NavLink>
        <NavLink
          to="/informacje-o-jednostakch"
          className="nav-link" 
          activeClassName="selected"
        >
          Informacje o jachtach
        </NavLink>
      </div>
    </header>
  )
}

export default Header