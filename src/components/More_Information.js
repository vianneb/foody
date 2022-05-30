import React, { useState } from 'react';
import { NavBar } from './Navbar';
import { OrangeButtonList } from './Orange_Button';


export function MoreInformationPage(props) {
    const [isLiked, setIsLiked] = useState(false);

    const handleClick = (event) => {
        setIsLiked(!isLiked); //toggle
        console.log("reached")
    }

    let buttonColor = "grey"
    
    if (isLiked) {
        buttonColor = "red";
    }

    return (

        <div className="main-body">
            
                <NavBar />
                <div className="d-flex ms-3 mt-4">
                    <h1>{props.selectedRestaurant.Name}</h1>
                    <button className="btn like-button" onClick={handleClick}>
                        <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
                    </button>
                </div>
                <div className="d-flex ms-3">
                    <span className="material-icons">place</span>
                    <p>{props.selectedRestaurant.Area}</p>
                </div>
                <div className="d-flex ms-3">
                    <button className="button">{props.selectedRestaurant.Price}</button>
                </div>
                <OrangeButtonList tagList={props.selectedRestaurant.Category} />
                <OrangeButtonList tagList={props.selectedRestaurant.Services} />
          

        </div>
    )
}