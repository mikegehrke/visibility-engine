import NotFoundContent from '@/components/public/NotFoundContent';
import Header from '@/components/public/Header';
import Footer from '@/components/public/Footer';
import Providers from '@/components/Providers';

export default function NotFound() {
  return (
    <Providers>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 relative">
          <NotFoundContent />
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
