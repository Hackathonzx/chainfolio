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
        router.push('/'); // Redirect to the homepage
      } catch (error) {
        console.error('Error detecting location:', error);
        router.push('/'); // Default to homepage if detection fails
      }
    }

    detectLocationAndRedirect();
  }, [router]);

  return null; // Render nothing while redirecting
}
