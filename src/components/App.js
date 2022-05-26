import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import { HomePage } from "./Home";
import { SharePage } from "./Add_Restaurant";
import { SearchPage } from "./Search";
import { MoreInformationPage } from "./More_Information";




export default function App(props) {

  // declare state variables for more information page
  // to track when users click more information button
  const [selectedRestaurant, setSelectedRestaurant] = useState('');

  // callback
  const handleSelected = (newRestaurant) => {
    props.setSelectedRestaurant(newRestaurant);
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
            <SearchPage restaurantList={props.restaurantList} setSelectedRestaurant={setSelectedRestaurant}/>
          } />

          <Route path="details" element={
            <MoreInformationPage selectedRestaurant={selectedRestaurant}/>
          } />

        </Routes>
      </div>
    </div>
  )

}
