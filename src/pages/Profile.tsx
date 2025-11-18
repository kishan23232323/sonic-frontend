import { Home, ArrowLeftRight, Star, User, Info, ArrowLeft } from 'lucide-react';

interface ProfilePageProps {
  onNavigate: (page: 'home' | 'buy' | 'sell' | 'airdrop' | 'profile' | 'register-agent') => void;
}

export default function ProfilePage({ onNavigate }: ProfilePageProps) {
  const trades = [
    { id: 1, type: 'BUY', amount: '31 BTC', status: 'COMPLETED', icon: '✓', color: 'text-cyan-400' },
    { id: 2, type: 'BUY', amount: '0 BTC', status: 'COMPLETED', icon: '✓', color: 'text-cyan-400' },
    { id: 3, type: 'SELL', amount: '0.5 ETH', status: 'PENDING', icon: '!', color: 'text-cyan-400' },
    { id: 4, type: 'SELL', amount: '0.5 ETH', status: '', icon: '○', color: 'text-gray-500' },
    { id: 5, type: '', amount: '2.0 Z 0f 91x (100 Trades)', status: '', icon: '○', color: 'text-gray-500' }
  ];

  const Navigation = () => (
    <>
      <div className="hidden md:flex items-center gap-4">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-cyan-400/10 transition-colors"
        >
          <Home size={18} />
          <span className="font-medium text-sm">Home</span>
        </button>
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-cyan-400/10 transition-colors"
        >
          <ArrowLeftRight size={18} />
          <span className="font-medium text-sm">P2P</span>
        </button>
        <button 
          onClick={() => onNavigate('airdrop')}
          className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-cyan-400/10 transition-colors"
        >
          <Star size={18} />
          <span className="font-medium text-sm">Airdrop</span>
        </button>
        <button 
          onClick={() => onNavigate('profile')}
          className="flex items-center gap-2 text-cyan-400 px-3 py-2 rounded-lg bg-cyan-400/10 transition-colors"
        >
          <User size={18} />
          <span className="font-medium text-sm">Profile</span>
        </button>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 md:hidden z-50">
        <div className="flex justify-around items-center py-3 max-w-2xl mx-auto">
          <button 
            onClick={() => onNavigate('home')}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-cyan-400 transition"
          >
            <Home size={24} />
            <span className="text-xs">Home</span>
          </button>
          <button 
            onClick={() => onNavigate('home')}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-cyan-400 transition"
          >
            <ArrowLeftRight size={24} />
            <span className="text-xs">P2P</span>
          </button>
          <button 
            onClick={() => onNavigate('airdrop')}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-cyan-400 transition"
          >
            <Star size={24} />
            <span className="text-xs">Airdrop</span>
          </button>
          <button 
            onClick={() => onNavigate('profile')}
            className="flex flex-col items-center gap-1 text-cyan-400 transition"
          >
            <User size={24} />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden pb-20 md:pb-0">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 origin-center opacity-40 animate-pulse"
            style={{
              left: '50%',
              top: '50%',
              width: `${Math.random() * 800 + 200}px`,
              background: `linear-gradient(to right, transparent, ${
                i % 2 === 0 ? '#06b6d4' : '#a855f7'
              }, transparent)`,
              transform: `rotate(${i * 12}deg) translateX(-50%)`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-md mx-auto p-6">
        {/* Header - Fixed Layout with proper spacing */}
        <div className="flex justify-between items-center mb-8">
          {/* Sonic Exchange Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 border border-white rounded transform rotate-45"></div>
            </div>
            <span className="text-white text-lg font-bold">SONIC<br/><span className="text-sm">EXCHANGE</span></span>
          </div>
          
          {/* Desktop Navigation - Centered with proper positioning */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <Navigation />
          </div>
          
          {/* Connect Button */}
          <button className="bg-white text-gray-900 px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition flex-shrink-0">
            Connect
          </button>
        </div>

        {/* Mobile Header */}
        <div className="flex items-center mb-6 md:hidden">
          <button 
            onClick={() => onNavigate('home')}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-3 hover:bg-gray-700 transition-colors flex-shrink-0"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold flex-1 text-center">P2P Profit & Agent Hub</h1>
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors flex-shrink-0">
            <Info size={20} />
          </button>
        </div>

        {/* Main Content - Adjusted Grid */}
        <div className="grid grid-cols-1 gap-6">
          {/* Trade History Box - Now Full Width */}
          <div className="rounded-2xl p-5 bg-gray-900 border border-purple-500/30">
            <h3 className="text-lg font-semibold mb-4">Trade History</h3>
            <div className="space-y-3">
              {trades.map((trade) => (
                <div key={trade.id} className="flex items-center gap-3 text-xs">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    trade.icon === '✓' ? 'bg-cyan-400/20' : 
                    trade.icon === '!' ? 'bg-yellow-400/20' : 'bg-gray-700'
                  }`}>
                    <span className={trade.color}>{trade.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-300">
                      {trade.type && `${trade.type} `}
                      {trade.amount}
                    </div>
                    {trade.status && (
                      <div className={`text-[10px] ${
                        trade.status === 'COMPLETED' ? 'text-gray-500' : 
                        trade.status === 'PENDING' ? 'text-yellow-400' : 'text-gray-500'
                      }`}>
                        {trade.status}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Become Agent Box - Now Full Width */}
          <div className="rounded-2xl p-5 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-400/40">
            <h3 className="text-lg font-semibold mb-2">Become a PP2 Agent</h3>
            <p className="text-xs text-gray-400 mb-4">
              Earn more by facilitating trades
            </p>
            <button 
              onClick={() => onNavigate('register-agent')}
              className="w-full py-2.5 rounded-lg bg-cyan-400 text-gray-900 font-semibold text-sm hover:bg-cyan-300 transition-colors"
            >
              Register as Agent
            </button>
            <div className="mt-4 pt-3 border-t border-gray-700">
              <div className="text-[10px] text-gray-500 mb-2">
                Agent Tier: Bronze (25/100 Trades)
              </div>
              <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-cyan-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Navigation />
      </div>
    </div>
  );
}