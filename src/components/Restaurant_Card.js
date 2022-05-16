import React from "react";

export function RestaurantCard(props) {
    return (

      <div className="container mt-4">
        <div className="row">
          <h1>Near Me</h1>
          <div className="d-flex col-md-12 col-xl-12">
            <div className="card mb-4 w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 col-xl-4">
                  <div><img className="card-img-top pb-3" src={'img/rest.jpg'} alt={"indoor restaurant seating at Byrek & Baguette"}/></div>
                  </div>
                  <div className=" col-md-8 col-xl-8">
                    <h2 className="card-title">Byrek &amp; Baguette</h2>
                    <div className="d-flex">
                      <span className="material-icons">place</span>
                      <p>4209 University Way NE, Seattle, WA 98105</p>
                    </div>
                    <div className="d-flex">
                      <span className="material-icons">schedule</span>
                      <p>3 min - 1.1 km</p>
                    </div>
                    <div>
                      <a className="btn btn-dark" href="restaurant_details.html">More Information</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }