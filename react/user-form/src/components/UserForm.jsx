import React, { useState } from 'react'

const UserForm = (props) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conf, setConf] = useState("")
    const [isSubmitted, setSubmit] = useState(false)

    const[usernameError, setUnError] = useState("")
    const[emailError, setEmError] = useState("")
    const[passwordError, setPwError] = useState("")
    const[confError, setConfError] = useState("")

    const handleUsername = (e) => {
        setUsername(e.target.value)
        
        if (e.target.value.length < 2) {
            setUnError('username must be atleast three characters')
        } else {
            setUnError('')
        }
            
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 5) {
            setEmError('email must atleast five characters')
        } else {
            setEmError('')
        }
            
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPwError('Passwords must be atleast eight characters long.')
        } 
        else {
            setPwError('')
        }
        
    }
    const handleConf = (e) => {
        console.log(password);
        setConf(e.target.value)
        console.log(e.target.value);
        if (e.target.value !== password) {
            setConfError('Passwords must match')
        } else {
            setConfError('')
        }
    }

    const createUser = (e) => {
        e.preventDefault()
        if(username.length < 1) {
            setUnError('username is required')
        }
        const newUser = { username, email, password, conf }
        console.log('Welcome, ' + newUser.username, newUser.password, newUser.email);
        setSubmit(true)
        setUsername('')
        setEmail('')
        setPassword('')
        setConf('')
    }
    
    return (
        <div className="row">
            <form className="row" onSubmit={createUser}>
                {
                    isSubmitted?
                    <h3 className="h3">Thank You For Submitting The Form</h3> :
                    <h3 className="h3">Please Submit The Form</h3>

                }
                <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input className="form-control" type="text" onChange={handleUsername} value={username} />
                    {
                        usernameError?
                        <p className="text-danger">{usernameError}</p> : ''
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input className="form-control" type="text" onChange={handleEmail} value={email} />
                    {
                        emailError?
                        <p className="text-danger">{emailError}</p> : ''
                    }
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input className="form-control" type="password" onChange={handlePassword} value={password} />
                </div>
                    {
                        passwordError?
                        <p className="text-danger">{passwordError}</p> : ''
                    }
                    {
                        confError?
                        <p className="text-danger">{confError}</p> : ''
                    }
                <div className="mb-3">
                    <label className="form-label">Confirm Password:</label>
                    <input className="form-control" type="password" onChange={handleConf} value={conf} />
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />

            </form>
            <div className="row">
                <h3 className="h3">First Name: {username}</h3>
                <h3 className="h3">Email: {email}</h3>
                <h3 className="h3">Password: {password}</h3>
                <h3 className="h3">Conf Pw: {conf}</h3>
            </div>
        </div>
    )
}

export default UserForm
