import React from "react";

export function AddRestaurant(props) {
return (

    <main>
        <div className="container">
            <div className="textbox">
                <form>
                    <div className="form-group">
                        <label for="nameInput" className="bigger-text">Enter Restaurant Name</label>
                        <input type="text" className="form-control" id="nameInput" placeholder="Name"></input>
                    </div>
                </form>
            </div>
        </div>

        <div className="container">
            <div className="textbox">
                <form>
                    <div className="form-group">
                        <label form="addressInput" className="bigger-text">Enter Restaurant Address</label>
                        <input type="text" className="form-control" id="addressInput1" placeholder="Address Line 1"></input>
                    </div>
                </form>

                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" id="addressInput2" placeholder="Address Line 2"></input>
                    </div>
                </form>
            </div>
        </div>

        <div className="container">
            <p className="bigger-text">Add a picture for the restaurant</p>
            <div className="container d-flex">

                <form action="/action_page.php">
                    <input type="file" id="myFile" name="filename"></input>
                </form>

            </div>
        </div>

        <div className="container checkbox">

            <p className="margin-t bigger-text">Tags</p>


            <form action="#" className="checkbox">

                <input type="checkbox" id="vegan" name="vegan" value="vegan"></input>
                <label for="vegan">Vegan</label><br/>

                <input type="checkbox" id="gluten-free" name="gluten-free" value="gluten-free"></input>
                <label for="gluten-free"> Gluten-free</label><br/>
                <input type="checkbox" id="keto" name="keto" value="keto"></input>
                <label for="keto"> Keto</label><br/>
                <input type="checkbox" id="diary-free" name="diary-free" value="diary-free"></input>
                <label for="diary-free">Diary-Free</label><br/>

            </form>

        </div>

        <div className="container">
            <p className="bigger-text">Price Range</p>
            <button className="button">$</button>
            <button className="button">$$</button>
            <button className="button">$$$</button>
            <button className="button">$$$$</button>
        </div>

        <div className="d-flex container margin-t justify-content-center">
            <form action="/action_page.php">
                <input type="submit" value="Submit" style={{height:"30px", width:"100px"}}></input>
            </form>
        </div>
    </main>

    );
}