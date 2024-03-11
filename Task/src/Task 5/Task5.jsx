import { useState } from "react"

export default function Task5() {

    var [name, setName] = new useState("Student")
    return (
        <>
            <Input name={name} setName={setName}></Input>
            <h1>Hello {name}</h1>
            <Button setName={setName}></Button>
        </>
    )
}

function Input({ setName, name }) {
    return (
        <>
            <input type="text" id="name" value={name} onChange={() => {
                // console.log(document.getElementById('name'));
                var name = document.getElementById('name').value;
                setName(name);
            }} />
        </>

    )
}

function Button({ setName }) {
    return (
        <button onClick={() => {
            setName("Student");
        }}>Reset</button>
    )
}