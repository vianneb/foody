import React from "react";

export function CategoryButton(props) {

    return (
        <div className="d-flex col-md-12 col-xl-6">
            <a className="card mb-4 w-100 bg-c-orange stretched-link text-dec" href="#">
                <div className="card-body">
                    <h3 className="card-title text-center txt-c-white">{props.tag}</h3>
                </div>
            </a>
        </div>
    )

}
export function CategoryList(props) {

    let categoryList = props.tagList.map((tag) => {
        let component = <CategoryButton key={tag} tag={tag} />
        return component;
    })

    return (
        <div className="container">
            <h2>Featured Categories</h2>
            <div className="row mt-4 mb-4">
                {categoryList}
            </div>
        </div>
    )
}