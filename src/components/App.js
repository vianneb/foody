import React, {useState} from "react";
import { Routes, Route } from 'react-router-dom';

import { HomePage } from "./Home";
import { SharePage } from "./Add_Restaurant";




export default function App(props) {
  //define arrays for testing
  let tagList = ["Vegan", "Keto", "Dairy-free", "Gluten-free"];

 

  return (
    <div className="App">
      <div className="main-body">

        <Routes>
          {/* default to Home page */}
          <Route path="/" element={
            <HomePage restaurantList={props.restaurantList} tagList={tagList} />
          } />
          <Route path="share" element={
            <SharePage tagList={tagList}/>
          } />
        </Routes>
        
        {/* Comment out to have one page showing at a time */}
        {/* <SharePage tagList={tagList}/> */}
      </div>
    </div>
  )

}
