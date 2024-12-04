import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { CartDrawer } from '../Cart/CartDrawer';
import { useCart } from '../../context/CartContext';
import { MerchBg } from '../Background/Patterns';

const products = [
  {
    id: '1',
    name: 'Creator Labs Classic Hoodie',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
    description: 'Premium cotton-blend hoodie with embroidered logo. Features a comfortable fit and our signature design.',
  },
  {
    id: '2',
    name: 'Creator Labs Snapback',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    description: 'Adjustable snapback cap with embroidered logo. One size fits all with premium stitching.',
  },
  {
    id: '3',
    name: 'Creator Labs Sticker Pack',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=800&q=80',
    description: 'Set of high-quality vinyl stickers featuring Creator Labs designs. Perfect for laptops and water bottles.',
  }
];

export function MerchSection() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart, itemCount } = useCart();

  return (
    <div id="merch" className="relative bg-gray-50 py-20">
      <MerchBg />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Creator Labs Gear</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Rock the Creator Labs style with our premium merchandise. Each piece is crafted with quality materials and features our iconic design.
          </p>
        </div>
        
        {itemCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
          >
            <span>Cart</span>
            <span className="bg-white text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
              {itemCount}
            </span>
          </button>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}