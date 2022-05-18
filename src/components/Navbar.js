import React from "react";

// import material icons
import SearchIcon from '@mui/icons-material/Search';

export function NavBar(props) {
    return (
        <nav className="navbar">

            <h1 className="logo" style={{textAlign: "left"}}>Foody</h1>
            
            <div className="nav-links">

                <input type="checkbox" id="checkbox_toggle" className="checkbox" />
                <label for="checkbox_toggle" className="hamburger" id="hamburger">&#9776;</label>
                <ul id="menu" className="menu" style={{float: "right"}}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">My List</a></li>
                    <li><a href="#">Share</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>

            </div>

            <div className="d-flex col-md-12 col-xl-12 w-100">

                <form style={{textAlign: "center"}} id="form search-bar" className="w-100">
                    <input className="search" type="search" id="query" name="q" placeholder="Search..."/>
                    <button className="btn"><SearchIcon /></button>
                </form>

            </div>

        </nav>
    )
}