import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [form, setForm] = useState("");
    const [errors, setErrors] = useState()
    const onSubmitHandler = e => {
        // prevent default behavior of the submit
        e.preventDefault();
        // make a post request to create a new user
        axios.post("http://localhost:8000/api/users/register", form)
          .then(res => console.log(res.data))
          .catch(err => {
              console.log(err.response.data)
              const {errors} = err.response.data
              const errObj = {}
              for (const [key, value] of Object.entries(errors)) {
                  errObj[key] = value
              }
              setErrors(errObj)
        })
    }
    return (
    
        <form onSubmit={onSubmitHandler}>
            {}
            <div className="form-control">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" id="firstName" onChange={(e) => setForm({...form, firstName: e.target.value})} />
            </div>
            <div className="form-control">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" id="lastName" onChange={(e) => setForm({...form, lastName: e.target.value})} />
            </div>
            <div className="form-control">
                <label htmlFor="lastName">Email:</label>
                <input type="text" name="email" id="email" onChange={(e) => setForm({...form, email: e.target.value})} />
            </div>
            <div className="form-control">
                <label htmlFor="lastName">Pasword:</label>
                <input type="password" name="password" id="password" onChange={(e) => setForm({...form, password: e.target.value})} />
            </div>
            <div className="form-control">
                <label htmlFor="lastName">Conf Password:</label>
                <input type="password" name="conf" id="conf" onChange={(e) => setForm({...form, confirmPassword: e.target.value})} />
            </div>
            <input type="submit" value="add user" />
        </form>
    )
}

export default UserForm
