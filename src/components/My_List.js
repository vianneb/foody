import React from "react";

import { FavoriteList } from "./Restaurant_Card";
import { NavBar } from "./Navbar";

// this file is to render the My List page

export function MyListPage(props) {
    return(
        <div className="main-body">
            <NavBar />
            <h2 className="text-center mt-4">Favorite Restaurants</h2>
            <FavoriteList favoriteList={props.myList} setSelectedRestaurant={props.setSelectedRestaurant}/>
        </div>
    )
}