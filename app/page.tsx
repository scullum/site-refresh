import { Home } from './components/Home';
import { HowIHelp } from './components/HowIHelp';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { PageTransition } from './components/PageTransition';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navigation />
      <PageTransition>
        <Home />
        <HowIHelp />
        <Work />
        <Footer />
      </PageTransition>
    </div>
  );
}

