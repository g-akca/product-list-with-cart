import "./CartItem.css";

function CartItem({ name, quantity, price, removeFromCart }) {
  return (
    <div className="cart-item">
      <div className="item-details">
        <p className="item-name">{name}</p>

        <div>
          <span className="item-quantity">{quantity}x</span>
          <span className="item-price">@ ${price.toFixed(2)}</span>
          <span className="item-total">${(price * quantity).toFixed(2)}</span>
        </div>
      </div>

      <button type="button" className="remove-btn" onClick={removeFromCart}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
          <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
        </svg>
      </button>
    </div>
  )
}

export default CartItem;