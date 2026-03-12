import ProductItem from "./ProductItem";
import data from "../data/data.json";
import "./ProductList.css";

function ProductList() {
  return (
    <section className="product-list">
      {data.map((item, index) => (
        <ProductItem key={index} image={item.image} name={item.name} category={item.category} price={item.price} />
      ))}
    </section>
  )
}

export default ProductList;