import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <nav className="bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">CX</span>
            </div>
            <span className="text-white font-medium text-lg">CODERUSH XP</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
            <a href="#ecosystems" className="text-white/90 hover:text-white transition-colors">Ecosystems</a>
            <a href="#process" className="text-white/90 hover:text-white transition-colors">Process</a>
            <a href="#why-choose-us" className="text-white/90 hover:text-white transition-colors">Why Us</a>
            <a href="#credits" className="text-white/90 hover:text-white transition-colors">Credits</a>
          </div>

          <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-colors">
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;