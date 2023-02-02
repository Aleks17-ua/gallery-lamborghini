import React from 'react';
import "./style.css";

import facebook from './../../assets/icons/facebook.svg'
import instagram from './../../assets/icons/instagram.svg'
import twitter from './../../assets/icons/twitter.svg'
import youtube from './../../assets/icons/youtube.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="#!">
                                <img src={facebook} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={instagram} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={twitter} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={youtube} alt="Link"/>
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 Copyright</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;