import React, { useState } from "react";

import { SearchNavBar } from "./Navbar";
import { RestaurantList } from "./Restaurant_Card";

export function SearchPage(props) {

    //interactivity

    //declare state variables
    const [searchQuery, setSearchQuery] = useState(''); //represents input
    const [filteredRestaurants, setFilteredRestaurants] = useState(props.restaurantList);

    //callback
    const handleSearch = (newSearchQuery) => {

        newSearchQuery = newSearchQuery.toLowerCase();
        setSearchQuery(newSearchQuery);

        let restaurantsCopy = props.restaurantList.filter((restaurant) => {
            if (newSearchQuery == '') {
                return true;
            } else {
                return restaurant.Name.toLowerCase().includes(newSearchQuery);
            }

        })

        setFilteredRestaurants(restaurantsCopy);

    }

    return(
        <div className="main-body">
            <SearchNavBar handleSearch={handleSearch}/>
            <RestaurantList restaurantList={filteredRestaurants} classList={" display-none"}/>
        </div>
        
    )
}