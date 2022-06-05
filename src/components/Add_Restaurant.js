import React, { useEffect } from "react";
import { AddForm } from "./Add_Form";


export function SharePage(props) {

    useEffect(() => {
        props.setFilteredRestaurants(props.restaurantsArray);
    }, [])
    
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
                description={props.description}
                setDescription={props.setDescription}
                addRestaurant={props.addRestaurant}
                setFilteredRestaurants={props.setFilteredRestaurants}
                restaurantsArray={props.restaurantsArray}
                />
        </div>

    )

}