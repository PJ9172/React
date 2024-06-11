import { useState } from "react"

export default function Task8() {
    const [newInput, setInput] = new useState("")

    function lower(currentInput) {
        var result = "";
        for (var i = 0; i < currentInput.length; i++) {
            var charcode = currentInput.charCodeAt(i);
            if (charcode >= 65 && charcode <= 90)
                result += String.fromCharCode(charcode + 32);
            else
                result += currentInput[i];
        }
        return result;
    }

    function upper(currentInput) {
        var result = "";
        for (var i = 0; i < currentInput.length; i++) {
            var charcode = currentInput.charCodeAt(i);
            if(charcode>=97 && charcode<=122)
                result += String.fromCharCode(charcode & 223);
            else
                result+=currentInput[i];
        }
        return result;
    }

    function changeCase(wcase) {
        var out = "";
        var currentInput = document.getElementById('input').value;
        if (currentInput != "") {
            if (wcase === "lowercase") {
                setInput(lower(currentInput));
            }
            if (wcase === "uppercase") {
                setInput(upper(currentInput));
            }
            if (wcase === "snakecase") {
                out = currentInput.replace(/ /g, "_");
                setInput(lower(out));
            }
            if (wcase === "kebabcase") {
                out = currentInput.replace(/ /g, "-");
                setInput(lower(out));
            }
        }
    }

    return (
        <>
            <input type="text" placeholder="Enter Input String ! ! !" id="input" />
            <button onClick={() => { changeCase("lowercase") }}>lowercase</button>
            <button onClick={() => { changeCase("uppercase") }}>UPPERCASE</button>
            <button onClick={() => { changeCase("camelcase") }}>camelCase</button>
            <button onClick={() => { changeCase("pascalcase") }}>PascalCase</button>
            <button onClick={() => { changeCase("snakecase") }}>snake_case</button>
            <button onClick={() => { changeCase("kebabcase") }}>kebab-case</button>
            <br /><br />
            <h1>{newInput}</h1>
        </>
    )
}