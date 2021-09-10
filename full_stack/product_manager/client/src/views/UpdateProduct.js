import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductForm from '../components/ProductForm'

const UpdateProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: ''
    })
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [id])

    const onUpdate = (form) => {
        const {title, price, description} = form
        axios.put(`http://localhost:8000/api/products/update/${id}`, {title, price, description})
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update Product</h1>

            {loaded && <ProductForm onSubmit={onUpdate} initialData={product} />}

        </div>
    )
}

export default UpdateProduct
