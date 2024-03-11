import { useState } from "react";

export default function Task4() {
    var [color, setColor] = new useState("White")
    document.body.style.backgroundColor = color
    return (
        <>
            <center>
                <Button color="Green" setColor={setColor}></Button>
                <Button color="Pink" setColor={setColor}></Button>
                <Button color="Yellow" setColor={setColor}></Button>
                <Button color="Purple" setColor={setColor}></Button>
                <Button color="Orange" setColor={setColor}></Button>
            </center>
        </>
    )
}

function Button({ color, setColor }) {
    return (
        <button style={{ margin:"50px" }} onClick={() => {
            // console.log(color);
            setColor(color);
        }}>{color}</button>
    )
}