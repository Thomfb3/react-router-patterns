import React from "react";
import { Link } from "react-router-dom";
import "./Color.css";

function Color({color, name, history}) {
    if(!color) {
        history.push("/colors");
    }
    return (
        <div className="Color" style={{ backgroundColor: color }}>
        
            <p className="Color-name">This is {name}.</p>
            <p className="Color-tag">Isn't it nice?</p>

            <div>
                <Link className="Color-back" to="/">&larr;Go Back</Link>
            </div>
        </div>
    );
}


export default Color;