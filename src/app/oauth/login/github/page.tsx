'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function GitHubLogin() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (!code) {
      router.push('/');
      return;
    }

    const handleGitHubLogin = async () => {
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
          throw new Error('Login failed');
        }
      } catch (error) {
        console.error(error);
        router.push('/');
      }
    };

    handleGitHubLogin();
  }, [code, router]);

  return <div>Processing login...</div>;
}
