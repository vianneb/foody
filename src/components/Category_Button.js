import React from "react";

export function Categories(props) {
    return (
        <div className="container">
            <h1>Featured Categories</h1>
            <div class="row mt-4 mb-4">

                {/*Card 1 */}  
                <div class="d-flex col-md-12 col-xl-6">
                    <a class="card mb-4 w-100 bg-c-yellow stretched-link text-dec" href="#">
                        <div class="card-body">
                            <h2 class="card-title text-center txt-c-white">Vegan</h2>
                        </div>
                    </a>
                </div>

                {/*Card 2 */}  
                <div class="d-flex col-md-12 col-xl-6">
                    <a class="card mb-4 w-100 bg-c-orange stretched-link text-dec" href="#">
                        <div class="card-body">
                            <h2 class="card-title text-center txt-c-white">Keto</h2>
                        </div>
                    </a>
                </div>

                {/*Card 3 */}  
                <div class="d-flex col-md-12 col-xl-6">
                    <a class="card mb-4 w-100 bg-c-yellow stretched-link text-dec" href="#">
                        <div class="card-body">
                            <h2 class="card-title text-center txt-c-white">Diary-Free</h2>
                        </div>
                    </a>
                </div>

                {/*Card 4 */}  
                <div class="d-flex col-md-12 col-xl-6">
                    <a class="card mb-4 w-100 bg-c-orange stretched-link text-dec" href="#">
                        <div class="card-body">
                            <h2 class="card-title text-center txt-c-white">Gluten-free</h2>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}