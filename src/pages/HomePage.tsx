import React, { useEffect, useState } from 'react';
import { Home, ArrowLeftRight, Star, User, Info, Search, Filter } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

declare global {
  interface Window {
    rubicWidget: {
      init: (config: any) => void;
    };
  }
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [showP2PHub, setShowP2PHub] = useState(false);



  useEffect(() => {
  const initWidget = () => {
    if (window.rubicWidget) {
      const configuration = {
        from: 'ETH',
        to: 'USDT',
        fromChain: 'ETH',
        toChain: 'ETH',
        amount: 1,
        iframe: "true",
        hideSelectionFrom: false,
        hideSelectionTo: false,
        hideTokenSwitcher: false,
        theme: 'dark',
        hideBranding: true,
        hideUnusedUi: false,

        slippagePercent: {
          instantTrades: 2,
          crossChain: 5
        },

        // 💥 CRITICAL: Record successful swaps for Airdrop
        onSuccess: (swapDetails: any) => {
          console.log("SWAP SUCCESS:", swapDetails);

          // Example REST call to your backend
          fetch("https://your-backend.com/api/record-swap", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              wallet: swapDetails.walletAddress,
              txHash: swapDetails.txId,
              fromToken: swapDetails.fromToken,
              toToken: swapDetails.toToken,
              amount: swapDetails.amount,
              timestamp: Date.now()
            }),
          });
        },

        injectTokens: {
          eth: [
            "0x3330BFb7332cA23cd071631837dC289B09C33333" // example custom token
          ]
        }
      };

      Object.freeze(configuration);
      window.rubicWidget.init(configuration);
    }
  };

  // Wait for rubicWidget to load
  if (window.rubicWidget) {
    initWidget();
  } else {
    const check = setInterval(() => {
      if (window.rubicWidget) {
        clearInterval(check);
        initWidget();
      }
    }, 200);

    return () => clearInterval(check);
  }
}, []);


  // useEffect(() => {
  //   const initWidget = () => {
  //     if (typeof window !== 'undefined' && window.rubicWidget) {
  //       const configuration = {
  //         from: 'ETH',
  //         to: 'USDT',
  //         fromChain: 'ETH',
  //         toChain: 'ETH',
  //         amount: 1,
  //         iframe: 'flex',
  //         hideSelectionFrom: true,
  //         hideSelectionTo: true,
  //         useLargeIframe: true,
  //         hideBranding: true,
  //         hideUnusedUi: true,
  //         theme: 'dark',
  //         slippagePercent: {
  //           instantTrades: 2,
  //           crossChain: 5
  //         }
  //       };
        
  //       Object.freeze(configuration);
  //       window.rubicWidget.init(configuration);
  //     }
  //   };

  //   if (window.rubicWidget) {
  //     initWidget();
  //   } else {
  //     const checkWidget = setInterval(() => {
  //       if (window.rubicWidget) {
  //         clearInterval(checkWidget);
  //         initWidget();
  //       }
  //     }, 100);

  //     return () => clearInterval(checkWidget);
  //   }
  // }, []);

  const p2pOrders = [
    { 
      id: 1, 
      pair: 'BTC/USD', 
      price: '75,900', 
      available: '3,250.00 USD', 
      payment: 'Bank Transfer', 
      type: 'buy',
      status: 'Safe Secure',
      escore: 'Escore'
    },
    { 
      id: 2, 
      pair: 'BTC/USD', 
      price: '75,850', 
      available: '2,800.00 USD', 
      payment: 'UPI Payment', 
      type: 'buy',
      status: 'Verified',
      escore: 'Escore'
    },
    { 
      id: 3, 
      pair: 'BTC/USD', 
      price: '76,100', 
      available: '4,500.00 USD', 
      payment: 'Bank Transfer', 
      type: 'sell',
      status: 'Safe Secure',
      escore: 'Escore'
    },
    { 
      id: 4, 
      pair: 'BTC/USD', 
      price: '76,050', 
      available: '3,100.00 USD', 
      payment: 'UPI Payment', 
      type: 'sell',
      status: 'Verified',
      escore: 'Escore'
    }
  ];

  const MobileNavigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700 z-50 md:hidden">
      <div className="flex justify-around items-center py-3 max-w-2xl mx-auto">
        <button 
          onClick={() => {
            setShowP2PHub(false);
            onNavigate('home');
          }}
          className={`flex flex-col items-center gap-1 transition ${
            !showP2PHub ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'
          }`}
        >
          <Home size={24} />
          <span className="text-xs">Home</span>
        </button>
        <button 
          onClick={() => setShowP2PHub(true)}
          className={`flex flex-col items-center gap-1 transition ${
            showP2PHub ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'
          }`}
        >
          <ArrowLeftRight size={24} />
          <span className="text-xs">P2P</span>
        </button>
        <button 
          onClick={() => onNavigate('airdrop')}
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-400 transition"
        >
          <Star size={24} />
          <span className="text-xs">Airdrop</span>
        </button>
        <button 
          onClick={() => onNavigate('profile')}
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-400 transition"
        >
          <User size={24} />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );

  const DesktopNavigation = () => (
    <div className="hidden md:flex items-center gap-4">
      <button 
        onClick={() => {
          setShowP2PHub(false);
          onNavigate('home');
        }}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
          !showP2PHub 
            ? 'text-cyan-400 bg-cyan-400/10' 
            : 'text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10'
        }`}
      >
        <Home size={18} />
        <span className="font-medium text-sm">Home</span>
      </button>
      <button 
        onClick={() => setShowP2PHub(true)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
          showP2PHub 
            ? 'text-cyan-400 bg-cyan-400/10' 
            : 'text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/10'
        }`}
      >
        <ArrowLeftRight size={18} />
        <span className="font-medium text-sm">P2P</span>
      </button>
      <button 
        onClick={() => onNavigate('airdrop')}
        className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-cyan-400/10 transition-colors"
      >
        <Star size={18} />
        <span className="font-medium text-sm">Airdrop</span>
      </button>
      <button 
        onClick={() => onNavigate('profile')}
        className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-cyan-400/10 transition-colors"
      >
        <User size={18} />
        <span className="font-medium text-sm">Profile</span>
      </button>
    </div>
  );

  if (showP2PHub) {
    return (
      <div className="min-h-screen bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(88,28,135,0.85),rgba(37,99,235,0.9))] bg-cover bg-center bg-fixed text-white relative overflow-hidden pb-20">
        <div className="relative z-10 max-w-md mx-auto min-h-screen">
          {/* Header */}
          <div className="flex justify-between items-center p-6">
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-6 h-6 bg-linear-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 border border-white rounded transform rotate-45"></div>
              </div>
              <span className="text-white text-lg font-bold">SONIC<br/><span className="text-sm">EXCHANGE</span></span>
            </div>
            
            <button className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-4 py-1.5 rounded-full font-semibold text-sm hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg">
              Connect
            </button>
          </div>

          {/* P2P Content */}
          <div className="p-6 pb-24">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                P2P Trading
              </h1>
              <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Info size={20} />
              </button>
            </div>

            {/* Buy/Sell Toggle */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button 
                onClick={() => onNavigate('buy')}
                className="bg-linear-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold border-2 border-cyan-400/50 shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Buy
              </button>
              <button 
                onClick={() => onNavigate('sell')}
                className="bg-linear-to-r from-purple-500 to-pink-600 text-white py-3 rounded-xl font-semibold border-2 border-purple-400/50 shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Sell
              </button>
            </div>

            {/* Search and Filter */}
            <div className="flex gap-3 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Country/Region"
                  className="w-full bg-slate-800 text-white pl-10 pr-4 py-3 rounded-xl outline-none border border-slate-600 focus:border-cyan-400 transition backdrop-blur-sm"
                />
              </div>
              <button className="bg-slate-800 text-white px-4 py-3 rounded-xl border border-slate-600 hover:border-cyan-400 transition backdrop-blur-sm">
                <Filter size={20} />
              </button>
            </div>

            {/* P2P Orders List */}
            <div className="space-y-4">
              {p2pOrders.map((order) => (
                <div key={order.id} className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-4 border border-slate-700 hover:border-cyan-400/30 transition-all shadow-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="text-lg font-bold text-white">{order.pair}</div>
                      <div className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {order.price}
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Safe Secure' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {order.status}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Available Amount</span>
                      <span className="text-white font-medium">{order.available}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">{order.payment}</span>
                      <span className="text-cyan-400 font-medium">{order.escore}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <MobileNavigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(88,28,135,0.85),rgba(37,99,235,0.9))] bg-cover bg-center bg-fixed text-white pb-20">
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-6 h-6 bg-linear-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 border border-white rounded transform rotate-45"></div>
          </div>
          <span className="text-white text-lg font-bold">SONIC<br/><span className="text-sm">EXCHANGE</span></span>
        </div>
        
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <DesktopNavigation />
        </div>
        
        <button className="bg-linear-to-r from-cyan-500 to-blue-600 text-white px-4 py-1.5 rounded-full font-semibold text-sm hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg">
          Connect
        </button>
      </div>

      {/* Hero Section */}
      <div className="text-center px-6 py-8 pb-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Sonic Exchange – Fast. Secure. Multi-Chain
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Swap, trade, and earn – all in one decentralized platform
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Rubic Widget */}
          <div id="rubic-widget-root" className="mb-12 mx-auto max-w-2xl"></div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            {/* Multi-Chain Support */}
            <div className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-cyan-400/30 transition-all shadow-lg">
              <div className="flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 border-2 border-white rounded transform rotate-45"></div>
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">
                  Instant Multi-Chain Swaps
                </h3>
                <p className="text-slate-300">
                  Swap tokens across Ethereum, BNB Chain, Polygon, and more with 80+ blockchains and 16,000+ tokens.
                </p>
              </div>
            </div>

            {/* P2P Trading */}
            <div className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-purple-400/30 transition-all shadow-lg">
              <div className="flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <ArrowLeftRight size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Simple P2P Trading</h3>
                <p className="text-slate-300">
                  Buy and sell crypto directly with users worldwide. No intermediates, secure escrow.
                </p>
              </div>
            </div>

            {/* Earn Airdrops */}
            <div className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-yellow-400/30 transition-all shadow-lg">
              <div className="flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 bg-linear-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Star size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Earn Airdrops</h3>
                <p className="text-slate-300">
                  Get rewarded for every swap, trade, and referral. Maximize your crypto earnings.
                </p>
              </div>
            </div>

            {/* Secure & Non-Custodial */}
            <div className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-green-400/30 transition-all shadow-lg">
              <div className="flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Secure & Non-Custodial</h3>
                <p className="text-slate-300">
                  Connect your wallet and stay in control. Your keys, your crypto. Always.
                </p>
              </div>
            </div>

            {/* Additional Feature */}
            <div className="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-blue-400/30 transition-all shadow-lg md:col-span-2 md:max-w-md md:mx-auto">
              <div className="flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <User size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">User-Friendly Interface</h3>
                <p className="text-slate-300">
                  Intuitive design built for both beginners and experienced traders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 mt-8 py-6">
        <div className="text-center text-slate-400">
          <p>© 2025 Sonic Exchange | Powered by Web3</p>
        </div>
      </div>

      <MobileNavigation />
    </div>
  );
};

export default HomePage;