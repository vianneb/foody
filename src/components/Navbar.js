import React, {useState} from "react";
import { Link } from "react-router-dom";

// import material icons
import SearchIcon from '@mui/icons-material/Search';

export function SearchNavBar(props) {

    //define state variables
    const [input, setInput] = useState('');

    const handleInput = (event) => {
        setInput(event.target.value);
    }
    
    const handleClick = (event) => {
        event.preventDefault();
        props.handleSearch(input);
    }

    return (
        <nav className="navbar">

            <h1 className="logo" style={{ textAlign: "left" }}>Foody</h1>

            <div className="nav-links">

                <input type="checkbox" id="checkbox_toggle" className="checkbox" />
                <label hmtlfor="checkbox_toggle" className="hamburger" id="hamburger">&#9776;</label>
                <ul id="menu" className="menu" style={{ float: "right" }}>
                    <li><Link className="hover-link" to="/">Home</Link></li>
                    <li><Link className="hover-link" to="/share">Share</Link></li>
                    <li><Link className="hover-link" to="/search">Search</Link></li>
                </ul>

            </div>

            <div className="d-flex col-md-12 col-xl-12 w-100">

                <form style={{ textAlign: "center" }} id="form search-bar" className="w-100">
                    <input className="search" type="search" id="query" name="q" placeholder="Search..." onChange={handleInput}/>
                    <button className="btn" onClick={handleClick}><SearchIcon /></button>
                </form>

            </div>

        </nav>
    )
}

export function NavBar(props) {
    return (
        <nav className="navbar">

            <h1 className="logo" style={{ textAlign: "left" }}>Foody</h1>

            <div id="nav" className="nav-links">

                <input type="checkbox" id="checkbox_toggle" className="checkbox" />
                <label hmtlfor="checkbox_toggle" className="hamburger" id="hamburger">&#9776;</label>
                <ul id="menu" className="menu" style={{ float: "right" }}>
                    <li><Link className="hover-link" to="/">Home</Link></li>
                    <li><Link className="hover-link" to="/share">Share</Link></li>
                    <li><Link className="hover-link" to="/search">Search</Link></li>
                </ul>

            </div>
        </nav>
    )
}