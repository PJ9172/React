import { useState } from "react"
import './Task8.css'


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
            if (charcode >= 97 && charcode <= 122)
                result += String.fromCharCode(charcode & 223);
            else
                result += currentInput[i];
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
            if (wcase === "camelcase") {
                currentInput = lower(currentInput);
                var charcode = currentInput.charCodeAt(0);
                if (charcode >= 65 && charcode <= 90)
                    out += String.fromCharCode(charcode + 32);
                else
                    out += currentInput[0];
                for (var i = 1; i < currentInput.length; i++) {
                    if (currentInput[i] === " ") {
                        i++;
                        charcode = currentInput.charCodeAt(i);
                        if (charcode >= 97 && charcode <= 122)
                            out += String.fromCharCode(charcode & 223);
                        else
                            out += currentInput[i];
                    }
                    else
                        out += currentInput[i];
                }
                setInput(out);
            }
            if (wcase === "pascalcase") {
                currentInput = lower(currentInput);
                var charcode = currentInput.charCodeAt(0);
                if (charcode >= 97 && charcode <= 122)
                    out += String.fromCharCode(charcode & 223);
                else
                    out += currentInput[0];
                for (var i = 1; i < currentInput.length; i++) {
                    if (currentInput[i] === " ") {
                        i++;
                        charcode = currentInput.charCodeAt(i);
                        if (charcode >= 97 && charcode <= 122)
                            out += String.fromCharCode(charcode & 223);
                        else
                            out += currentInput[i];
                    }
                    else
                        out += currentInput[i];
                }
                setInput(out);
            }
        }
        else
            alert("Please Enter Valid String ! ! !")
    }

    return (
        <>
            <center>
                <div className="container">
                    <div className="input">
                        <input type="text" placeholder="Enter Input String ! ! !" id="input" />
                    </div>
                    <div className="casebutton">
                        <button onClick={() => { changeCase("lowercase") }}>lowercase</button>
                        <button onClick={() => { changeCase("uppercase") }}>UPPERCASE</button>
                        <button onClick={() => { changeCase("camelcase") }}>camelCase</button>
                        <button onClick={() => { changeCase("pascalcase") }}>PascalCase</button>
                        <button onClick={() => { changeCase("snakecase") }}>snake_case</button>
                        <button onClick={() => { changeCase("kebabcase") }}>kebab-case</button>
                    </div>
                    <div className="output">
                        <h1>{newInput}</h1>
                    </div>
                </div>
            </center>
        </>
    )
}