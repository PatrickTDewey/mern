// import React, { Component } from 'react'

// class PersonCard extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             age: this.props.age,
//             count: 0
//         }
//         console.log(this.state.age)
//     };
//     incrementAge = (e) => {
//         console.log(this.state.count);
//         this.setState({count: this.state.count + 1})
//         return this.setState({age: this.state.age + 1})
//     }
//     render(){
//         const {firstName, lastName, hairColor } = this.props;
//         const {age} = this.state;
//         const { incrementAge: plus } = this;

//         return(
//             < >
//                 <h3 >{lastName}, {firstName}</h3>
//                 <p >Age: {age}</p>
//                 <p >Hair Color: {hairColor}</p>
//                 <button onClick={plus}>Age + 1</button>
//             </>
//         );
//     }
// }
import React, { useState } from 'react'

const PersonCardComponent = (props) => {
    const [count, setCount] = useState(0)
    const { firstName, lastName, hairColor, age } = props;
    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div>
            < >
                <h3 >{lastName}, {firstName}</h3>
                <p >Age: {age + count}</p>
                <p >Hair Color: {hairColor}</p>
                <p>Button Clicked {count} times.</p>
                <button onClick={handleClick}>Click Me</button>
            </>
        </div>
    )
}



export default PersonCardComponent;