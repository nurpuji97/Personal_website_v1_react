import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';
import Logo_Desktop from '../../Assets/img/Pujie.png';
import Logo_Mobile from '../../Assets/img/P.svg';

export default function Navbar(){

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return(
        <nav>

            {/* nav logo */}
            <div className="nav__logo">

                {/* logo desktop */}
                <img src={Logo_Desktop} alt="logo" className="logo_desktop" />

                {/* logo Mobile */}
                <img src={Logo_Mobile} alt="logo_Mobile" className="logo_Mobile" />
                <div  className="logo_Mobile"></div>

            </div>

            {/* navigasi menu */}
            <div className={`nav__menu ${isActive ? "" : "active"}`}>
                <ul>
                    <li>
                        <Link to="/" className="nav__link">Home</Link>
                    </li>
                    <li>
                        <Link to="/Project" className="nav__link">Project</Link>
                    </li>
                    <li>
                        <Link to="/About" className="nav__link">About</Link>
                    </li>
                </ul>
            </div>

            {/* navigasi optional */}
            <div className="nav__optional">

                {/* burger menu */}
                <div className="Burger_menu" onClick={handleToggle} >
                    <ion-icon name="menu"></ion-icon>
                </div>

            </div>

        </nav>


    );
}