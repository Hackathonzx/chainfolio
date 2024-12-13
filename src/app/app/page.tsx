'use client';



import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    async function detectLocationAndRedirect() {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        const countryCode = data.country_code.toLowerCase();
        const locale = countryCode === 'fr' ? 'fr' : 'en'; // Add more conditions as needed
        router.push(`/${locale}`);
      } catch (error) {
        console.error('Error detecting location:', error);
        router.push('/en'); // Default to English if detection fails
      }
    }

    detectLocationAndRedirect();
  }, [router]);

  return null; // Render nothing while redirecting
}
