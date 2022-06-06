import React, { useState } from "react";
import { Alert } from "react-bootstrap";

//imports from firebase
import { getStorage, uploadBytes, ref as storageRef, getDownloadURL } from 'firebase/storage';

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

    const handleCuisineChange = (event) => {
        props.setCuisine(event.target.value)
    }

    const handleCategoryChange = (event) => {
        props.setCategory(event.target.value);
    }

    const handlePriceChange = (event) => {
        props.setPrice(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        props.setDescription(event.target.value);
    }
    
    //handler for user uploaded images
    const handleImageChange = (event) => {
        if (event.target.files.length > 0 && event.target.files[0]) {
            const imageFile = event.target.files[0]
            props.setImageFile(imageFile);  //save to state
            props.setImageURL(URL.createObjectURL(imageFile));
        }
    }

    //submit handler
    const handleSubmit = async (event) => {
        event.preventDefault();

        //handle image upload 

        const restaurantKey = props.name.toLowerCase().split(" ").join("");
        const storage = getStorage();
        const imageRef = storageRef(storage, "restaurantImages/" + restaurantKey + ".jpg");
        await uploadBytes(imageRef, props.imageFile);
        const imageUrlOnFirebase = await getDownloadURL(imageRef);
        props.setImageURL(imageUrlOnFirebase);

        //add a new restaurant to array of all restaurants
        props.addRestaurant(props.name, props.address, imageUrlOnFirebase, props.cuisine, props.category, props.price, props.description);


        setAlertMessage("New restaurant added. View in 'Search'.");

        //clear inputs
        props.setName('');
        props.setAddress('');
        props.setCuisine('');
        props.setCategory('Vegan');
        props.setPrice('$');
        props.setDescription('');
    }


    return (

        <div className="container">
            <h2 className="text-center mt-4">Add a Restaurant</h2>
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
                    <label htmlFor="imageUpload" className="margin-t bigger-text">Add a picture for the restaurant</label>
                    <div className="container d-flex">


                        <input onChange={handleImageChange} required type="file" id="imageUpload"></input>


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
                    <label htmlFor="categoryInput" className="margin-t bigger-text">Dietary Accomodation</label>
                    <div>
                        <select id="categoryInput" value={props.category} onChange={handleCategoryChange} required>
                            <option value="Vegan">Vegan</option>
                            <option value="Gluten-free">Gluten-free</option>
                            <option value="Dairy-free">Dairy-free</option>
                            <option value="Nut-free">Nut-free</option>
                            <option value="Soy-free">Soy-free</option>
                            <option value="Seafood-free">Seafood-free</option>
                        </select>
                    </div>
                </div>

                <div className="container">
                    <label htmlFor="priceInput" className="margin-t bigger-text">Price Range</label>
                    <div>
                        <select id="priceInput" value={props.price} onChange={handlePriceChange} required>
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                            <option value="$$$$">$$$$</option>
                        </select>
                    </div>
                </div>

                <div className="container">
                    <label htmlFor="description" className="margin-t bigger-text">Restaurant Description</label>

                    <div>
                        <textarea value={props.description} id="description" required className="w-100" onChange={handleDescriptionChange}></textarea>
                    </div>

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