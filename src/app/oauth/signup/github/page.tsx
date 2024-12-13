'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function GitHubSignup() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (!code) {
      router.push('/');
      return;
    }

    // For MVP, we're using the same endpoint as login
    const handleGitHubSignup = async () => {
      try {
        const response = await fetch('/api/auth/github', {
          method: 'POST',
          body: JSON.stringify({ code }),
        });
        
        if (response.ok) {
          const userData = await response.json();
          localStorage.setItem('user', JSON.stringify(userData));
          router.push('/app');
        } else {
          throw new Error('Signup failed');
        }
      } catch (error) {
        console.error(error);
        router.push('/');
      }
    };

    handleGitHubSignup();
  }, [code, router]);

  return <div>Processing signup...</div>;
}
