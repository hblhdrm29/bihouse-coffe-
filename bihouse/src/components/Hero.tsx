import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-espresso/5 dark:bg-cream/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight"
          >
            Nikmati Setiap <br/>
            <span className="text-gold italic">Tegukan Sempurna</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0"
          >
            BIHOUSE menyajikan racikan kopi terbaik di ruang yang dirancang untuk kenyamanan dan inspirasi. 
            Biji kopi premium, dipanggang dengan ahli untuk ritual harian Anda.
          </motion.p>

          <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="flex gap-4 justify-center md:justify-start"
          >
            <button className="px-8 py-3 bg-espresso text-cream dark:bg-cream dark:text-espresso font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
              Pesan Sekarang
            </button>
            <button className="px-8 py-3 border border-espresso dark:border-cream text-espresso dark:text-cream font-medium rounded-full hover:bg-espresso hover:text-cream dark:hover:bg-cream dark:hover:text-espresso transition-all duration-300">
              Lihat Menu
            </button>
          </motion.div>
        </div>

        {/* Image/Visual Content */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
             <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="relative z-10"
             >
                {/* Placeholder or proper image */}
                {/* In a real scenario, we'd use the generated image here. Assuming it's in public/assets or we import it.
                    For now, I'll use a placeholder div that looks like a cup or an illustrative element 
                    until the image generation is confirmed and moved. */}
                <div className="w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-to-br from-espresso/80 to-black/80 rounded-full flex items-center justify-center text-cream shadow-2xl relative overflow-hidden group">
                     <span className="text-9xl opacity-20 group-hover:opacity-40 transition-opacity duration-700">☕</span>
                     <div className="absolute inset-0 bg-[url('/coffee_hero_cup.png')] bg-cover bg-center mix-blend-overlay"></div>
                </div>
             </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
