import React from 'react';
import { OrangeButton } from './Orange_Button';


export function MoreInformationPage(props) {

    return (

        <div className="main-body">
            <div className="d-flex ms-3 mt-4">
                <h1>{props.selectedRestaurant.Name}</h1>
            </div>
            <div className="d-flex ms-3">
                <span className="material-icons">place</span>
                <p>{props.selectedRestaurant.Area}</p>
            </div>
            <div className="d-flex ms-3">
                <button className="button">{props.selectedRestaurant.Price}</button>
            </div>
            <div className="d-flex">
                <OrangeButton text={props.selectedRestaurant.Cuisine} />
                <OrangeButton text={props.selectedRestaurant.Category}/>
            </div>
            <div className="d-flex ms-3">
                <p>{props.selectedRestaurant.Description}</p>
            </div>
            <div className="d-flex ms-3">
                <img src={props.selectedRestaurant.Image} alt={props.selectedRestaurant.Name}></img>
            </div>

        </div>
    )
}