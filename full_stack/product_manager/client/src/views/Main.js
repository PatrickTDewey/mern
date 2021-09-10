import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ListProducts from '../components/ListProducts'
const Main = () => {
  const [products, setProducts] = useState();
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => {
        setProducts(res.data)
        setLoaded(true)
      })
      .catch(err => console.log('Main Error', err))
  }, []);
  const onAdd = (data) => {
    setProducts([...products, data])
  }

  const onDelete = (id) => {
    setProducts([...products].filter(item => item._id !== id ))
  }
  return (
    <div className="products">
      <h1>Products:</h1>
      <ProductForm onAdd={onAdd}/>
      {loaded && <ListProducts onDelete={onDelete} products={products}/>}
    </div>
  )
}
export default Main