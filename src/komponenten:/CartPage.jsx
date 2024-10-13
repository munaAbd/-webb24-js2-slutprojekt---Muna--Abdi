import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Kundvagn</h1>
      {cartItems.length === 0 ? (
        <p>Din kundvagn är tom.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={styles.item}>
              <span>{item.name}</span>
              <span>{item.price} kr</span>
              <button onClick={() => removeFromCart(index)}>Ta bort</button>
            </div>
          ))}
          <h2>Total: {total} kr</h2>
          <button onClick={() => alert('Köp genomfört!')}>Köp</button>
          <button onClick={() => removeFromCart()}>Töm kundvagn</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0'
  }
};

export default Cart;