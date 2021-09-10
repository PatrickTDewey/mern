import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const ProductForm = (props) => {
    const { initialData } = props
    const [form, setForm] = useState(initialData ? initialData : { 
        title: '',
        price: 0,
        description: ''
    });
    
    const {onSubmit} = props
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmit(form)
        setForm({
            title: "",
            price: 0,
            description: "",
        })
    }
    return (
        <div className="form-wrapper">
            <h2>Add Product</h2>
            <form onSubmit={onSubmitHandler}>
                <div className="form-floating mb-3">
                    <input className="form-control" type="text" placeholder="title" name="title" id="title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
                    <label htmlFor="title" >Title:</label>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" type="number" step="0.01" placeholder="price" name="price" id="price" onChange={(e) => setForm({ ...form, price: e.target.value })} value={form.price} />
                    <label htmlFor="price" className="form-label">Price:</label>
                </div>
                <div className="form-floating mb-3" style={{ marginTop: '10px' }}>
                    <textarea className="form-control" cols="20" rows="2" placeholder="description" value={form.description} id="description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
                    <label htmlFor="description" className="form-label">Description:</label>
                </div>
                <input type="submit" value="Submit Product" className="btn btn-primary p-2" />
                <Link className="btn btn-link" to="/">Home</Link>
            </form>
        </div>
    )
}

export default ProductForm
