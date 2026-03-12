import orderConfirmedIcon from "/assets/images/icon-order-confirmed.svg";

function ConfirmModal({ closeModal, cart }) {
  return (
    <div className="confirm-modal">
      <div>
        <img src={orderConfirmedIcon} />
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
      </div>

      <div>

      </div>

      <button onClick={closeModal}>Start New Order</button>
    </div>
  )
}

export default ConfirmModal;