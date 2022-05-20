import React, { useState } from "react";
import { NavBar } from "./Navbar";
import { CategoryList } from "./Category_Button";
import { FoodCardList } from "./Food_Card";
import { RestaurantList } from "./Restaurant_Card";
import { ExploreRestaurantsButton } from "./Restaurant_Card";


export function HomePage(props) {


  // define arrays for testing
  let foodList = [
    { title: "Burgers", img: "img/burger.jpg", description: "lorem ipsum" },
    { title: "Dessert", img: "img/dessert.jpg", description: "lorem ipsum" },
    { title: "Drinks", img: "img/coffee.jpg", description: "lorem ipsum" },
    { title: "Snacks", img: "img/fries.jpg", description: "lorem ipsum" }];


  return (
    <div className="App">
      <div className="main-body">
        <NavBar />
        <FoodCardList foodList={foodList} />
        <CategoryList tagList={props.tagList} />
        <ExploreRestaurantsButton />
      </div>
    </div>
  );
}