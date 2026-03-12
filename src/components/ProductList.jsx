import ProductItem from "./ProductItem";
import data from "../data/data.json";
import "./ProductList.css";

function ProductList({ cart, addToCart, removeFromCart }) {
  const getQuantity = (name) => {
    const existing = cart.find(item => item.name === name);
    return existing ? existing.quantity : 0;
  }

  return (
    <section className="product-list">
      {data.map((item) => (
        <ProductItem 
          key={item.name} 
          {...item}
          quantity={getQuantity(item.name)}
          addToCart={() => addToCart(item)}
          removeFromCart={() => removeFromCart(item.name)}
        />
      ))}
    </section>
  )
}

export default ProductList;