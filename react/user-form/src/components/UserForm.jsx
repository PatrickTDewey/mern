import React, { useState } from 'react'

const UserForm = (props) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conf, setConf] = useState("")

    const createUser = (e) => {
        e.preventDefault()
        const newUser = { username, email, password, conf }
        console.log('Welcome, ' + newUser.username, newUser.password, newUser.email);
        setUsername('')
        setEmail('')
        setPassword('')
        setConf('')
    }
    return (
        <div className="row">
            <form className="row" onSubmit={createUser}>
                <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input className="form-control" type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input className="form-control" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password:</label>
                    <input className="form-control" type="password" onChange={(e) => setConf(e.target.value)} value={conf} />
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
