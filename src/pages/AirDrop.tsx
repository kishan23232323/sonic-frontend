import React, { useState } from "react";
import { Home, ArrowLeftRight, Star, User, ChevronLeft, Menu } from 'lucide-react';

interface AirdropPageProps {
  onNavigate: (page: string) => void;
}

const AirDrop: React.FC<AirdropPageProps> = ({ onNavigate }) => {
  const [progress] = useState(70);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Rest of your AirDrop component code remains the same */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-linear-to-r from-transparent via-purple-400 to-transparent opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: '-100%',
              width: '200%',
              transform: `rotate(${Math.random() * 60 - 30}deg)`,
              animation: `slide ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen p-6">
        <div className="flex items-center mb-8">
          <button 
            onClick={() => onNavigate('home')}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        <div className="bg-linear-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-lg border-2 border-transparent rounded-3xl p-8 mb-6 relative overflow-hidden">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-purple-500 via-pink-500 to-cyan-500 opacity-50 -z-10"></div>
          <div className="absolute inset-0.5 rounded-3xl bg-linear-to-br from-gray-900 to-gray-800 -z-10"></div>

          <h2 className="text-white text-center text-sm font-semibold mb-4 tracking-wide">
            TOTAL AIRDROP EARNED
          </h2>

          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3">
              <span className="text-white text-5xl font-bold">18,452.73</span>
              <span className="text-gray-300 text-2xl font-semibold">SNX</span>
            </div>
            <div className="inline-block mt-4 bg-purple-600/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white font-semibold text-sm">SNX</span>
            </div>
          </div>

          <button className="w-full bg-linear-to-r from-cyan-400 to-purple-500 text-white py-4 rounded-2xl font-semibold text-lg hover:opacity-90 transition shadow-lg">
            Claim Now
          </button>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-lg">Referral Link</h3>
            <div className="flex gap-3">
              <button className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="h-1 bg-cyan-500 rounded-full w-20"></div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 mb-6">
          <h3 className="text-white font-semibold text-lg text-center mb-6">
            Swap-to-Earn Progress Meter
          </h3>

          <div className="relative w-48 h-48 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="80"
                stroke="#374151"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="96"
                cy="96"
                r="80"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 80}`}
                strokeDashoffset={`${2 * Math.PI * 80 * (1 - progress / 100)}`}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-purple-400 text-4xl font-bold">{progress}%</div>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-center text-sm">
            Swaps to Next Tier: 7/10
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 mb-20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-lg">Referral Leaderboard</h3>
            <button className="text-purple-400">
              <Menu size={24} />
            </button>
          </div>

          <div className="bg-gray-700/30 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🏆</span>
              </div>
              <span className="text-white font-semibold">Sonic 1000</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold">3.000</span>
              <span className="text-gray-400">|</span>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-lg border-t border-gray-800">
          <div className="flex justify-around items-center py-4 max-w-2xl mx-auto">
            <button 
              onClick={() => onNavigate('home')}
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-cyan-400 transition"
            >
              <Home size={24} />
            </button>
            <button 
              onClick={() => onNavigate('buy')}
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-cyan-400 transition"
            >
              <ArrowLeftRight size={24} />
              <span className="text-xs">P2P</span>
            </button>
            <button 
              onClick={() => onNavigate('airdrop')}
              className="flex flex-col items-center gap-1 text-purple-400"
            >
              <Star size={24} />
              <span className="text-xs">Airdrop</span>
            </button>
            <button 
              onClick={() => onNavigate('profile')}
              className="flex flex-col items-center gap-1 text-gray-400 hover:text-cyan-400 transition"
            >
              <User size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirDrop;