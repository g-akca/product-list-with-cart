import removeItemIcon from "/assets/images/icon-remove-item.svg";
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
        <img src={removeItemIcon} />
      </button>
    </div>
  )
}

export default CartItem;