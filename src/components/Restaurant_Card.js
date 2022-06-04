import React from "react";
import { OrangeButton } from "./Orange_Button";
import { Link } from "react-router-dom";

import { getDatabase, ref, set as firebaseSet } from 'firebase/database';

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


  // useEffect(() => {

  //   const db = getDatabase(); //database reference, not the database itself
  //   const favoritesRef = ref(db, "userData/" + props.currentUser.uid + "/favoriteRestaurants");

  //   const offFunction = onValue(favoritesRef, (snapshot) => {
  //     const newValObj = snapshot.val();

  //     //convert obj to array for rendering
  //     const keys = Object.keys(newValObj);
  //     const newObjArray = keys.map((keyString) => {

  //       return newValObj[keyString];

  //     })

  //     props.setMyList(newObjArray);
  //   })

  //   //what to do when component unmounts (is removed, not shown)
  //   const cleanup = () => {
  //     //turn out the lights (remove the value listener)
  //     offFunction();
  //   }
  //   //what should the effect hook callback return??
  //   return cleanup;

  // }, [])

  const handleAddClick = () => {

    //only add if not in favorites
    if (props.myList.indexOf(currentRestaurant) == -1) {
      const currentFavorites = [...props.myList, currentRestaurant];
      //update database
      const db = getDatabase();
      const favoritesRef = ref(db, "userData/" + props.currentUser.uid + "/favoriteRestaurants");
      firebaseSet(favoritesRef, currentFavorites);
      props.setMyList(currentFavorites);
    }
  }

  const handleRemoveClick = () => {
    const currentFavorites = props.myList.filter((element) => {
      return element.Name != currentRestaurant.Name;
    });

    //update database
    const db = getDatabase();
    const favoritesRef = ref(db, "userData/" + props.currentUser.uid + "/favoriteRestaurants");
    firebaseSet(favoritesRef, currentFavorites);
    props.setMyList(currentFavorites);
  }

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
              <div className="d-flex">
                <Link to={"/details/" + urlParam}><button className="btn orange-btn btn-dark" onClick={handleClick}>{"More Information"}</button></Link>
                <button className="btn orange-btn btn-dark" onClick={handleAddClick}>{"Add to List"}</button>
                <button className="btn orange-btn btn-dark" onClick={handleRemoveClick}>{"Remove from List"}</button>
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
    props.setSelectedRestaurant(currentRestaurant);
  }


  const urlParam = currentRestaurant.Name.toLowerCase().split(" ").join("");

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
                <Link to={"/details/" + urlParam}><button className="btn orange-btn btn-dark" onClick={handleFaveClick}>{"More Information"}</button></Link>
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
    let component = <RestaurantCard key={restaurant.Name} restaurant={restaurant} setSelectedRestaurant={props.setSelectedRestaurant} myList={props.myList} setMyList={props.setMyList} currentUser={props.currentUser} />
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

  let favoriteItems = props.myList.map((restaurant) => {
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