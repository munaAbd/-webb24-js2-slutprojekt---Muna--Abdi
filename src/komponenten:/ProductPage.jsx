import React, { useState, useEffect } from 'react';
import Product from './Product';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

const ProductPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  // Hämta produkter från Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const productsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsArray);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Produkter</h1>
      <div style={styles.products}>
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  products: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

export default ProductPage;