import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({ dogs }) {
    return (
        <div className="DogList">
            <h1>We have dogs!</h1>
            <div className="DogList-list">
                {dogs.map(dog => (
                    <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                        <div className="DogList-dog" key={dog.name}>
                            <img className="DogList-dog-image" src={dog.src} alt={dog.name} />
                            <h3 className="DogList-dog-name">{dog.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}


export default DogList;