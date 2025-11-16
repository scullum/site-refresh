import { Home } from './components/Home';
import { About } from './components/About';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navigation />
      <Home />
      <About />
      <Services />
      <Work />
      <Footer />
    </div>
  );
}

