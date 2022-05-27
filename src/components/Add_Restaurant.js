import React from "react";
import { AddForm } from "./Add_Form";
import { NavBar } from "./Navbar";


export function SharePage(props) {
    return (
        <div className="main-body">

            <NavBar />
            <AddForm tagList={props.tagList} />

        </div>

    )
}