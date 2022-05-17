import React from "react";

import { NavBar } from "./Navbar";
import { CategoryList } from "./Category_Button";
import { FoodCardList } from "./Food_Card";
import { RestaurantList } from "./Restaurant_Card";
import { AddForm } from "./Add_Form";



export default function App() {

// define arrays for testing
let foodList = [
  {title:"Burgers", img:"img/burger.jpg", description:"lorem ipsum"}, 
  {title:"Dessert", img:"img/dessert.jpg", description:"lorem ipsum"}, 
  {title:"Drinks", img:"img/coffee.jpg", description:"lorem ipsum"}, 
  {title:"Snacks", img:"img/fries.jpg", description:"lorem ipsum"}];
let tagList = ["Vegan", "Keto", "Dairy-free", "Gluten-free"];
let restaurantsArray = [{name: "Byrek & Baguette", address: "4209 University Way NE, Seattle, WA 98105", img: "img/rest.jpg"}];

  return (
    <div className="App">
      <body className="main-body">
        <NavBar />      
        <FoodCardList foodArray={foodList} />   
        <CategoryList tags={tagList} />          
        <RestaurantList restaurants={restaurantsArray}/>
        <AddForm tags={tagList}/>
      </body>
    </div>
  );

}
