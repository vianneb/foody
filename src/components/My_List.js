import React, { useEffect } from "react";

import { FavoriteList } from "./Restaurant_Card";

import { getDatabase, ref, onValue } from 'firebase/database';

// this file is to render the My List page

export function MyListPage(props) {

  //do this everytime component loads
  useEffect(() => {

    const db = getDatabase(); //database reference, not the database itself
    const favoritesRef = ref(db, "userData/" + props.currentUser.uid + "/favoriteRestaurants");

    const offFunction = onValue(favoritesRef, (snapshot) => {
      const newValObj = snapshot.val();

      //change here

      if (newValObj != null) {
        //convert obj to array for rendering
        const keys = Object.keys(newValObj);
        const newObjArray = keys.map((keyString) => {

          return newValObj[keyString];

        })

        props.setMyList(newObjArray);

      } else {
        props.setMyList([]);

      }
    })

    //what to do when component unmounts (is removed, not shown)
    const cleanup = () => {
      //turn out the lights (remove the value listener)
      offFunction();
    }
    //what should the effect hook callback return??
    return cleanup;

  }, [])



  const displayName = props.currentUser ? props.currentUser.displayName : null;

  return (
    <div className="main-body">
      <h2 className="text-center mt-4"> {props.currentUser && displayName + "'s"} Favorite Restaurants</h2>
      <FavoriteList myList={props.myList} setSelectedRestaurant={props.setSelectedRestaurant} />
    </div>
  )
}