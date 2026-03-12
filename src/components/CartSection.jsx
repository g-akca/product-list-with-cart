import emptyCartIcon from "/assets/images/illustration-empty-cart.svg";
import carbonNeutralIcon from "/assets/images/icon-carbon-neutral.svg";
import CartItem from "./CartItem";
import "./CartSection.css";

function CartSection({ cart, removeFromCart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  return (
    <section className="cart-section">
      <h2>Your Cart ({totalItems})</h2>

      {totalItems === 0 ? (
        <div className="cart-empty">
          <img src={emptyCartIcon} className="empty-cart-img" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <div className="cart-filled">
          {cart.map(item => (
            <CartItem 
              key={item.name} 
              {...item}
              removeFromCart={() => removeFromCart(item.name, item.quantity)}
            />
          ))}

          <div className="total-div">
            <p>Order Total</p>
            <p className="total">{totalPrice}</p>
          </div>

          <div className="carbon-neutral">
            <img src={carbonNeutralIcon} />
            <p>This is a <strong>carbon-neutral</strong> delivery</p>
          </div>

          <button type="button">Confirm Order</button>
        </div>
      )}
    </section>
  )
}

export default CartSection;