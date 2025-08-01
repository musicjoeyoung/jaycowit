import "./Navbar.scss"

import resume from "../../../src/assets/documents/JayCowit_RESUME.pdf"
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useState } from 'react';

const Navbar = () => {
  const { darkMode } = useTheme();
    return (
        <>
            <nav className={`navbar ${darkMode ? 'dark dark--darkNavbar' : ''}`}>
                {/* {console.log(darkMode)} */}
                <a className="navbar__link" href="#about">About</a>
                <div className="dropdown">Radio/Podcasts <span className="dropdown__triangle">▼</span>
                    {/*      <button className="dropbtn">Radio
                    <i className="fa fa-caret-down"></i>
                </button> */}
                    <div className="dropdown-content">
                        <a className="navbar__link" href="#soundDesign">Sound Design</a>
                        <a className="navbar__link" href="#editing">Editing/Writing</a>
                        <a className="navbar__link" href="#voice">Voiceover/Hosting</a>
                        <a className="navbar__link" href="#coaching">Directing/Voice Coaching</a>
                    </div>
                </div>
                <a className="navbar__link" href="#music">Music</a>
                <a className="navbar__link" href="#art">Art</a>
                <a className="navbar__link" href="#press">Press</a>
                <a className="navbar__link" href={resume} target="_blank" download>Resume</a>
                <a className="navbar__link" href="#contact">Contact</a>

                <div className="navbar__theme-toggle">
                    <ThemeToggle />
                </div>

                {/* <img className="navbar__toggle-mobile" src={`/src/assets/images/icons/${toggleSvg}`} onClick={() => setDarkMode(!darkMode)} /> */}
            </nav>

            {/* mobile hamburger menu */}
            <nav className={`mobile-navbar ${darkMode ? 'dark--darkMobileNavbar' : ''}`} >
                <div className="menuToggle">
                    <input type="checkbox" />
                    <span className="menuToggle__hamburger"></span>
                    <span className="menuToggle__hamburger"></span>
                    <span className="menuToggle__hamburger"></span>


                    <ul className={`mobile-ul ${darkMode ? 'dark--darkMobileUl' : ''}`}>
                        <li className="mobile-ul__li">
                            <a className="mobile-ul__a" href="#about">About</a>
                        </li>
                        <li className="dropdown dropdown--mobile">
                            <a className="mobile-ul__a dropbtn" href="#">Radio/Podcasts <span className="dropdown__triangle">▼</span></a>
                            <div className="dropdown-content">
                                <a className="mobile-ul__a" href="#soundDesign">Sound Design</a>
                                <a className="mobile-ul__a" href="#editing">Editing/Writing</a>
                                <a className="mobile-ul__a" href="#voice">Voiceover/Hosting</a>
                                <a className="mobile-ul__a" href="#coaching">Directing/Voice Coaching</a>
                            </div>
                        </li>
                        <li className="mobile-ul__li">
                            <a className="mobile-ul__a" href="#music">Music</a>
                        </li>
                        <li className="mobile-ul__li">
                            <a className="mobile-ul__a" href="#art">Art</a>
                        </li>
                        <li className="mobile-ul__li">
                            <a className="mobile-ul__a" href="#press">Press</a>
                        </li>
                        <li className="mobile-ul__li">
                            <a className="mobile-ul__a" href={resume} target="_blank">Resume</a>
                        </li>
                        <li className="mobile-ul__li">
                            <a className="mobile-ul__a" href="#contact">Contact</a>
                        </li>
                        <li className="mobile-ul__li" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '1rem'
                        }}>
                            <ThemeToggle />
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar