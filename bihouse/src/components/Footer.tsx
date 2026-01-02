import React from 'react';
import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso text-cream pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8 text-gold" />
              <span className="text-2xl font-serif font-bold">BIHOUSE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Menciptakan momen kebahagiaan, satu cangkir dalam satu waktu. Bergabunglah dengan kami untuk paduan sempurna antara suasana dan rasa.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-gold">Jelajahi</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu Kami</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-gold">Kunjungi Kami</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Coffee Lane</li>
              <li>Brew City, BC 90210</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@bihouse.com</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-gold">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-espresso transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-espresso transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-espresso transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} BIHOUSE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
