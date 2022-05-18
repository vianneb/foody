import React from "react";
import { OrangeButton } from "./Orange_Button";


export function FoodCard(props) {
  return (
    <div className="d-flex col-md-6 col-xl-3">
      <div className="card mb-4 hover-c-yellow">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-auto col-xl-12">
              <div><img className="card-img-top pb-3" src={props.foodObj.img} /></div>
            </div>
            <div className="col-sm">
              <h2 className="card-title">{props.foodObj.title}</h2>
              <p className="card-text">{props.foodObj.description}</p>
              <OrangeButton text="Explore"/>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export function FoodCardList(props) {
  let foodItems = props.foodList.map((foodObj) => {
    let component = <FoodCard key={foodObj.title} foodObj={foodObj} />
    return component
  })

  return (
    <div className="container">
      <div className="row mt-4 mb-4">
        {foodItems}
      </div>
    </div>
  )
}
