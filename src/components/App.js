import React, { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from "./Home";
import { SharePage } from "./Add_Restaurant";
import { SearchPage } from "./Search";
import { MoreInformationPage } from "./More_Information";
import { MyListPage } from "./My_List";




export default function App(props) {

  // declare state variables for more information page
  // to track when users click more information button
  const [selectedRestaurant, setSelectedRestaurant] = useState('');

  //declare state variables to track My List
  const [myList, setMyList] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [restaurants, setRestaurants] = useState(props.restaurantList);

  const favoriteRestaurant = (name) => {
    const restaurantsCopy = restaurants.map((restaurant) => {

      let copy = { ...restaurant };

      if (copy.Name == name) {
        copy.favorite = !isFavorite;
      }

      return copy;
    })

    setRestaurants(restaurantsCopy);
  }



  return (
    <div className="App">
      <div className="main-body">

        <Routes>
          {/* default to Home page */}
          <Route path="/" element={
            <HomePage restaurantList={props.restaurantList} />
          } />
          <Route path="share" element={
            <SharePage />
          } />

          <Route path="search" element={
            <SearchPage restaurantList={props.restaurantList} setSelectedRestaurant={setSelectedRestaurant} myList={myList} setMyList={setMyList} favoriteRestaurant={favoriteRestaurant} restaurants={restaurants}/>
          } />

          <Route path="details/:restaurantName" element={
            <MoreInformationPage selectedRestaurant={selectedRestaurant} />
          } />

          <Route path="mylist" element={
            <MyListPage myList={myList} setSelectedRestaurant={setSelectedRestaurant} />
          } />

          {/* route to handle incorrect URLS */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </div>
    </div>
  )

}
