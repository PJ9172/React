function Child(props) {
    return (
        <>
            <div className="box">
                <div className="profile">
                    <center>
                       <a href={props.link}> <div className="img" style={{backgroundImage:`url(${props.avtar})`}}></div></a>
                    </center>
                </div>
                <hr />
                <div className="info">
                    <p>Name : {props.name}</p>
                    <p>Email-Id : {props.mail}</p>
                    <p>Favourite Company : {props.company}</p>
                    <p>Age : {props.age}</p>
                </div>
            </div>
        </>
    )
}
export default Child;