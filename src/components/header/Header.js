import React from 'react';
import "./Header.css"


const Header = (props) =>{
    return (
        <>
        <header className="main-header">
             <div className="container">
                <div className="mh-logo">
                    <img src="https://www.aqi.in/assets/images/aqi-logo.png" width="60"  alt="Flexbox.ninja" />
                </div>
                <nav className="main-nav">
                    <ul className="main-nav-list">
                        <li>
                            <a className="link" href="#">Home</a>
                        </li>
                        <li>
                            <a className="link" href="#">Dashboard</a>
                        </li>
                        <li>
                            <a  className="link"href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div> 
        </header>
        </>
    )
}

export default Header;