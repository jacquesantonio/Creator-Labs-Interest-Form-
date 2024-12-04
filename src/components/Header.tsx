import { Beaker, ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Beaker className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl">Creator Labs</span>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#merch" className="text-sm font-medium text-gray-600 hover:text-purple-500 flex items-center space-x-1">
              <ShoppingCart className="h-4 w-4" />
              <span>Shop</span>
            </a>
            <a href="#waitlist" className="text-sm font-medium text-purple-600 hover:text-purple-500">
              Join Waitlist
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}