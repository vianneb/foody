import React from "react";

import { FavoriteList } from "./Restaurant_Card";

// this file is to render the My List page

export function MyListPage(props) {
    const displayName = props.currentUser ? props.currentUser.displayName : null;

    return(
        <div className="main-body">
            <h2 className="text-center mt-4"> {props.currentUser && displayName+"'s"} Favorite Restaurants</h2>
            <FavoriteList myList={props.myList} setSelectedRestaurant={props.setSelectedRestaurant}/>
        </div>
    )
}