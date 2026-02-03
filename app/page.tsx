import { Home } from './components/Home';
import { HowIHelp } from './components/HowIHelp';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { PageWrapper } from './components/PageWrapper';

export default function Page() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-bg text-fg">
        <Navigation />
        <main id="main-content">
          <Home />
          <HowIHelp />
          <Work />
        </main>
        <Footer />
      </div>
    </PageWrapper>
  );
}
