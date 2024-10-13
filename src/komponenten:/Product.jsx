import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div style={styles.product}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Pris: {product.price} kr</p>
      <button onClick={() => addToCart(product)}>Lägg till i kundvagn</button>
    </div>
  );
};

const styles = {
  product: {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    textAlign: 'center'
  }
};

export default Product;