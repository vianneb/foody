import React, { useEffect } from "react";
import { CategoryList } from "./Category_Button";
import { FoodCardList } from "./Food_Card";
import { ExploreRestaurantsCard } from "./Restaurant_Card";


export function HomePage(props) {


  // array with cuisines
  let foodList = [
    { title: "American", img: "img/burger.jpg", description: "Explore American restaurants near Seattle on Foody: burgers, sandwiches, BBQ and more." },
    { title: "Italian", img: "img/pasta.jpg", description: "Explore Italian restaurants near Seattle on Foody: pasta, antipasti, seafood, rissoto and more." },
    { title: "Mexican", img: "img/tacos.jpg", description: "Explore Mexican restaurants near Seattle on Foody: tacos, burritos, fajitas and more." },
    { title: "Japanese", img: "img/sushi.jpg", description: "Explore Japanese restaurants near Seattle on Foody: sushi, ramen, izakayas and more." }];
  
  //array with allergy categories
  let tagList = ["Vegan", "Gluten-free", "Dairy-free", "Nut-free", "Soy-free", "Seafood-free"];

  //set displayed restaurants on Search page to all restaurants when Home first renders
  useEffect(() => {
    props.setFilteredRestaurants(props.restaurantsArray);
  }, [])

  return (
    <div className="App">
      <div className="main-body">
        <FoodCardList foodList={foodList} setFilteredRestaurants={props.setFilteredRestaurants} filteredRestaurants={props.filteredRestaurants}/>
        <CategoryList tagList={tagList} setFilteredRestaurants={props.setFilteredRestaurants} filteredRestaurants={props.filteredRestaurants} />
        <ExploreRestaurantsCard />
      </div>
    </div>
  );
}