import orderConfirmedIcon from "/assets/images/icon-order-confirmed.svg";
import "./ConfirmModal.css";

function ConfirmModal({ closeModal, cart }) {
  const totalPrice = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-heading">
          <img src={orderConfirmedIcon} />
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </div>

        <div className="modal-cart">
          <div>
            {cart.map(item => (
              <div className="cart-item" key={item.name}>
                <div>
                  <img src={item.image.thumbnail} alt={item.name} />

                  <div className="item-details">
                    <p className="item-name">{item.name}</p>

                    <div>
                      <span className="item-quantity">{item.quantity}x</span>
                      <span className="item-price">@ ${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="total-div">
            <p>Order Total</p>
            <p className="total">${totalPrice.toFixed(2)}</p>
          </div>
        </div>

        <button type="button" className="confirm-btn" onClick={closeModal}>Start New Order</button>
      </div>
    </div>
  )
}

export default ConfirmModal;