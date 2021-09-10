import axios from 'axios'
import { useHistory } from 'react-router-dom'
const ListProducts = ({ products, onDelete }) => {
    const history = useHistory()
    const handleClick = (e, id) => {
        e.preventDefault();
        history.push(`/products/view/${id}`)
        history.goForward()

    }
    const deleteProduct = (e,id) => {
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        onDelete(id)
    }
    return (
        <>
            {products ? products.map((product, i) =>
                <ul className="list-unstyled" key={i}>
                    <li  >{product.title}</li>
                    <li>${product.price}</li>
                    <li>{product.description}</li>
                    <li>
                        <div className="row">

                            <button className="btn btn-success col me-3" onClick={(e) => handleClick(e, product._id)}>View Product</button>
                            <button className="btn btn-danger col ms-3" onClick={(e) => deleteProduct(e, product._id)} >Delete</button>
                        </div>
                    </li>
                    <hr></hr>
                </ul>)
                : null}
        </>
    )
}

export default ListProducts
