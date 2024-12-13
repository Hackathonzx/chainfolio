import Image from "next/image";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome to ChainFolio</h1>
        <p>Overview of the application and its features.</p>
      </main>
      <Footer />
    </>
  );
}

