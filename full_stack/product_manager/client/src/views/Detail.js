import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory  } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';
const Detail = () => {
    const [product, setProduct] = useState()
    const { id } = useParams()
    const history = useHistory();
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [id])
    
    return (
        <div>
            {
                product ?
                    <div className="product">
                        <p>Title: {product.title}</p>
                        <p>Price: ${product.price}</p>
                        <p>Description: {product.description}</p>
                        <div className="row">

                            <Link className="btn btn-link col me-3" to={`/`}>Home</Link>
                            <Link className="btn btn-link col ms-3" to={`/products/update/${product._id}`}>Update</Link>
                            <DeleteButton productID={product._id} successCallback={() => history.push('/')} classProp="btn btn-link col"/>
                        </div>
                    </div> : null
            }
        </div>
    )
}

export default Detail