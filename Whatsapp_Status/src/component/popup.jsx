import './popup.css';
function Popup(props)
{
    return(
        <div className="popup" id='popup'>
            <h1>{props.n}</h1>
            <h3>{props.t}</h3>
        </div>
    )
}
export default Popup;