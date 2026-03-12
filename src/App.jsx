import { useState } from "react";
import ProductSection from './components/ProductSection';
import CartSection from "./components/CartSection";
import ConfirmModal from "./components/ConfirmModal";
import { useCart } from "./context/CartContext";
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { clearCart } = useCart();

  function closeModal() {
    setIsModalOpen(false);
    clearCart();
  }

  return (
    <main>
      <ProductSection />

      <CartSection
        openModal={() => setIsModalOpen(true)}
        isModalOpen={isModalOpen}
      />

      {isModalOpen && (
        <ConfirmModal closeModal={closeModal} />
      )}
    </main>
  )
}

export default App;