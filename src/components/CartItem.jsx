import removeItemIcon from "/assets/images/icon-remove-item.svg";

function CartItem({ name, quantity, price, removeFromCart }) {
  return (
    <div className="cart-item">
      <div className="item-details">
        <p className="item-name">{name}</p>

        <div>
          <span className="item-quantity">{quantity}x</span>
          <span className="item-price">@ {price}</span>
          <span className="item-total">${price * quantity}</span>
        </div>
      </div>

      <button type="button" className="remove-btn" onClick={removeFromCart}>
        <img src={removeItemIcon} />
      </button>
    </div>
  )
}

export default CartItem;