
import React, { useState } from 'react';
import { ArrowLeft, Calendar, Shield, Send } from 'lucide-react';

interface RegisterAsAAgentProps {
  onNavigate: (page: string) => void;
}

const RegisterAsAAgent: React.FC<RegisterAsAAgentProps> = ({ onNavigate }) => {
  const [showRegistration] = useState(true);

  if (showRegistration) {
    return (
      <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
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

        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-3xl p-8 relative"
               style={{
                 background: 'rgba(15, 23, 42, 0.8)',
                 backdropFilter: 'blur(20px)',
                 border: '2px solid',
                 borderImage: 'linear-gradient(135deg, #06b6d4, #a855f7) 1'
               }}>
            
            <button 
              onClick={() => onNavigate('home')}
              className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={24} />
            </button>

            <div className="text-center mb-8 mt-8">
              <h2 className="text-3xl font-bold mb-2">Become a P2P Agent</h2>
              <p className="text-gray-400 text-sm">Fill in your details to get started</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Bank Account Details</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Bank Account Number"
                  className="w-full px-5 py-4 rounded-2xl bg-transparent border-2 border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Account Holder Name"
                  className="w-full px-5 py-4 rounded-2xl bg-transparent border-2 border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="IFSC / Swift Code"
                  className="w-full px-5 py-4 rounded-2xl bg-transparent border-2 border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Date of Birth"
                    className="w-full px-5 py-4 rounded-2xl bg-transparent border-2 border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                  <Calendar className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <p className="text-sm text-gray-400">You must be 18+</p>
              </div>
            </div>

            <div className="mb-6">
              <button className="w-full p-6 rounded-2xl border-2 border-cyan-500/30 hover:border-cyan-400 transition-colors flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/20 flex items-center justify-center">
                  <Shield className="text-cyan-400" size={24} />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Upload ID Proof</div>
                  <div className="text-sm text-gray-400">Passport, Driver's License, or National ID</div>
                </div>
              </button>
            </div>

            <p className="text-center text-sm text-gray-400 mb-6">
              All data is encrypted and secure
            </p>

            <button className="w-full py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-[1.02] relative overflow-hidden group"
                    style={{
                      background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                    }}>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Submit Application
                <Send size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default RegisterAsAAgent;