import React, { useState } from 'react'

const Registration = (props) => {
    const [formState, setFormState] = useState({
        'fullName': '',
        'email': "",
        'password': "",
        'confPassword': ""
    })

    const [validState, setValidState] = useState({
        "fullName": [],
        "email": false,
        "password": false,
        "confPassword": false
    })
    const changeHandler = (e) => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value
        })
        
    }
    const submitHandler = (e) => {
        e.preventDefault();
        let fullName = [], email = false, password = false, confPassword = false;
        // FULL NAME MUST NOT BE EMPTY
        if (formState.fullName.length === 0) {
            fullName.push('name required.')
        }
        // FULLNAME CONTAINS LETTERS
        if ((/[^A-Za-z\s]/).test(formState.fullName)) {
            fullName.push('must enter alpha chars')
        }
        // EMAIL VALID FORMAT
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(formState.email)) {
            email = true
        }
        // Password Length
        if (formState.password.length < 5) {
            password = true
        }
        // PASSWORD & CONF MATCH
        if (formState.password !== formState.confPassword) {
            confPassword = true
        }

        // SET VALID STATE
        setValidState({
            fullName,
            email,
            password,
            confPassword,
        })
    }
    return (

        <div>
            <h1>Registration</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" name="fullName" onChange={changeHandler} />
                    {
                        validState.fullName.map(message => <p style={{'color':'red'}}>{message}</p>)
                    }
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={changeHandler} />
                    {
                        validState.email ?
                            <p style={{ "color": 'red' }}>Email must be valid.</p> :
                            null
                    }
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={changeHandler} />
                    {
                        validState.password ?
                            <p style={{ "color": 'red' }}>Must be at least 5 characters.</p> :
                            null
                    }
                </div>
                <div>
                    <label htmlFor="confPassword">Confirm Password</label>
                    <input type="password" name="confPassword" onChange={changeHandler} />
                    {
                        validState.confPassword ?
                            <p style={{ "color": 'red' }}>Password must match.</p> :
                            null
                    }
                </div>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default Registration