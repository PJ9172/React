import { useState } from "react"
import './Task7.css'

export default function Task7() {
    var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [arr, setArr] = useState(num);
    function deletenum() {
        var num = document.getElementById('input');
        if (num.value != '') {
            var inputnum = parseInt(num.value);
            if (arr.includes(inputnum)) {
                var index = arr.indexOf(inputnum);
                // console.log(index);
                arr.splice(index, 1);
                var newarr = [...arr]
                alert("Number deleted from array ! ! !")
                num.value = '';
                setArr(newarr);
            }
            else {
                alert("Given number is not present in array ! ! !")
                num.value = '';
            }
        }
        else {
            alert("Please enter a number ! ! !");
        }
    }
    return (
        <>
            <div className="row">
                {
                    arr.map((e, i) => {
                        return (
                            <div className="box" key={i}>
                                <p>{e}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
                <input type="number" placeholder="Enter Number ! ! !" id="input" />
            </div>
            <div className="row">
                <button onClick={deletenum}>Delete</button>
            </div>
        </>
    )
}