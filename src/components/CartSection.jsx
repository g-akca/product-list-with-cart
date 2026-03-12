import emptyCartIcon from "/assets/images/illustration-empty-cart.svg";
import carbonNeutralIcon from "/assets/images/icon-carbon-neutral.svg";
import CartItem from "./CartItem";
import "./CartSection.css";

function CartSection({ cart, removeFromCart, openModal, isModalOpen }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  return (
    <section className="cart-section">
      <h2>Your Cart <span aria-live="polite">({totalItems})</span></h2>

      {totalItems === 0 ? (
        <div className="cart-empty">
          <img src={emptyCartIcon} className="empty-cart-img" alt="Empty shop cart icon" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <div className="cart-filled">
          <div className="cart-list" aria-live="polite">
            {cart.map(item => (
              <CartItem 
                key={item.name} 
                {...item}
                removeFromCart={() => removeFromCart(item.name, item.quantity)}
              />
            ))}
          </div>

          <div className="total-div">
            <p>Order Total</p>
            <p className="total">${totalPrice.toFixed(2)}</p>
          </div>

          <div className="carbon-neutral">
            <img src={carbonNeutralIcon} alt="A green tree icon" />
            <p>This is a <span>carbon-neutral</span> delivery</p>
          </div>

          <button 
            type="button" 
            className="confirm-btn" 
            onClick={openModal}
            aria-expanded={isModalOpen}
            aria-controls="confirm-modal"
          >
            Confirm Order
          </button>
        </div>
      )}
    </section>
  )
}

export default CartSection;