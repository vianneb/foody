import React from "react";

// export function CheckBox(props) {
//     return (
//         <div>
//             <input type="checkbox" id={props.tag} name={props.tag} value={props.tag}></input>
//             <label for={props.tag}>{props.tag}</label><br />
//         </div>

//     )
// }

// export function CheckBoxList(props) {
//     let checkboxItems = props.tagList.map((tag) => {
//         let component = <CheckBox key={tag} tag={tag} />
//         return component;
//     })

//     return (
//         <div action="#" className="checkbox">
//             {checkboxItems}
//         </div>
//     )
// }

export function AddForm(props) {
    return (

        <div className="container">
            <h2 className="text-center mt-4">Add a restaurant</h2>
            <form>
                <div className="container">
                    <div className="textbox">
                        <div className="form-group">
                            <label htmlFor="nameInput" className="margin-t bigger-text">Enter Restaurant Name</label>
                            <input type="text" className="form-control" id="nameInput" placeholder="Name"></input>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="textbox">

                        <div className="form-group">
                            <label htmlFor="addressInput" className="margin-t bigger-text">Enter Restaurant Address or Area</label>
                            <input type="text" className="form-control" id="addressInput" placeholder="Address or Area"></input>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <p className="margin-t bigger-text">Add a picture for the restaurant</p>
                    <div className="container d-flex">

                        <div action="/action_page.php">
                            <input type="file" id="myFile" name="filename"></input>
                        </div>

                    </div>
                </div>

                <div className="container">

                    <div className="textbox">

                        <div className="form-group">
                            <label htmlFor="cuisineInput" className="margin-t bigger-text">Enter Restaurant Cuisine</label>
                            <input type="text" className="form-control" id="cuisineInput" placeholder="Cuisine"></input>
                        </div>

                    </div>

                </div>

                {/* Type of services examples include outdoor dining, delivery, takeout, etc. */}
                <div className="container">

                    <div className="textbox">

                        <div className="form-group">
                            <label htmlFor="servicesInput" className="margin-t bigger-text">Enter Restaurant Services (separated by commas)</label>
                            <input type="text" className="form-control" id="servicesInput" placeholder="Services"></input>
                        </div>

                    </div>

                </div>

                <div className="container">
                    <p className="margin-t bigger-text">Dietary Accomodations</p>
                    <div>
                        <div>
                            <input type="checkbox" id="vegan" name="vegan" value="vegan" />
                            <label htmlFor="vegan">Vegan</label>
                        </div>

                        <div>
                            <input type="checkbox" id="gluten-free" name="gluten-free" value="gluten-free" />
                            <label htmlFor="gluten-free">Gluten allergies</label>
                        </div>

                        <div>
                            <input type="checkbox" id="nut-free" name="nut-free" value="nut-free" />
                            <label htmlFor="nut-free">Nut allergies</label>
                        </div>

                        <div>
                            <input type="checkbox" id="diary-free" name="diary-free" value="diary-free" />
                            <label htmlFor="diary-free">Diary allergies</label>
                        </div>

                        <div>
                            <input type="checkbox" id="diary-free" name="diary-free" value="diary-free" />
                            <label htmlFor="diary-free">Soy allergies</label>
                        </div>

                        <div>
                            <input type="checkbox" id="diary-free" name="diary-free" value="diary-free" />
                            <label htmlFor="diary-free">Shellfish &amp; fish allergies</label>
                        </div>

                    </div>
                </div>

                <div className="container">
                    <p className="margin-t bigger-text">Price Range</p>
                    <div>
                        <input type="radio" id="$" name="price" value="$" />
                        <label htmlFor="$">$</label>
                    </div>

                    <div>
                        <input type="radio" id="$$" name="price" value="$$" />
                        <label htmlFor="$$">$$</label>
                    </div>

                    <div>
                        <input type="radio" id="$$$" name="price" value="$$$" />
                        <label htmlFor="$$$">$$$</label>
                    </div>

                    <div>
                        <input type="radio" id="$$$$" name="price" value="$$$$" />
                        <label htmlFor="$$$$">$$$$</label>
                    </div>
                </div>

                <div className="d-flex container margin-t justify-content-center">
                    <div action="/action_page.php">
                        <input type="submit" value="Submit" style={{ height: "30px", width: "100px" }}></input>
                    </div>
                </div>
            </form>
        </div>

    );
}