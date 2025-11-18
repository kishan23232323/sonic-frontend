import { useState } from "react";
import { Home, ArrowLeftRight, Star, User, ArrowLeft } from 'lucide-react';

interface SellPageProps {
  onNavigate: (page: string) => void;
}

const SellPage: React.FC<SellPageProps> = ({ onNavigate }) => {
  const [cryptoAmount, setCryptoAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');

  const paymentMethods = [
    { id: 'bank', name: 'Bank Transfer', icon: '🏦' },
    { id: 'upi', name: 'UPI Payment', icon: '📱' },
    { id: 'cash', name: 'Cash Deposit', icon: '💵' }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white pb-20 md:pb-0">
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => onNavigate('home')}
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-2 ml-2">
              <div className="w-6 h-6 bg-linear-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 border border-white rounded transform rotate-45"></div>
              </div>
              <span className="text-white text-lg font-bold">SONIC<br/><span className="text-sm">EXCHANGE</span></span>
            </div>
          </div>
          
          <button className="bg-white text-gray-900 px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition">
            Connect
          </button>
        </div>

        {/* Sell Form */}
        <div className="flex-1 p-6">
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
            <h1 className="text-2xl font-bold text-white mb-2">Sell Crypto</h1>
            <p className="text-gray-400 mb-6">Select payment method and enter amount</p>

            {/* Amount Inputs */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-gray-400 text-sm mb-2 block">You Sell (Crypto)</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="0.00"
                    value={cryptoAmount}
                    onChange={(e) => setCryptoAmount(e.target.value)}
                    className="w-full bg-gray-700 text-white text-xl px-4 py-4 rounded-xl outline-none border border-gray-600 focus:border-purple-400 transition"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <span className="text-gray-300 font-semibold">BTC</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm mb-2 block">You Receive (Fiat)</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="0.00"
                    value={receiveAmount}
                    onChange={(e) => setReceiveAmount(e.target.value)}
                    className="w-full bg-gray-700 text-white text-xl px-4 py-4 rounded-xl outline-none border border-gray-600 focus:border-purple-400 transition"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <span className="text-gray-300 font-semibold">USD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <label className="text-gray-400 text-sm mb-3 block">Receive Method</label>
              <div className="space-y-2">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl border transition ${
                      selectedPayment === method.id 
                        ? 'border-purple-400 bg-purple-400/10' 
                        : 'border-gray-600 hover:border-purple-400'
                    }`}
                  >
                    <span className="text-xl">{method.icon}</span>
                    <span className="text-white font-medium">{method.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Rate Info */}
            <div className="text-center text-gray-400 text-sm mb-6">
              Rate: 1 BTC ≈ 75,900 USD
            </div>

            {/* Confirm Button */}
            <button className="w-full bg-linear-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition shadow-lg">
              Confirm Sell Order
            </button>

            <p className="text-center text-gray-400 text-sm mt-4">
              Funds held in secure escrow
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800">
        <div className="flex justify-around items-center py-3 max-w-2xl mx-auto">
          <button 
            onClick={() => onNavigate('home')}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-cyan-400 transition"
          >
            <Home size={24} />
            <span className="text-xs">Home</span>
          </button>
          <button 
            onClick={() => onNavigate('p2p')}
            className="flex flex-col items-center gap-1 text-cyan-400 transition"
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
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-cyan-400 transition"
          >
            <User size={24} />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellPage;