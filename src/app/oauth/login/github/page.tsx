'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/contexts/UserContext';

export default function GitHubLogin() {
  const router = useRouter();
  const { setUser } = useUser();

  useEffect(() => {
    // Simulate authentication by setting a dummy user
    const dummyUser = {
        // Simulate fetching user data from GitHub API
        const response = await fetch('https://api.github.com/users/octocat');
        const data = await response.json();
        setUser({ username: data.login });
        router.push('/app');
      } catch (error) {
        console.error('Failed to fetch user data', error);
        router.push('/');
      }    };    fetchGitHubUser();  }, [router, setUser]);  return <div>Logging in...</div>;}