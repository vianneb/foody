import React from "react";

import { NavBar } from "./Navbar";
import { Categories } from "./Category_Button";


export default function App() {
  return (
    <div className="App">
      <body className="main-body">
        <NavBar />
        <Categories />
      </body>
    </div>
  );
}
