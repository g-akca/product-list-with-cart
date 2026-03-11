import productImg from "/assets/images/image-waffle-mobile.jpg";
import addToCartIcon from "/assets/images/icon-add-to-cart.svg";
import "./ProductItem.css";

function ProductItem() {
  return (
    <section className="product-item">
      <img src={productImg} className="product-img" />

      <button type="button" className="add-to-cart-btn">
        <img src={addToCartIcon} />
        <p>Add to Cart</p>
      </button>

      <div className="product-details">
        <p className="category">Waffle</p>
        <h3 className="name">Waffle with Berries</h3>
        <p className="price">$6.50</p>
      </div>
    </section>
  )
}

export default ProductItem;