import ProductList from "./ProductList";
import "./ProductSection.css";

function ProductSection() {
  return (
    <section className="product-section">
      <h1>Desserts</h1>

      <ProductList/>
    </section>
  )
}

export default ProductSection;