import React from "react";

export function OrangeButton(props) {
    return (
        <button className="btn orange-btn btn-dark" href="#">{props.text}</button>
    )
    
}

export function OrangeButtonList(props) {

    let buttonItems = props.tagList.map((tag) => {
        let component = <OrangeButton key={tag} text={tag}/>
        return component
    })

    return(
        <div className="d-flex ">
            {buttonItems}
        </div>
    )
}