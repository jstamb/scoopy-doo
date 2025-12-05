import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { LINKS } from '../constants';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f9f7f2] shadow-sm">
      {/* Top Bar for Phone */}
      <div className="bg-primary text-white py-2 px-4 text-center md:hidden">
        <a href={LINKS.phoneHref} className="flex items-center justify-center gap-2 font-bold">
          <Phone size={16} />
          {LINKS.phone}
        </a>
      </div>

      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#">
            <img 
              src={LINKS.logo} 
              alt="Scoopy Doo Logo" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-6 font-semibold text-primary">
            <a href="#residential" className="hover:text-action transition-colors">Residential</a>
            <a href="#commercial" className="hover:text-action transition-colors">Commercial</a>
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-action">
              <span>Locations</span>
              <ChevronDown size={16} />
              {/* Simple dropdown simulation */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block border border-gray-100">
                <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Bellingham</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Lynden</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700">Ferndale</a>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-6">
            <a href={LINKS.phoneHref} className="text-2xl font-bold text-[#4a9ea6] hover:text-primary transition-colors">
              {LINKS.phone}
            </a>
            <Button>Subscribe Now</Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            <a href="#residential" className="font-semibold text-primary text-lg" onClick={() => setIsMobileMenuOpen(false)}>Residential</a>
            <a href="#commercial" className="font-semibold text-primary text-lg" onClick={() => setIsMobileMenuOpen(false)}>Commercial</a>
            <a href="#locations" className="font-semibold text-primary text-lg" onClick={() => setIsMobileMenuOpen(false)}>Locations</a>
            <div className="border-t border-gray-100 pt-4">
               <Button className="w-full text-center">Subscribe Now</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};