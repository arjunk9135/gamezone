import React from 'react';
import './topbar.css'

export const Topbar = () => {
    return (
        <div>
            <div class="navbar">
                <div class="nav-logo">
                    <a href="#">Logo</a>
                </div>
                <div class="nav-items">
                    <ul>
                        <li><a href="#"> Home </a></li>
                        <li><a href="#"> Services </a></li>
                        <li><a href="#"> About </a></li>
                        <li><a href="#"> Contact </a></li>
                    </ul>
                </div>
                <div class="nav-button">
                <div class="anim-layer"></div>
                    <button class="animated-button">
                        <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        <span class="text">Sign In</span>
                        <span class="circle"></span>
                        <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div id="hamburger-menu">&#9776;</div>
            </div>

            
        </div>
    )
}
