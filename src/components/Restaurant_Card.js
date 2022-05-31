import React, { useState } from "react";
import { OrangeButton } from "./Orange_Button";
import { Link } from "react-router-dom";

export function ExploreRestaurantsCard(props) {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="d-flex col-md-12 col-xl-12">
          <div className="card mb-4 mx-auto w-100 ">
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 col-xl-4">
                  <div><img className="card-img-top pb-3" src={"img/seattle.jpg"} alt="seattle skyline featuring the Space Needle during sunset" /></div>
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
    props.setSelectedRestaurant(currentRestaurant);
  }


  const urlParam = currentRestaurant.Name.toLowerCase().split(" ").join("");

  const handleFavoriteClick = () => {
    props.favoriteRestaurant(currentRestaurant.Name);

    if (currentRestaurant.favorite) {
      //get restaurant info and remove from favorites list
      const currentFavorites = props.myList.filter((element) => {
        return element.Name != currentRestaurant.Name;
      });
      console.log(currentFavorites);
      props.setMyList(currentFavorites);

    } else {

      //get restaurant info and add to favorites list
      const currentFavorites = [...props.myList, currentRestaurant];
      console.log(currentFavorites);
      props.setMyList(currentFavorites);
    }
  }

  let buttonColor = "grey"

  if(currentRestaurant.favorite) {
    buttonColor = "red";
  }

  return (
    <div className="d-flex col-md-12 col-xl-12">
      <div className="card mb-4 w-100">
        <div className="card-body">
          <div className="row">
            <div className=" col-md-8 col-xl-8">
              <div className="d-flex">
                <h3 className="card-title">{props.restaurant.Name}</h3>
                <button className="btn like-button" onClick={handleFavoriteClick}>
                  <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
                </button>
              </div>
              <div className="d-flex">
                <span className="material-icons">place</span>
                <p>{props.restaurant.Area}</p>
              </div>
              <div>
                <Link to={"/details/" + urlParam}><button className="btn orange-btn btn-dark" href="#" onClick={handleClick}>{"More Information"}</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export function FavoriteCard(props) {

  const currentRestaurant = props.restaurant

  //onClick callback
  const handleFaveClick = () => {
    console.log(currentRestaurant);
    props.setSelectedRestaurant(currentRestaurant);
  }


  const urlParam = currentRestaurant.Name.toLowerCase().split(" ").join("");
  console.log(urlParam);

  return (
    <div className="d-flex col-md-12 col-xl-12">
      <div className="card mb-4 w-100">
        <div className="card-body">
          <div className="row">
            <div className=" col-md-8 col-xl-8">
              <div className="d-flex">
                <h3 className="card-title">{props.restaurant.Name}</h3>
              </div>
              <div className="d-flex">
                <span className="material-icons">place</span>
                <p>{props.restaurant.Area}</p>
              </div>
              <div>
                <Link to={"/details/" + urlParam}><button className="btn orange-btn btn-dark" href="#" onClick={handleFaveClick}>{"More Information"}</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export function RestaurantList(props) {

  let restaurantItems = props.restaurants.map((restaurant) => {
    let component = <RestaurantCard key={restaurant.Name} restaurant={restaurant} setSelectedRestaurant={props.setSelectedRestaurant} myList={props.myList} setMyList={props.setMyList} favoriteRestaurant={props.favoriteRestaurant} />
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

export function FavoriteList(props) {

  let favoriteItems = props.favoriteList.map((restaurant) => {
    let component = <FavoriteCard key={restaurant.Name} restaurant={restaurant} setSelectedRestaurant={props.setSelectedRestaurant} />
    return component;
  })

  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        {favoriteItems}
      </div>
    </div>

  )

}