import React, { Component } from 'react' 

class LightSwitch extends Component {
    constructor(props){
        super(props)
        this.state = {
            position: "On"
        }
    };
    flipSwitch = (e) => {
        if (this.state.position === 'On') {
            return this.setState({position: 'Off'})
        } else {
            return this.setState({position: 'On'})
        }
    }
    
    render() {
        const {position} = this.state;
        const {flipSwitch: flip } = this
        return (
            <fieldset>
                <p>The light is currently {position} </p>
                <button onClick={flip}>Flip Switch</button>
            </fieldset>
        )
    }
}
export default LightSwitch;