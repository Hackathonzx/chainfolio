import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/yield-aggregation">Yield Aggregation</Link></li>
          <li><Link href="/mev-protection">MEV Protection</Link></li>
          <li><Link href="/cross-chain-liquidity">Cross-Chain Liquidity</Link></li>
          <li><Link href="/mock-dex">Mock DEX</Link></li>
        </ul>
      </nav>
    </header>
  );
}
