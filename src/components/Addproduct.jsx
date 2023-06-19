import React, { useState } from 'react';

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({ name: '', price: 0 });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const addProduct = () => {
    fetch('http://localhost:4000/productos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Agregar Producto</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <button type="button" onClick={addProduct}>
          Agregar
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
