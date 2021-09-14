import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios';

const PlayerForm = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        position: '',
    });
    
    const history = useHistory();
    const onSubmitHandler = e => {
        // prevent default behavior of the submit
        e.preventDefault();
        // make a post request to create a new user\
        const { firstName, lastName, position } = form
        axios.post("http://localhost:8000/api/players/new", { firstName, lastName, position })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        history.push('/')
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="firstName" id="firstName" placeholder="first name" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                <label htmlFor="firstName">First Name:</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="lastName" id="lastName" placeholder="last name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                <label htmlFor="lastName">Last Name:</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="position" id="position" placeholder="position" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} />
                <label htmlFor="position">Position:</label>
            </div>
            <input type="submit" value="Add Player" className="btn btn-primary" />
            <Link className="ms-3" to='/'>Home</Link>
        </form>
    )
}

export default PlayerForm
