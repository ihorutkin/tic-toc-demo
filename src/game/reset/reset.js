import React from "react";
import "./reset.css"

export default function Reset({onClick}){
    // const reset = () => {
    //     //window.location.reload()
    // }
    return (
        <div className="reset btn-container">
            <button className="reset_btn"  onClick={onClick}>Reset</button>
        </div>
    )
}