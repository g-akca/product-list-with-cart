import addToCartIcon from "/assets/images/icon-add-to-cart.svg";
import "./ProductItem.css";

function ProductItem({ image, name, category, price, quantity, addToCart, removeFromCart }) {
  return (
    <section className={`product-item ${quantity > 0 ? "in-cart" : ""}`}>
      <picture className="product-img">
        <source media="(min-width: 1440px)" srcSet={image.desktop} />
        <source media="(min-width: 768px)" srcSet={image.tablet} />
        <img src={image.mobile} alt={name} />
      </picture>

      {quantity === 0 ? (
        <button type="button" className="add-to-cart-btn" onClick={addToCart}>
          <img src={addToCartIcon} alt="Cart icon" />
          <p>Add to Cart</p>
        </button>
      ) : (
        <div className="cart-controls">
          <button type="button" className="control-btn" onClick={removeFromCart}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
              <path d="M0 .375h10v1.25H0V.375Z"/>
            </svg>
          </button>
          <span>{quantity}</span>
          <button type="button" className="control-btn" onClick={addToCart}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
              <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
            </svg>
          </button>
        </div>
      )}

      <div className="product-details">
        <p className="category">{category}</p>
        <h3 className="name">{name}</h3>
        <p className="price">${price.toFixed(2)}</p>
      </div>
    </section>
  )
}

export default ProductItem;