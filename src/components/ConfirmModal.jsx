import orderConfirmedIcon from "/assets/images/icon-order-confirmed.svg";

function ConfirmModal({ closeModal, cart }) {
  const totalPrice = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  return (
    <div className="confirm-modal">
      <div className="modal-heading">
        <img src={orderConfirmedIcon} />
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
      </div>

      <div className="modal-cart">
        <div>
          {cart.map(item => (
            <div className="cart-item">
              <img src={item.image.thumbnail} />

              <div className="item-details">
                <p className="item-name">{item.name}</p>

                <div>
                  <span className="item-quantity">{item.quantity}x</span>
                  <span className="item-price">@ ${item.price.toFixed(2)}</span>
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

      <button onClick={closeModal}>Start New Order</button>
    </div>
  )
}

export default ConfirmModal;