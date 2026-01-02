import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream dark:bg-espresso transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
