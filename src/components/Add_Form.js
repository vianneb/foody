import React, { useState } from "react";
import { Alert } from "react-bootstrap";


export function AddForm(props) {

    //state variables for alert messages
    const [alertMessage, setAlertMessage] = useState(null);


    //callback functions for state variables

    const handleNameChange = (event) => {
        props.setName(event.target.value)
    }

    const handleAddressChange = (event) => {
        props.setAddress(event.target.value)
    }

    const handleImageChange = (event) => {
        if (event.target.files.length > 0 && event.target.files[0]) {
            const imageFile = event.target.files[0]
            props.setImageFile(imageFile);
            props.setImageURL(URL.createObjectURL(imageFile));
        }
    }

    const handleCuisineChange = (event) => {
        props.setCuisine(event.target.value)
    }

    const handlePriceChange = (event) => {
        props.setPrice(event.target.value);
    }

    const handleCategoryChange = (event) => {
        props.setCategory(event.target.value);
    }

    //submit handler
    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedRestaurants = props.addRestaurant(props.name, props.address, props.imageFile, props.cuisine, props.category, props.price);

        setAlertMessage("New restaurant added. View in 'Search'.");

        props.setFilteredRestaurants(updatedRestaurants);

        //clear inputs
        // props.setName('');
        // props.setAddress('');
        //props.setImageFile(null);
        // props.setCuisine('');
        // props.setCategory('Vegan');
        // props.setPrice('$');

        //console.log(newRestaurant);
    }


    return (

        <div className="container">
            <h2 className="text-center mt-4">Add a restaurant</h2>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="textbox">
                        <div className="form-group">
                            <label htmlFor="nameInput" className="margin-t bigger-text">Enter Restaurant Name</label>
                            <input value={props.name} onChange={handleNameChange} required type="text" className="form-control" id="nameInput" placeholder="Name"></input>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="textbox">

                        <div className="form-group">
                            <label htmlFor="addressInput" className="margin-t bigger-text">Enter Restaurant Address or Area</label>
                            <input value={props.address} onChange={handleAddressChange} required type="text" className="form-control" id="addressInput" placeholder="Address or Area"></input>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <p className="margin-t bigger-text">Add a picture for the restaurant</p>
                    <div className="container d-flex">


                        <input onChange={handleImageChange} required type="file" id="myFile" name="filename"></input>


                    </div>
                </div>

                <div className="container">

                    <div className="textbox">

                        <div className="form-group">
                            <label htmlFor="cuisineInput" className="margin-t bigger-text">Enter Restaurant Cuisine</label>
                            <input value={props.cuisine} onChange={handleCuisineChange} required type="text" className="form-control" id="cuisineInput" placeholder="Cuisine"></input>
                        </div>

                    </div>

                </div>


                <div className="container">
                    <p className="margin-t bigger-text">Dietary Accomodation</p>
                    <select value={props.category} onChange={handleCategoryChange} required>
                        <option value="vegan">Vegan</option>
                        <option value="gluten-free">Gluten-free</option>
                        <option value="dairy-free">Dairy-free</option>
                        <option value="nut-free">Nut-free</option>
                        <option value="soy-free">Soy-free</option>
                        <option value="seafood-free">Seafood-free</option>
                    </select>
                </div>

                <div className="container">
                    <p className="margin-t bigger-text">Price Range</p>
                    <select value={props.price} onChange={handlePriceChange} required>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                        <option value="$$$$">$$$$</option>
                    </select>
                </div>

                <div className="d-flex container margin-t justify-content-center">
                    <div action="/action_page.php">
                        <input type="submit" value="Submit" style={{ height: "30px", width: "100px" }}></input>
                    </div>
                </div>
            </form>
            <div>
                {/* display any error messages as dismissible alerts */}
                {alertMessage &&
                    <Alert className="mt-3" variant="secondary" onClose={() => setAlertMessage(null)} dismissible="true">{alertMessage}</Alert>
                }
            </div>
        </div>

    );
}