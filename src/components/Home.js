import React from "react";
import { NavBar } from "./Navbar";
import { CategoryList } from "./Category_Button";
import { FoodCardList } from "./Food_Card";
import { RestaurantList } from "./Restaurant_Card";


export function HomePage(props) {
    
  
    return (
        <div className="App">
          <body className="main-body">
            <NavBar />      
            <FoodCardList foodList={props.foodList} />   
            <CategoryList tagList={props.tagList} />          
            <RestaurantList restaurantList={props.restaurantList}/>
          </body>
        </div>
      );
}