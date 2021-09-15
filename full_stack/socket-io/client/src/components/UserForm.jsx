import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [form, setForm] = useState("");

    const onSubmitHandler = e => {
        // prevent default behavior of the submit
        e.preventDefault();
        // make a post request to create a new user
        axios.post("http://localhost:8000/api/users",{firstName: form.firstName, lastName: form.lastName})
          .then(res => console.log(res))
          .catch(err => console.log(err))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-control">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" id="firstName" onChange={(e) => setForm({...form, firstName: e.target.value})} />
            </div>
            <div className="form-control">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" id="lastName" onChange={(e) => setForm({...form, lastName: e.target.value})} />
            </div>
            <input type="submit" value="add user" />
        </form>
    )
}

export default UserForm
