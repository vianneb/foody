import React from "react";

export function CheckBox(props) {
    return (
        <div>
            <input type="checkbox" id={props.tag} name={props.tag} value={props.tag}></input>
            <label for={props.tag}>{props.tag}</label><br />
        </div>

    )
}
export function CheckBoxList(props) {
    let checkboxItems = props.tagList.map((tag) => {
        let component = <CheckBox key={tag} tag={tag} />
        return component;
    })

    return (
        <div action="#" className="checkbox">
            {checkboxItems}
        </div>
    )
}

export function AddForm(props) {
    return (

        <div className="container">
            <h2 className="text-center">Add a restaurant</h2>
            <form>
                <div className="container">
                    <div className="textbox">
                        <div className="form-group">
                            <label for="nameInput" className="margin-t bigger-text">Enter Restaurant Name</label>
                            <input type="text" className="form-control" id="nameInput" placeholder="Name"></input>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="textbox">

                        <div className="form-group">
                            <label form="addressInput" className="margin-t bigger-text">Enter Restaurant Address</label>
                            <input type="text" className="form-control" id="addressInput1" placeholder="Address Line 1"></input>
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control" id="addressInput2" placeholder="Address Line 2"></input>
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

                <div className="container checkbox">

                    <p className="margin-t bigger-text">Tags</p>


                    <CheckBoxList tagList={props.tagList}/>

                </div>

                <div className="container">
                    <p className="margin-t bigger-text">Price Range</p>
                    <button className="button">$</button>
                    <button className="button">$$</button>
                    <button className="button">$$$</button>
                    <button className="button">$$$$</button>
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