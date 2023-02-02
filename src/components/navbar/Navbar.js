import React from 'react';
import {NavLink} from "react-router-dom";
import './style.css';
import lamborghini from '../../assets/lamborghini.svg'

const Navbar = () => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <img className="lamborghini__logo" src={lamborghini} alt="lamborghini"/>
                    </NavLink>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink
                            to="/"
                            className={({isActive}) =>
                            isActive ? activeLink : normalLink
                            }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink
                            to="/gallery"
                            className={({isActive}) =>
                            isActive ? activeLink : normalLink
                            }
                            >
                                Gallery
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink
                            to="/contacts"
                            className={({isActive}) =>
                            isActive ? activeLink : normalLink
                            }
                            >
                                Contacts
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink
                            to="/about"
                            className={({isActive}) =>
                            isActive ? activeLink : normalLink
                            }
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;