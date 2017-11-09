import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

let page_links = [
    { name: 'Home', to: '/' },
    { name: 'Contacts', to: '/contacts' }
]

const Navbar = () => (
    <div id='navbar'>
        <span>Contact List App</span>
        <div id='navbar-links'>
            {
                page_links.map(link => {
                    return <Link to={link.to}>{link.name}</Link>
                })
            }

        </div>
    </div>
);

export default Navbar;