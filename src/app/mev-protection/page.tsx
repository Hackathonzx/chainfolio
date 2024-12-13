
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MEVProtection from '../../components/MEVProtection';

export default function MEVProtectionPage() {
  return (
    <>
      <Header />
      <main>
        <h1>MEV Protection</h1>
        <MEVProtection />
      </main>
      <Footer />
    </>
  );
}