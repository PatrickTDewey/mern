import React, { useState } from 'react'

const UserForm = (props) => {
    const [formState, setFormState] = useState({
        'firstName': "",
        'lastName': "",
        'email': "",
        'password': "",
        'confirmPassword': ""
    })
    const [validateState, setValidateState] = useState({
        "firstNameErrors": []
    })
    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [conf, setConf] = useState("")
    // const [isSubmitted, setSubmit] = useState(false)

    // const[usernameError, setUnError] = useState("")
    // const[emailError, setEmError] = useState("")
    // const[passwordError, setPwError] = useState("")
    // const[confError, setConfError] = useState("")

    // const handleUsername = (e) => {
    //     setUsername(e.target.value)
        
    //     if (e.target.value.length < 2) {
    //         setUnError('username must be atleast three characters')
    //     } else {
    //         setUnError('')
    //     }
            
    // }
    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    //     if (e.target.value.length < 5) {
    //         setEmError('email must atleast five characters')
    //     } else {
    //         setEmError('')
    //     }
            
    // }
    // const handlePassword = (e) => {
    //     setPassword(e.target.value)
    //     if (e.target.value.length < 8) {
    //         setPwError('Passwords must be atleast eight characters long.')
    //     } 
    //     else {
    //         setPwError('')
    //     }
        
    // }
    // const handleConf = (e) => {
    //     console.log(password);
    //     setConf(e.target.value)
    //     console.log(e.target.value);
    //     if (e.target.value !== password) {
    //         setConfError('Passwords must match')
    //     } else {
    //         setConfError('')
    //     }
    // }
    const changeHandler = (e) => {
        const { name, value } = e.target
        console.log(name, value);
        setFormState({
            ...formState,
            [name]:value
        })
    }

    // const createUser = (e) => {
    //     e.preventDefault()
    //     const newUser = { username, email, password, conf }
    //     console.log('Welcome, ' + newUser.username, newUser.password, newUser.email);
    //     setSubmit(true)
    //     setUsername('')
    //     setEmail('')
    //     setPassword('')
    //     setConf('')
    // }
    const submitHandler = (e) => {
        e.preventDefault();
        let firstNameErrors = [];
        if (formState.firstName.length < 3) {
            firstNameErrors.push('Name must be atleast 3 characters')
        }
        if (formState.firstName.length === 0) {
            firstNameErrors.push('Name required')
        } else
        setValidateState({
            firstNameErrors
        })
    }
    
    return (
        <div className="row">
            <form className="row" onSubmit={submitHandler}>
                {/* {
                    isSubmitted?
                    <h3 className="h3">Thank You For Submitting The Form</h3> :
                    <h3 className="h3">Please Submit The Form</h3>

                } */}
                <div className="mb-3">
                    {
                        validateState.firstNameErrors.map(message => <h4 className="h4 text-danger" key={message}>{message}</h4>)
                    }
                    <label className="form-label" htmlFor="firstName">First Name:</label>
                    <input className="form-control" type="text" onChange={changeHandler} name="firstName" />
                    {/* {
                        usernameError?
                        <p className="text-danger">{usernameError}</p> : ''
                    } */}
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="lastName">Last Name:</label>
                    <input className="form-control" type="text" onChange={changeHandler} name="lastName"/>
                    {/* {
                        emailError?
                        <p className="text-danger">{emailError}</p> : ''
                    } */}
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input className="form-control" type="text" onChange={changeHandler} name="email"/>
                    {/* {
                        emailError?
                        <p className="text-danger">{emailError}</p> : ''
                    } */}
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input className="form-control" type="password" onChange={changeHandler} name="password"/>
                </div>
                    {/* {
                        passwordError?
                        <p className="text-danger">{passwordError}</p> : ''
                    }
                    {
                        confError?
                        <p className="text-danger">{confError}</p> : ''
                    } */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="confirmPassword">Confirm Password:</label>
                    <input className="form-control" type="password" onChange={changeHandler} name="confirmPassword"/>
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />

            </form>
            <div className="row">
                <h3 className="h3">First Name:</h3>
                <h3 className="h3">Last Name:</h3>
                <h3 className="h3">Email:</h3>
                <h3 className="h3">Password:</h3>
                <h3 className="h3">Conf Pw:</h3>
            </div>
        </div>
    )
}

export default UserForm
