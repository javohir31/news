import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='page-header'>
        <div className="container">
            <div className="content">
                <Link to={'/'} className="logo">Logo</Link>

                <nav className='header-nav'>
                    <NavLink to={'/'} className="header-nav_link">Home</NavLink>
                    <NavLink to={'/about'} className="header-nav_link">about</NavLink>
                    <NavLink to={'/contact'} className="header-nav_link">contact</NavLink>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header