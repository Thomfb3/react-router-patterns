import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";


function ColorList({ colors }) {
    const colorLinks = Object.keys(colors).map(colorName => (
        <li key={colorName}>
            <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
    ));

    return (
        <div className="ColorList">
            <div className="ColorList-header">
                <h1>Welcome to the color factory.</h1>
                <Link className="ColorList-link" to="/colors/new">Add a Color</Link>
            </div>
            <div className="ColorList-colors">
                <ul>
                    <p>Choose a color</p>
                    {colorLinks}
                </ul>
            </div>

        </div>
    )
}


export default ColorList;