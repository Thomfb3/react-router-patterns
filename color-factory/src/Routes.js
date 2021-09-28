import React, {useState, useEffect} from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Color from "./Color";
import ColorList from "./ColorList";
import ColorForm from "./ColorForm";

function Routes() {
    const initialColors = JSON.parse(localStorage.getItem("colors")) || {
        red: "#ff0000",
        green: "#00ff00",
        blue: "#0000FF"
    };

    const [colors, updatedColors] = useState(initialColors);

    useEffect(
        ()=> localStorage.setItem("colors", JSON.stringify(colors)),
        [colors]
    );

    function handleAdd(newColorObj) {
        updatedColors(prevColors => ({ ...prevColors, ...newColorObj }));
    };

    function renderCurrentColor(props) {
        const { color } = props.match.params;
        const colorHex = colors[color];
        return <Color {...props} color={colorHex} name={color} />;
    };


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/colors">
                    <ColorList colors={colors} />
                </Route>
                <Route exact path="/colors/new">
                    <ColorForm addColor={handleAdd} />
                </Route>
                <Route path="/colors/:color" render={renderCurrentColor} />
                <Redirect to="/colors" />

            </Switch>
        </BrowserRouter>
    );
}


export default Routes;