import Data from './data';
import './status.css';
function Status() {
    
    return (
        <center>
            <div className="container">
                <div className="title">
                    <h1>Status</h1>
                </div>
                <p>Recent Updates</p>
                <div className="containt">
                    <Data img="https://img.freepik.com/free-vector/vacation-time-summer-icon-white-background_1308-109560.jpg" time="03:00 PM" name="Gauri"></Data>
                    <Data img="https://i.scdn.co/image/ab67616d0000b273150036ccfad064fc5f1ff2ef" time="01:00 PM" name="Ramesh"></Data>
                    <Data img="https://qph.cf2.quoracdn.net/main-qimg-b49f0acfa4ffe6cb57d145d9a98e3441" time="10:00 AM" name="Kunal"></Data>
                    <Data img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOs8erXX8jqIG5pUWugXn4Rd3kvrp3qrqMWhJ2aj0O_g&s" time="09:00 AM" name="Raj"></Data>
                    <Data img="https://static.vecteezy.com/system/resources/previews/006/797/828/non_2x/good-friday-illustration-of-jesus-christ-crucifixion-free-vector.jpg" time="8:00 AM" name="Rakesh"></Data>
                </div>
            </div>
        </center>
    )
}
export default Status;