import emptyCartIcon from "/assets/images/illustration-empty-cart.svg";
import "./CartSection.css";

function CartSection() {
  return (
    <section className="cart-section">
      <h2>Your Cart (0)</h2>

      <div className="cart-main">
        <img src={emptyCartIcon} className="empty-cart-img" />
        <p>Your added items will appear here</p>
      </div>
    </section>
  )
}

export default CartSection;