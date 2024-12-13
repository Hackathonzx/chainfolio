'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUser } from '@/contexts/UserContext';

export default function GitHubLogin() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser } = useUser();

  useEffect(() => {
    const code = searchParams.get('code');

    if (!code) {
      // If no code is present, redirect to home page
      router.push('/');
      return;
    }

    const fetchGitHubUser = async () => {
      try {
        // Simulate fetching user data from GitHub API
        const response = await fetch('https://api.github.com/users/octocat');
        const data = await response.json();
        setUser({ username: data.login });
        router.push('/app');
      } catch (error) {
        console.error('Failed to fetch user data', error);
        router.push('/');
      }
    };

    fetchGitHubUser();
  }, [router, searchParams, setUser]);

  return <div>Logging in...</div>;
}