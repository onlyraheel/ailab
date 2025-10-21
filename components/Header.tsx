import React from 'react';
import { User } from '../types';

interface HeaderProps {
    user: User | null;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const navLinks = [
    { name: 'Home', href: 'https://ailab.360lynx.com' },
    { name: 'Services', href: 'https://360lynx.com/services/' },
    { name: 'Pricing', href: 'https://360lynx.com/services/' },
    { name: 'Blog', href: 'https://360lynx.com/blog/' },
    { name: 'Contact Us', href: 'https://360lynx.com/contact-us/' },
  ];

  return (
    <header className="bg-lynx-gray shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="https://ailab.360lynx.com" className="text-2xl font-bold text-white">
              360<span className="text-lynx-blue">LYNX</span> <span className="font-light">AiLab</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
             <a
                href="#"
                className="font-bold text-lynx-blue border-b-2 border-lynx-blue"
              >
                AI Lab
              </a>
          </nav>
          <div className="flex items-center">
            {user ? (
                <div className="flex items-center space-x-4">
                    <span className="text-gray-300 hidden sm:block">Welcome, {user.name.split(' ')[0]}</span>
                    <button onClick={onLogout} className="bg-lynx-blue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300">
                        Logout
                    </button>
                </div>
            ) : (
                null
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;