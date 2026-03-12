import { useState } from "react";
import ProductSection from './components/ProductSection';
import CartSection from "./components/CartSection";
import ConfirmModal from "./components/ConfirmModal";
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prevCart => {
      if (prevCart.find(item => item.name === product.name)) {
        return prevCart.map(item => 
          item.name === product.name
          ? {...item, quantity: item.quantity + 1}
          : item
        );
      }

      return [...prevCart, {...product, quantity: 1}];
    });
  }
  
  const removeFromCart = (name, amount=1) => {
    setCart(prevCart => {
      const prevProduct = prevCart.find(item => item.name === name);

      if (prevProduct) {
        if (prevProduct.quantity > amount) {
          return prevCart.map(item =>
            item.name === name
            ? {...item, quantity: item.quantity - amount}
            : item
          );
        }
        
        return prevCart.filter(item => item.name !== name);
      }

      return prevCart;
    });
  }

  return (
    <main>
      <ProductSection
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />

      <CartSection
        cart={cart}
        removeFromCart={removeFromCart}
        openModal={() => setIsModalOpen(true)}
      />

      {isModalOpen && (
        <ConfirmModal
          cart={cart}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </main>
  )
}

export default App
