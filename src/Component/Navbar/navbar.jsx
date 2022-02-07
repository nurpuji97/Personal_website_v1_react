import React, { useState } from 'react';

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
                        <div className="nav__link">Home</div>
                    </li>
                    <li>
                        <div className="nav__link">Project</div>
                    </li>
                    <li>
                        <div className="nav__link">About</div>
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