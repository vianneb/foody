import React from "react";
import { OrangeButton } from "./Orange_Button";
import { Link } from "react-router-dom";

export function ExploreRestaurantsButton(props) {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="d-flex col-md-12 col-xl-12">
          <div className="card mb-4 mx-auto w-100 ">
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 col-xl-4">
                  <div><img className="card-img-top pb-3" src={"img/seattle.jpg"} /></div>
                </div>
                <div className=" col-md-8 col-xl-8">
                  <h2 className="card-title">Explore Seattle Restaurants</h2>
                  <div>
                  <Link className="hover-link" to="/search"><OrangeButton text="View" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export function RestaurantCard(props) {

  const currentRestaurant = props.restaurant

    //onClick callback
    const handleClick = () => {
      console.log(props.restaurant);
      props.setSelectedRestaurant(currentRestaurant);
    }

  return (
    <div className="d-flex col-md-12 col-xl-12">
      <div className="card mb-4 w-100">
        <div className="card-body">
          <div className="row">
            {/* <div className="col-md-4 col-xl-4">
              <div><img className="card-img-top pb-3" src={props.restaurant.img}/></div>
            </div> */}
            <div className=" col-md-8 col-xl-8">
              <h3 className="card-title">{props.restaurant.Name}</h3>
              <div className="d-flex">
                <span className="material-icons">place</span>
                <p>{props.restaurant.Area}</p>
              </div>
              <div>
              <Link to="/details"><button className="btn orange-btn btn-dark" href="#" onClick={handleClick}>{"More Information"}</button></Link>
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
    let component = <RestaurantCard key={restaurant.Name} restaurant={restaurant} setSelectedRestaurant={props.setSelectedRestaurant}/>
    return component;
  })

  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        {restaurantItems}
      </div>
    </div>

  )

}