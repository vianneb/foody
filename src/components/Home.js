import React, { useState } from "react";
import { HomeNavBar } from "./Navbar";
import { CategoryList } from "./Category_Button";
import { FoodCardList } from "./Food_Card";
import { RestaurantList } from "./Restaurant_Card";

//display variable to hide contents when searching
let classList = "";

// console.log(SAMPLE_RESTAURANTS);

export function HomePage(props) {

  // display variable
  

  //interactivity

      //declare state variables
      const [searchQuery, setSearchQuery] = useState(''); //represents input
      const [filteredRestaurants, setFilteredRestaurants] = useState(props.restaurantList);

      //callback
      const handleSearch = (newSearchQuery) => {

        if (newSearchQuery != undefined && newSearchQuery != "") {
          classList = " display-none";
        }

        newSearchQuery = newSearchQuery.toLowerCase();
        setSearchQuery(newSearchQuery);

        let restaurantsCopy = props.restaurantList.filter((restaurant) => {
          if (newSearchQuery == '' ) {
            return true;
          } else {
            return restaurant.Name.toLowerCase().includes(newSearchQuery);
          }
          
        })
  
        setFilteredRestaurants(restaurantsCopy);
  
    }

    console.log(classList)

  // define arrays for testing
  let foodList = [
    { title: "Burgers", img: "img/burger.jpg", description: "lorem ipsum" },
    { title: "Dessert", img: "img/dessert.jpg", description: "lorem ipsum" },
    { title: "Drinks", img: "img/coffee.jpg", description: "lorem ipsum" },
    { title: "Snacks", img: "img/fries.jpg", description: "lorem ipsum" }];

  // let restaurantList = [{ name: "Byrek & Baguette", address: "4209 University Way NE, Seattle, WA 98105", img: "img/rest.jpg" }];


  return (
    <div className="App">
      <div className="main-body">
        <HomeNavBar handleSearch={handleSearch}/>
        <FoodCardList foodList={foodList} classList={classList}/>
        <CategoryList tagList={props.tagList} classList={classList}/>
        <RestaurantList restaurantList={filteredRestaurants} classList={classList}/>
      </div>
    </div>
  );
}