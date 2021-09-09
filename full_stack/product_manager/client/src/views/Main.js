import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
const Main = () => {
  const [products, setProducts] = useState()
  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log('Main Error', err))
  }, []);
  return (
    <div className="products">
      <h1>Products:</h1>
      {products?products.map((product, i) => <ul className="list-unstyled"key={i}><li  >{product.title}</li><li>{product.price}</li><li>{product.description}</li><hr></hr></ul>): null}
      <ProductForm />
    </div>
  )
}
export default Main