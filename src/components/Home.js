import React from "react";
import { NavBar } from "./Navbar";
import { CategoryList } from "./Category_Button";
import { FoodCardList } from "./Food_Card";
import { ExploreRestaurantsCard } from "./Restaurant_Card";


export function HomePage(props) {


  // define arrays for testing
  let foodList = [
    { title: "American", img: "img/burger.jpg", description: "lorem ipsum" },
    { title: "Italian", img: "img/pasta.jpg", description: "lorem ipsum" },
    { title: "Mexican", img: "img/tacos.jpg", description: "lorem ipsum" },
    { title: "Japanese", img: "img/sushi.jpg", description: "lorem ipsum" }];

  let tagList = ["Vegan", "Gluten-free", "Dairy-free", "Nut-free", "Soy-free", "Seafood-free"];

  return (
    <div className="App">
      <div className="main-body">
        <NavBar />
        <FoodCardList foodList={foodList} />
        <CategoryList tagList={tagList} />
        <ExploreRestaurantsCard />
      </div>
    </div>
  );
}