import { useEffect } from 'react'
import './Cart.css'

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function calculateTotal() {
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice = totalPrice + (cartItems[i].priceNum * cartItems[i].quantity);
    }
    return totalPrice;
  }

  function handleQtyChange(itemId, newQty) {
    if (newQty < 1) {
      return;
    }
    updateQuantity(itemId, newQty);
  }

  function handleRemove(itemId, itemName) {
    let userWantsToRemove = confirm(`Remove ${itemName} from cart?`);
    if (userWantsToRemove === true) {
      removeFromCart(itemId);
    }
  }


  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <section className="cart-hero">
          <div className="cart-hero-content">
            <h1>Shopping Cart</h1>
          </div>
        </section>
        
        <section className="cart-section">
          <div className="cart-container">
            <div className="empty-cart">
              <h2>Your cart is empty</h2>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const cartItemsDisplay = [];
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    
    const cartItemElement = (
      <div key={item.id} className="cart-item">
        <div className="cart-item-image">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="cart-item-info">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <div className="item-price">{item.price} each</div>
        </div>
        <div className="cart-item-controls">
          <div className="quantity-controls">
            <button 
              className="qty-btn"
              onClick={() => handleQtyChange(item.id, item.quantity - 1)}
            >
              -
            </button>
            <span className="quantity">{item.quantity}</span>
            <button 
              className="qty-btn"
              onClick={() => handleQtyChange(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
          <div className="item-total">
            ${(item.priceNum * item.quantity).toFixed(2)}
          </div>
          <button 
            className="remove-btn"
            onClick={() => handleRemove(item.id, item.name)}
          >
            Remove
          </button>
        </div>
      </div>
    );
    
    cartItemsDisplay.push(cartItemElement);
  }

  const subtotal = calculateTotal();

  return (
    <div className="cart-page">
      <section className="cart-hero">
        <div className="cart-hero-content">
          <h1>Shopping Cart</h1>
        </div>
      </section>
      
      <section className="cart-section">
        <div className="cart-container">
          <div className="cart-items">
            {cartItemsDisplay}
          </div>
          
          <div className="cart-summary">
            <div className="summary-content">
              <h3>Order Summary</h3>
              <div className="summary-line">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-line">
              </div>
              <div className="summary-line total-line">
                <span>Total:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart