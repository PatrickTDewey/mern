import React, { Component } from 'react'

class MyNewComponent extends Component {
    // declare constructor to override our default constructor so that we can initially set the state object
    constructor(props) {
        super(props);
        this.state = {
            message: "Welcome to the site"
        }
    }
    logout = (e) => {
        return this.setState({message: 'Goodbye Friend'});
    }
    render() {
        const { header, children } = this.props;
        const {message} = this.state;
        
        return (
            <div className="custom-class">
                <h1>{header}</h1>
                <h3>{message}</h3>
                {children}
                <button onClick={this.logout}>Click Me!</button>
            </div>
        )
    }
}

export default MyNewComponent