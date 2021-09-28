import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ColorForm.css";


function ColorForm({ addColor }) {
    const [form, updateForm] = useState({name: "", color: "#ffffff"});
    const history = useHistory();

    function handleChange(e) {
        updateForm(f =>({ ...f, [e.target.name]: e.target.value}));
    }


    function handleSubmit(e) {
        e.preventDefault();
        addColor({ [form.name]: form.color });
        history.push("/colors");
    }

    const {name, color} = form;



    return (
        <div className="ColorForm-background">
            <form className="ColorForm" onSubmit={handleSubmit}>
            <h1>New Color Form</h1>
                <div>
                    <label htmlFor="name">Color Name</label>
                    <input
                        type="name"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        value={name}
                    />
                </div>
                <div>
                    <label htmlFor="color">Color Value</label>
                    <input
                        type="color"
                        name="color"
                        id="color"
                        onChange={handleChange}
                        value={color}
                    />
                </div>

                <input className="ColorForm-submit" type="Submit" value="Add Color" readOnly />
            </form>
        </div>
    );
}



export default ColorForm;