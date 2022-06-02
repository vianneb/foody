import React from "react";
import { useNavigate } from "react-router-dom";

export function CategoryButton(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/search");
    }

    return (
        <div className="d-flex col-md-12 col-xl-6">
            <a className={"card mb-4 w-100 bg-c-orange stretched-link text-dec"} onClick={handleClick}>
                <div className="card-body">
                    <h3 className="card-title text-center txt-c-white">{props.tag}</h3>
                </div>
            </a>
        </div>
    )

}
export function CategoryList(props) {

    let categoryList = props.tagList.map((tag) => {
        let component = <CategoryButton key={tag} tag={tag} className="text-dec"/>
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