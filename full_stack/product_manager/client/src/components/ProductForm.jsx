import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [form, setForm] = useState("");

    const onSubmitHandler = e => {
        // prevent default behavior of the submit
        e.preventDefault();
        // make a post request to create a new user
        axios.post("http://localhost:8000/api/products/new", { title: form.title, price: form.price, description: form.description })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div className="form-wrapper">
            <h2>Add Product</h2>
            <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input  className="form-control" type="text" name="title" id="title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price:</label>
                    <input className="form-control"type="number" name="price" id="price" onChange={(e) => setForm({ ...form, price: e.target.value })} />
                </div>
                <div className="mb-3" style={{marginTop: '10px'}}>
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea className="form-control" cols="20" rows="2" id="description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
                </div>
                <input type="submit" value="Submit Product" className="btn btn-primary p-2"/>
            </form>
        </div>
    )
}

export default ProductForm
