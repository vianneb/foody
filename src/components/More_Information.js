import React from 'react';
import { OrangeButton } from './Orange_Button';

import { useParams } from 'react-router-dom';

//import font awesome icons for spinner
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


export function MoreInformationPage(props) {

    //get URI
    const params = useParams();

    //filter list of all restaurants to find the current one 
    const restaurantList = props.restaurantsArray.filter((restaurant) => {
        return restaurant.Name.toLowerCase().split(" ").join("").includes(params.restaurantName);
    })

    //if the array is empty, display a spinner
    if (restaurantList.length === 0) {
        return <FontAwesomeIcon icon={faSpinner} className="mt-2 ms-3" spin size="2x" aria-label="Loading..." aria-hidden="false"/>;
    } 
    
    //get object from array
    const selectedRestaurant = restaurantList[0];


    return (

        <div className="main-body">
            <div className="d-flex ms-3 mt-4">
                <h1>{selectedRestaurant.Name}</h1>
            </div>
            <div className="d-flex ms-3">
                <span className="material-icons">place</span>
                <p>{selectedRestaurant.Area}</p>
            </div>
            <div className="d-flex ms-3">
                <button className="button">{selectedRestaurant.Price}</button>
            </div>
            <div className="d-flex">
                <OrangeButton text={selectedRestaurant.Cuisine} />
                <OrangeButton text={selectedRestaurant.Category}/>
            </div>
            <div className="d-flex ms-3">
                <p>{selectedRestaurant.Description}</p>
            </div>
            <div className="d-flex ms-3">
                <img src={selectedRestaurant.Image} alt={selectedRestaurant.Name}></img>
            </div>

        </div>
    )
}