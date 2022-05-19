import React from "react";
import { Routes, Route } from 'react-router-dom';

import { HomePage } from "./Home";
import { SharePage } from "./Add_Restaurant";

//import sample restaurant data

import SAMPLE_RESTAURANTS from './../data/restaurants_seattle.json';
console.log(SAMPLE_RESTAURANTS);

export default function App() {
  // define arrays for testing
  let foodList = [
    { title: "Burgers", img: "img/burger.jpg", description: "lorem ipsum" },
    { title: "Dessert", img: "img/dessert.jpg", description: "lorem ipsum" },
    { title: "Drinks", img: "img/coffee.jpg", description: "lorem ipsum" },
    { title: "Snacks", img: "img/fries.jpg", description: "lorem ipsum" }];
  let tagList = ["Vegan", "Keto", "Dairy-free", "Gluten-free"];
  let restaurantList = [{ name: "Byrek & Baguette", address: "4209 University Way NE, Seattle, WA 98105", img: "img/rest.jpg" }];


  return (
    <div className="App">
      <div className="main-body">

        <Routes>
          {/* default to Home page */}
          <Route path="/" element={
            <HomePage foodList={foodList} tagList={tagList} restaurantList={SAMPLE_RESTAURANTS}/>
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
