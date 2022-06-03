import React, { useState, useEffect } from 'react';
import { NavBar } from './Navbar';
import { OrangeButton } from './Orange_Button';


export function MoreInformationPage(props) {



    return (

        <div className="main-body">

            <NavBar />
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

        </div>
    )
}