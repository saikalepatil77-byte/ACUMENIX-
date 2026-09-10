import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import Services from './components/Services';
import About from './components/About';
import Stats from './components/Stats';
import Journal from './components/Journal';
import Explorations from './components/Explorations';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scroll during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      {/* Main Site */}
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.5s ease',
          pointerEvents: loading ? 'none' : 'auto',
        }}
      >
        <Navbar />

        <main>
          {/* Section 1: Hero */}
          <Hero />

          {/* Section 2: Selected Work */}
          <SelectedWork />

          {/* Section 3: Services */}
          <Services />

          {/* Section 4: Stats */}
          <Stats />

          {/* Section 5: About */}
          <About />

          {/* Section 6: Journal */}
          <Journal />

          {/* Section 7: Explorations */}
          <Explorations />

          {/* Section 8: Contact */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
