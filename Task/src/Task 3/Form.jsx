import { useState } from 'react'
import './Form.css'
export default function Form() {
    const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "" })
    return (
        <>
            <center>
                <TextBox setUser={setUser}/><br />
                <Record user={user} />
            </center>
        </>
    )
}

function TextBox({setUser}) {
    return (
        <>
            <div className="form">
                <div className="row">
                    <p>First Name : </p>
                    <input type="text" id='fname' />
                </div>
                <div className="row">
                    <p>Last Name : </p>
                    <input type="text" id='lname' />
                </div>
                <div className="row">
                    <p>Email-Id : </p>
                    <input type="email" id='mail' />
                </div><div className="row">
                    <p>Password : </p>
                    <input type="password" id='pass' />
                </div>
                <button onClick={()=>{
                    var fname=document.getElementById('fname').value;
                    var lname=document.getElementById('lname').value;
                    var mail=document.getElementById('mail').value;
                    var pass=document.getElementById('pass').value;
                    console.log(fname);
                    if(fname!=""&&lname!=""&&mail!=""&&pass!=""){
                        setUser({firstName: fname, lastName:lname, email:mail, password:pass})
                    }
                    else{
                        alert("Invalid Data ! ! !")
                    }
                }}>REGISTER</button>
            </div>
        </>
    )
}

function Record({ user }) {
    return (
        <>
            <table>
                <tr>
                    <td>Frist Name : </td>
                    <td>{user.firstName}</td>
                </tr>
                <tr>
                    <td>Last Name : </td>
                    <td>{user.lastName}</td>
                </tr>
                <tr>
                    <td>Email-Id : </td>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <td>Password : </td>
                    <td>{user.password}</td>
                </tr>
            </table>
        </>
    )
}