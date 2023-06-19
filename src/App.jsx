import { useState } from 'react'
import ProductsList from './components/ProductsList';
import AddProduct from './components/Addproduct';
import './App.css'

function App() {
  
  return (
    <>
      <ProductsList />
      <AddProduct />
    </>
  )
}

export default App
