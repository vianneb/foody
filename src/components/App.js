import React from "react";

import { NavBar } from "./Navbar";
import { CategoryList } from "./Category_Button";
import { FoodCard } from "./Food_Card";
import { RestaurantCard } from "./Restaurant_Card";

let tagList = ["Vegan", "Keto", "Dairy-free", "Gluten-free"];

export default function App() {
  return (
    <div className="App">
      <body className="main-body">
        <NavBar />          
        <CategoryList tags={tagList} />
        <FoodCard />          
        <RestaurantCard/>
      </body>
    </div>
  );
}
