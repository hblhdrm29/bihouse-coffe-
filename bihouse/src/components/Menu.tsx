import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'All' | 'Coffee' | 'Non-Coffee' | 'Snacks';

interface MenuItem {
  id: number;
  name: string;
  price: string;
  category: Category;
  description: string;
  image: string;
}

const menuItems: MenuItem[] = [
  { id: 1, name: 'Espresso Romano', price: 'Rp 45.000', category: 'Coffee', description: 'Intense flavor with a twist of lemon.', image: '/menu_espresso_romano.png' },
  { id: 2, name: 'Caramel Macchiato', price: 'Rp 55.000', category: 'Coffee', description: 'Sweet caramel with steamed milk.', image: '/menu_caramel_macchiato.png' },
  { id: 3, name: 'Matcha Latte', price: 'Rp 60.000', category: 'Non-Coffee', description: 'Premium matcha green tea.', image: '/menu_matcha_latte.png' },
  { id: 4, name: 'Croissant', price: 'Rp 35.000', category: 'Snacks', description: 'Buttery, flaky, and fresh.', image: '/menu_croissant.png' },
  { id: 5, name: 'Cold Brew', price: 'Rp 50.000', category: 'Coffee', description: 'Steeped for 12 hours.', image: '/menu_cold_brew.png' },
  { id: 6, name: 'Berry Smoothie', price: 'Rp 65.000', category: 'Non-Coffee', description: 'Fresh berries blended to perfection.', image: '/menu_berry_smoothie.png' },
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredItems = menuItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section id="menu" className="py-20 bg-white dark:bg-[#231d16]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif font-bold text-espresso dark:text-cream mb-4">Our Menu</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {(['All', 'Coffee', 'Non-Coffee', 'Snacks'] as Category[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-espresso text-cream dark:bg-cream dark:text-espresso border-espresso dark:border-cream'
                    : 'border-gray-300 text-gray-500 hover:border-espresso hover:text-espresso dark:border-gray-700 dark:text-gray-400 dark:hover:text-cream'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-cream dark:bg-[#2C241B] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer group"
              >
                <div className="h-48 w-full relative overflow-hidden">
                     <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     />
                     {/* Overlay gradient */}
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-espresso dark:text-cream">{item.name}</h3>
                    <span className="text-gold font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{item.description}</p>
                  <button className="w-full py-2 border border-espresso/20 dark:border-cream/20 rounded-lg text-espresso dark:text-cream hover:bg-espresso hover:text-cream dark:hover:bg-cream dark:hover:text-espresso transition-colors">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
