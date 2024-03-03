import './data.css'
import Popup from './popup';
function Data(props) {
    function pop() {
        console.log(props.name);
    }
    return (
        <>
            <div className="status" onClick={() => pop()}>
                <div className="img" style={{ backgroundImage: `url(${props.img})` }}></div>
                <div className="info">
                    <div className="name">
                        <span className='p1'>{props.name}</span><br /><br />
                        <span className='p2'>{props.time}</span>
                    </div>
                </div>
            </div>
            <Popup n={props.name} t={props.time} i={props.img} />
        </>
    )
}
export default Data;