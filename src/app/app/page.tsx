'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // ...existing code...
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link href="/deposit">Deposit ERC-20 Tokens</Link>
        </li>
        <li>
          <Link href="/yield-optimization">View Yield Optimization Results</Link>
        </li>
        <li>
          <Link href="/mev-protection">Execute Secure Transactions with MEV Protection</Link>
        </li>
        <li>
          <Link href="/cross-chain-liquidity">Bridge Assets Across Chains</Link>
        </li>
        <li>
          <Link href="/mock-dex">Mock DEX Interface for Token Swaps</Link>
        </li>
      </ul>
    </div>
  );
}
