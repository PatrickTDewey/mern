import React from 'react'
import { useParams } from 'react-router-dom'
import UpdateForm from '../components/UpdateForm'

const UpdateProduct = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>Update Product</h1>
            <UpdateForm id={id}/>

        </div>
    )
}

export default UpdateProduct
