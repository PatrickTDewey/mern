import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router';
import axios from 'axios';
const Detail = () => {
    const [product, setProduct] = useState()
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/view/" + id)
            .then(res => setProduct(res.data))
    }, [id])
    const clickHandler = (e) => {
        e.preventDefault()
        history.goBack()
    }
    const updateClick = (e) => {
        e.preventDefault()
        history.push(`/products/update/${id}`)
        history.goForward()
    }
    return (
        <div>
            {
                product ?
                    <div className="product">
                        <p>Title: {product.title}</p>
                        <p>Price: ${product.price}</p>
                        <p>Description: {product.description}</p>
                        <div className="row">

                            <button className="btn btn-primary col me-3" onClick={clickHandler}>Go back</button>
                            <button className="btn btn-success col ms-3" onClick={updateClick}>Update</button>
                        </div>
                    </div> : null
            }
        </div>
    )
}

export default Detail