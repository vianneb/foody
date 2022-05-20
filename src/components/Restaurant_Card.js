import React from "react";
import { OrangeButton } from "./Orange_Button";

export function RestaurantCard(props) {
  return (
    <div className="d-flex col-md-12 col-xl-12">
      <div className="card mb-4 w-100">
        <div className="card-body">
          <div className="row">
            {/* <div className="col-md-4 col-xl-4">
              <div><img className="card-img-top pb-3" src={props.restaurant.img}/></div>
            </div> */}
            <div className=" col-md-8 col-xl-8">
              <h2 className="card-title">{props.restaurant.Name}</h2>
              <div className="d-flex">
                <span className="material-icons">place</span>
                <p>{props.restaurant.Area}</p>
              </div>
              <div>
              <OrangeButton text="More Information"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}


export function RestaurantList(props) {
  let restaurantItems = props.restaurantList.map((restaurant) => {
    let component = <RestaurantCard key={restaurant.Name} restaurant={restaurant} />
    return component;
  })

  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <h1 className={props.classList}>Near Me</h1>
        {restaurantItems}
      </div>
    </div>

  )

}