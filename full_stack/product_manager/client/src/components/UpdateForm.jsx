import React, { useState } from 'react';
import {useHistory, Link} from 'react-router-dom'
import axios from 'axios';

const UpdateForm = ({id}) => {
    const [form, setForm] = useState({
        title:'',
        price:0,
        description:'',
    });
    const history = useHistory()
    const onUpdate = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${id}`, { title: form.title, price: form.price, description: form.description })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setForm({
            title:'',
            price:0,
            description:''
        })
        history.push('/')
        history.goForward()
    }
    return (
        <div className="form-wrapper">
            <form onSubmit={onUpdate}>
                <div className="form-floating mb-3">
                    <input  className="form-control" type="text" name="title" id="title" value={form.title}  onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="title"/>
                    <label htmlFor="title" className="form-label" >Title:</label>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control"type="number" step="0.01" name="price" id="price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="price" />
                    <label htmlFor="price" >Price:</label>
                </div>
                <div className="form-floating mb-3" style={{marginTop: '10px'}}>
                    <textarea className="form-control" placeholder="description" cols="20" rows="2" id="description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
                    <label htmlFor="description" >Description:</label>
                </div>
                <input type="submit" value="Submit Product" className="btn btn-primary p-2"/>
                <Link to="/" className="ms-5 btn-link">Home</Link>
            </form>
        </div>
    )
}

export default UpdateForm
