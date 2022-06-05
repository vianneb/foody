import React from "react";
import { useNavigate } from "react-router-dom";

export function CategoryButton(props) {

    const navigate = useNavigate();

    const handleClick = (event) => {
        const clickedCategory = event.target.textContent.toLowerCase();
        const categoryRestaurants = props.filteredRestaurants.filter( (restaurant) => {
            return restaurant.Category.toLowerCase().includes(clickedCategory);
        })

        props.setFilteredRestaurants(categoryRestaurants);

        navigate("/search");
    }

    return (
        <div className="d-flex col-md-12 col-xl-6">
            <button className={"card mb-4 w-100 bg-c-orange stretched-link text-dec"} onClick={handleClick}>
                    <h3 className="card-body card-title text-center txt-c-white">{props.tag}</h3>
            </button>
        </div>
    )

}
export function CategoryList(props) {

    let categoryList = props.tagList.map((tag) => {
        let component = <CategoryButton key={tag} tag={tag} className="text-dec" setFilteredRestaurants={props.setFilteredRestaurants} filteredRestaurants={props.filteredRestaurants}/>
        return component;
    })

    return (
        <div className="container">
            <h2 className={props.classList}>Featured Categories</h2>
            <div className="row mt-4 mb-4">
                {categoryList}
            </div>
        </div>
    )
}