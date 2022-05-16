import React from "react";

import { NavBar } from "./Navbar";
import { CategoryList } from "./Category_Button";

let tagList = ["Vegan", "Keto", "Dairy-free", "Gluten-free"];

export default function App() {
  return (
    <div className="App">
      <body className="main-body">
        <NavBar />          
        <CategoryList tags={tagList} />
      </body>
    </div>
  );
}
