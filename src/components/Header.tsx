import { useState } from 'react';
import { Music, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-pink-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Music className="w-6 h-6 text-pink-600" />
            <span className="text-pink-800">Kalashiksha</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-pink-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('courses')} className="text-gray-700 hover:text-pink-600 transition-colors">
              Courses
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-pink-600 transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-pink-600 transition-colors">
              Articles
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-pink-600 transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection('pricing')} className="bg-pink-600 hover:bg-pink-700">
              Book Demo Class
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-pink-600 transition-colors text-left">
              About
            </button>
            <button onClick={() => scrollToSection('courses')} className="text-gray-700 hover:text-pink-600 transition-colors text-left">
              Courses
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-pink-600 transition-colors text-left">
              Pricing
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-pink-600 transition-colors text-left">
              Articles
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-pink-600 transition-colors text-left">
              Contact
            </button>
            <Button onClick={() => scrollToSection('pricing')} className="bg-pink-600 hover:bg-pink-700 w-full">
              Book Demo Class
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
