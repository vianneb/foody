import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import ReactPaginate from 'react-paginate';

import { SearchNavBar } from "./Navbar";
import { RestaurantList } from "./Restaurant_Card";

// import material icons
import SearchIcon from '@mui/icons-material/Search';

export function SearchPage(props) {
    //state varibles for pagination
    const [pageNumber, setPageNumber] = useState(0);

    //state variables for search interactivity
    const [searchQuery, setSearchQuery] = useState(''); //represents input
    const [filteredRestaurants, setFilteredRestaurants] = useState(props.restaurantList);
    const [input, setInput] = useState('');

    //state variables for alert messages
    const [alertMessage, setAlertMessage] = useState(null);

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        handleSearch(input);
    }

    const handleSearch = (newSearchQuery) => {

        setAlertMessage(null);

        newSearchQuery = newSearchQuery.toLowerCase();
        setSearchQuery(newSearchQuery);

        let restaurantsCopy = props.restaurantList.filter((restaurant) => {

            if (searchQuery == "") {
                return true;
            } else {
                return restaurant.Name.toLowerCase().includes(newSearchQuery);
            }


        })

        if (restaurantsCopy.length == 0) {
            setAlertMessage("No results");
            setFilteredRestaurants(props.restaurantList);
        } else {
            setFilteredRestaurants(restaurantsCopy);
        }


    }

    //pagination code
    const restaurantsperPage = 5;
    const pagesVisited = pageNumber * restaurantsperPage;
    const displayRestaurants = filteredRestaurants.slice(pagesVisited, pagesVisited + restaurantsperPage);
    const pageCount = Math.ceil(filteredRestaurants.length / restaurantsperPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    return (
        <div className="main-body">
            <SearchNavBar handleSearch={handleSearch} />
            <h2 className="text-center mt-4">Search Restaurants</h2>
            <div className="row search-form">
                <form style={{ textAlign: "center" }} id="form search-bar" className="w-100" >
                    <input className="search" type="search" id="query" name="q" placeholder="Search..." onChange={handleInput} />
                    <button className="btn orange-btn" onClick={handleClick}><SearchIcon /></button>
                </form>

            </div>

            <div>
                {/* display any error messages as dismissible alerts */}
                {alertMessage &&
                    <Alert variant="secondary" onClose={() => setAlertMessage(null)} dismissible="true">{alertMessage}</Alert>
                }
            </div>
            <RestaurantList restaurantList={displayRestaurants} setSelectedRestaurant={props.setSelectedRestaurant} />
            <ReactPaginate 
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                activeClassName={"paginationActive"}
                disabledClassName={"paginationDisabled"}
            />
        </div>

    )
}