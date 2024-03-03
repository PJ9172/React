import Child from './child'
function Parent() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <Child name="Sanjana Hodbe" mail="sanjanahodbe@gmail.com" company="Persistent Systems Limited" age="19" avtar="https://avatars.githubusercontent.com/u/147395950?v=4" link="https://github.com/SH3422"></Child>
                    <Child name="Prajwal Jagtap" mail="rohitjagtap5000@gmail.com" company="Wipro India" age="19" avtar="https://avatars.githubusercontent.com/u/147252354?v=4" link="https://github.com/PJ9172"></Child>
                    <Child name="Mosin Balsing" mail="mosinbalsing@gmail.com" company="Wipro India" age="19" avtar="https://avatars.githubusercontent.com/u/119176708?v=4" link="https://github.com/Mosin-M-B"></Child>
                </div>
                <div className="row">
                    <Child name="Ashwini Yadav" mail="ashwiniyadav3703@gmail.com" company="Tech Mahindra India" age="21" avtar="https://avatars.githubusercontent.com/u/145981304?v=" link="https://github.com/users/ashwini6777"></Child>
                    <Child name="Sharifa Shaikh" mail="shaikhsharifa762@gmail.com" company="Cognizant" age="21" avtar="https://avatars.githubusercontent.com/u/145984673?v=4" link="https://github.com/shara762"></Child>
                    <Child name="Farzana Shaikh" mail="farashaikh564@gmail.com" company="Talentica software" age="21" avtar="https://avatars.githubusercontent.com/u/145984007?v=4" link="https://github.com/users/Fara776"></Child>
                </div>
            </div>
        </>
    )
}
export default Parent;