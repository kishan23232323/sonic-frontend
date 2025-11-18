import { useState } from 'react';
import HomePage from './pages/HomePage';
import BuyPage from './pages/BuyPage';
import SellPage from './pages/SellPage';
import AirdropPage from './pages/AirDrop';
import ProfilePage from './pages/Profile';
import RegisterAsAAgent from './pages/RegisterAsAAgent';

type Page = 'home' | 'buy' | 'sell' | 'airdrop' | 'profile' | 'register-agent';

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    if (['home', 'buy', 'sell', 'airdrop', 'profile', 'register-agent'].includes(page)) {
      setCurrentPage(page as Page);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'buy':
        return <BuyPage onNavigate={handleNavigate} />;
      case 'sell':
        return <SellPage onNavigate={handleNavigate} />;
      case 'airdrop':
        return <AirdropPage onNavigate={handleNavigate} />;
      case 'profile':
        return <ProfilePage onNavigate={handleNavigate} />;
      case 'register-agent':
        return <RegisterAsAAgent onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return renderPage();
};

export default App;