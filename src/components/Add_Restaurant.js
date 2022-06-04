import React from "react";
import { AddForm } from "./Add_Form";
import { NavBar } from "./Navbar";


export function SharePage(props) {
    return (
        <div className="main-body">
            <AddForm
                name={props.name}
                setName={props.setName}
                address={props.address}
                setAddress={props.setAddress}
                imageFile={props.imageFile}
                setImageFile={props.setImageFile}
                imageURL={props.imageURL}
                setImageURL={props.setImageURL}
                cuisine={props.cuisine}
                setCuisine={props.setCuisine}
                category={props.category}
                setCategory={props.setCategory}
                price={props.price}
                setPrice={props.setPrice} 
                addRestaurant={props.addRestaurant}
                setFilteredRestaurants={props.setFilteredRestaurants}
                restaurantsArray={props.restaurantsArray}
                />
        </div>

    )
}