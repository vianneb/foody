import React from "react";

export function FoodCard(props) {
    return (

      <div className="d-flex col-md-12 col-xl-6">
        <a className="card mb-4 w-100 bg-c-yellow stretched-link text-dec" href="#">
          <div className="card-body">
            <h2 className="card-title text-center txt-c-white">Category</h2>
          </div>
        </a>
      </div>
    );
  }
  