import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { MerchSection } from './components/Merch/MerchSection';
import { WaitlistForm } from './components/WaitlistForm';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <MerchSection />
          <WaitlistForm />
        </main>
        <footer className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
            <p>© 2024 Creator Labs. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;