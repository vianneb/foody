import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { getAuth, signOut } from 'firebase/auth';


export function NavBar(props) {

    const currentUser = props.currentUser.uid;

    // when users sign out
    const handleSignOut = (event) => {
        console.log("signing out");
        signOut(getAuth());
    }

    const [isClicked, setIsClicked] = useState(false);

    //callback

    const handleHamburgerClick = () => {
        setIsClicked(!isClicked);
    }

    return (

        <nav className="NavbarItems">
            <h1 className="navbar-logo">Foody</h1>
            <div className="menu-icon" onClick={handleHamburgerClick}>
                <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
                <li><Link className="hover-link nav-links" to="/">Home</Link></li>
                <li><Link className="hover-link nav-links" to="/share">Share</Link></li>
                <li><Link className="hover-link nav-links" to="/search">Search</Link></li>
                <li><Link className="hover-link nav-links" to="/mylist">My List</Link></li>
                {!currentUser &&
                    <li className="nav-item">
                        <NavLink to="/signin" className="nav-link">Sign In</NavLink>
                    </li>
                }
                {currentUser && <>
                    <li className="nav-item">
                        <button className="btn orange-btn btn-dark sign-out ms-3" onClick={handleSignOut}>Sign Out</button>
                    </li>
                </>
                }
            </ul>
        </nav>
    )
}