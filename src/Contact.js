import {useState} from 'react'
const Contact = (props) => {
    const [number,setNumber] = useState(0)
    const increment = () => {
        setNumber(number + 1)
    }
    const [names] = useState([
        {id: 1, name: "Omotara"},
        {id: 2, name: "Olumide"},
        {id: 3, name: "Bankioluwa"},
        {id: 4, name: "Yejide"}

    ])
    console.log(props)
    return (
        <div>
            <h1>
                Hello Contact {number}
            </h1>
            <button onClick= {increment} >
                Increment
            </button>
            {names.map((user) => {
                return <div>{user.name}</div>;
            })}
            <p></p>
        </div>
    );
};

export default Contact;