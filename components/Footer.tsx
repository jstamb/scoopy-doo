import React from 'react';
import { LINKS } from '../constants';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img src={LINKS.logo} alt="Scoopy Doo Logo" className="h-16 mb-4 brightness-200 contrast-0 grayscale invert" />
            <p className="max-w-sm text-gray-300">
              Professional pet waste removal services in Whatcom County. Keeping your yards clean and your pets happy since 2025.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-action">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-action transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-action transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-action transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-action transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-action">Contact Us</h4>
            <p className="mb-2">Bellingham, WA</p>
            <p className="mb-2">
              <a href={LINKS.phoneHref} className="hover:text-action">{LINKS.phone}</a>
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-action"><Facebook size={20} /></a>
              <a href="#" className="hover:text-action"><Instagram size={20} /></a>
              <a href="#" className="hover:text-action"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Scoopy Doo Pet Waste Removal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};