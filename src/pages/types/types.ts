export type Page = 'home' | 'p2p' | 'buy' | 'sell' | 'airdrop' | 'profile';

export interface PageProps {
  onNavigate: (page: Page) => void;
}