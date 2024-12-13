'use client';

import Link from 'next/link';
import { useUser } from '@/contexts/UserContext';
import { useState } from 'react';

export default function Header() {
  const { user } = useUser();
  const [showAuthOptions, setShowAuthOptions] = useState(false);

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="p-4 bg-gray-800 text-white">
      <nav className="flex justify-between items-center">
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/yield-aggregation">Yield Aggregation</Link></li>
          <li><Link href="/mev-protection">MEV Protection</Link></li>
          <li><Link href="/cross-chain-liquidity">Cross-Chain Liquidity</Link></li>
          <li><Link href="/mock-dex">Mock DEX</Link></li>
        </ul>

        <div className="relative">
          {user ? (
            <button className="px-4 py-2 rounded bg-blue-600">
              {user.walletAddress 
                ? shortenAddress(user.walletAddress)
                : user.username}
            </button>
          ) : (
            <>
              <button 
                onClick={() => setShowAuthOptions(!showAuthOptions)}
                className="px-4 py-2 rounded bg-blue-600"
              >
                Sign In
              </button>
              
              {showAuthOptions && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <a 
                    href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Sign in with GitHub
                  </a>
                  <button 
                    onClick={() => {/* Implement wallet connect */}}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Connect Wallet
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
