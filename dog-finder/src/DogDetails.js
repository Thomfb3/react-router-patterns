import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Dog.css";


function DogDetails({ dog }) {
    if (!dog) return <Redirect to="/dogs" />

    return (
        <div className="Dog">
            <div className="Dog-container">
                <div className="Dog-image">
                    <img src={dog.src} alt={dog.name} />
                </div>
                <div className="Dog-info">
                    <h1>{dog.name}</h1>
                    <h3>{dog.age} years old</h3>
                    <ul>
                        {dog.facts.map((fact, i) => {
                            <li key={i}>{fact}</li>
                        })}
                    </ul>
                </div>
            </div>
            <Link to="/dogs" className="Dog-back-link">&larr;Back to dogs</Link>
        </div>
    )
}

export default DogDetails;