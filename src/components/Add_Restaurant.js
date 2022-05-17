import React from "react";
import { AddForm } from "./Add_Form";
import { NavBar } from "./Navbar";


export function SharePage(props) {
    return (
        <div>
            <body className="main-body">
                <NavBar />
                <AddForm tagList={props.tagList} />
            </body>
        </div>

    )
}