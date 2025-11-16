import { Home } from './components/Home';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navigation />
      <Home />
      <Work />
      <Footer />
    </div>
  );
}

