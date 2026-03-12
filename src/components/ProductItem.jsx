import addToCartIcon from "/assets/images/icon-add-to-cart.svg";
import "./ProductItem.css";

function ProductItem({ image, name, category, price }) {
  return (
    <section className="product-item">
      <picture className="product-img">
        <source media="(min-width: 1440px)" srcSet={image.desktop} />
        <source media="(min-width: 768px)" srcSet={image.tablet} />
        <img src={image.mobile} alt={name} />
      </picture>

      <button type="button" className="add-to-cart-btn">
        <img src={addToCartIcon} />
        <p>Add to Cart</p>
      </button>

      <div className="product-details">
        <p className="category">{category}</p>
        <h3 className="name">{name}</h3>
        <p className="price">${price.toFixed(2)}</p>
      </div>
    </section>
  )
}

export default ProductItem;