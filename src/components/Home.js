import React from "react";
import { HomeNavBar } from "./Navbar";
import { CategoryList } from "./Category_Button";
import { FoodCardList } from "./Food_Card";
import { RestaurantList } from "./Restaurant_Card";


export function HomePage(props) {
    
  
    return (
        <div className="App">
          <div className="main-body">
            <HomeNavBar />      
            <FoodCardList foodList={props.foodList} />   
            <CategoryList tagList={props.tagList} />          
            <RestaurantList restaurantList={props.restaurantList}/>
          </div>
        </div>
      );
}