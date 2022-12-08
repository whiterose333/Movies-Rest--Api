import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './jason.svg'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <img id="logo" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink exact to="/home" >Home</NavLink>
                        
                    </li>
                </ul>
            </nav>
        </header>
    )
}