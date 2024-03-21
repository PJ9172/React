import { useState } from "react"
import './Task6.css'

export default function Task6(){
    var num=[1,2,3,4,5]
    const [arr,setArr] = new useState(num);
    function reverse(){
        let output= document.getElementById("output");
        console.log(output);
        output.style.display="flex";
        var newarr=[...arr]
        newarr.reverse();
        setArr(newarr);
    }
    return(
        <>
            <center>
                <div className="row">
                    {num.map((ele,index)=>{
                       return( 
                       <div className="value" key={index}>
                            <p>{ele}</p>
                        </div>
                    );
                    })}
                </div>

                <div className="row" id="output" style={{display:"none"}}>
                    {arr.map((ele,index)=>{
                       return( 
                       <div className="value" key={index}>
                            <p>{ele}</p>
                        </div>
                    );
                    })}
                </div>
                <button onClick={()=>{reverse()}}>Reverse</button>
            </center>
        </>
    )
}