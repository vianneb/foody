import React, { useState } from "react";
import { Link } from "react-router-dom";

// import material icons
import SearchIcon from '@mui/icons-material/Search';



export function SearchNavBar(props) {
    // hamburger interactivity
    const [isClicked, setIsClicked] = useState(false);

    //callback

    const handleHamburgerClick = () => {
        setIsClicked(!isClicked);
    }


    //search interactivity
    const [input, setInput] = useState('');

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        props.handleSearch(input);
    }

    return (
        <div>
            <nav className="NavbarItems">
                <div className="grid">
                    <div className="row">
                        <div className="d-flex">
                            <h1 className="navbar-logo">Foody</h1>
                            <div className="menu-icon" onClick={handleHamburgerClick}>
                                <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                            </div>

                            <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
                                <li><Link className="hover-link nav-links" to="/">Home</Link></li>
                                <li><Link className="hover-link nav-links" to="/share">Share</Link></li>
                                <li><Link className="hover-link nav-links" to="/search">Search</Link></li>
                                <li><Link className="hover-link nav-links" to="/list">My List</Link></li>
                            </ul>
                        </div>
                    </div>


                </div>
            </nav>

            <h2 className="text-center mt-4">Search Restaurants</h2>
            <div className="row search-form">
                <form style={{ textAlign: "center" }} id="form search-bar" className="w-100">
                    <input className="search" type="search" id="query" name="q" placeholder="Search..." onChange={handleInput} />
                    <button className="btn orange-btn" onClick={handleClick}><SearchIcon /></button>
                </form>
            </div>
        </div>
    )
}

export function NavBar(props) {
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
                <li><Link className="hover-link nav-links" to="/list">My List</Link></li>
            </ul>
        </nav>
    )
}