'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/contexts/UserContext';

export default function GitHubSignup() {
  const router = useRouter();
  const { setUser } = useUser();

  useEffect(() => {
    // Simulate authentication by setting a dummy user
    const dummyUser = {
      username: 'GitHubUser',
    };
    setUser(dummyUser);
    router.push('/app');
  }, [router, setUser]);

  return <div>Signing up...</div>;
}
