import ProductList from "./ProductList";
import "./ProductSection.css";

function ProductSection({ cart, addToCart, removeFromCart }) {
  return (
    <section className="product-section">
      <h1>Desserts</h1>

      <ProductList
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </section>
  )
}

export default ProductSection;