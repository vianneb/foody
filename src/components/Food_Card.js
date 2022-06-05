import React from "react";
import { useNavigate } from "react-router-dom";


export function FoodCard(props) {

  const navigate = useNavigate();

  const handleClick = (event) => {
    const clickedCuisine = event.target.parentElement.querySelector('.card-title').textContent.toLowerCase();
    const cuisineRestaurants = props.filteredRestaurants.filter((restaurant) => {
      return restaurant.Cuisine.toLowerCase().includes(clickedCuisine);
    })

    props.setFilteredRestaurants(cuisineRestaurants);

    navigate("/search");
  }  
  
  return (
    <div className="d-flex col-md-6 col-xl-3 " >
      <div className={"card mb-4 hover-c-yellow "}>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-auto col-xl-12">
              <div><img className="card-img-top pb-3" src={props.foodObj.img} alt={props.foodObj.img.substring(props.foodObj.img.indexOf("/"), props.foodObj.img.indexOf("."))}/></div>
            </div>
            <div className="col-sm">
              <h2 className="card-title">{props.foodObj.title}</h2>
              <p className="card-text">{props.foodObj.description}</p>
              <button className="btn orange-btn btn-dark" href="#" onClick={handleClick}>Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export function FoodCardList(props) {
  let foodItems = props.foodList.map((foodObj) => {
    let component = <FoodCard key={foodObj.title} foodObj={foodObj} setFilteredRestaurants={props.setFilteredRestaurants} filteredRestaurants={props.filteredRestaurants}/>
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
