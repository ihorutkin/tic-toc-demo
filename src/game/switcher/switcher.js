import React from "react";
import "./switcher.css"

export default function Switcher() {
    const changeColors =  () => {
        let elem = document.body
        elem.classList.toggle("dark-mode")
    }
    return (
        <div className="switch-container container">
            <label className="switcher">
                <input type="checkbox" onClick={changeColors}/>
                <span className="check"></span>
            </label>
        </div>
    )
}