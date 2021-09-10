import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
const ListProducts = ({ products, onDelete }) => {
    const history = useHistory()
    const handleClick = (e, id) => {
        e.preventDefault();
        history.push(`/products/view/${id}`)
        // history.goForward()

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
                <ul className="list-unstyled mt-5" key={i}>
                    <li  >{product.title}</li>
                    <li>${product.price}</li>
                    <li>{product.description}</li>
                    <li>
                        <div className="row">

                            <Link className="btn btn-link col me-3" to={`/products/view/${product._id}`}>View Product</Link>
                            <Link className="btn btn-link col ms-3" onClick={(e) => deleteProduct(e, product._id)} >Delete</Link>
                        </div>
                    </li>
                    <hr></hr>
                </ul>)
                : null}
        </>
    )
}

export default ListProducts
