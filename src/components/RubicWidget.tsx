import { useEffect } from 'react';

export const useRubicWidget = () => {
  useEffect(() => {
    
    const initWidget = () => {
      if (typeof window !== 'undefined' && window.rubicWidget) {
        const configuration = {
          from: 'ETH',
          to: 'USDT',
          fromChain: 'ETH',
          toChain: 'ETH',
          amount: 1,
          iframe: 'flex',
          hideSelectionFrom: false,
          hideSelectionTo: false,
          useLargeIframe: false,
          hideBranding: false,
          hideUnusedUi: false,
          theme: 'dark',
          slippagePercent: {
            instantTrades: 2,
            crossChain: 5
          }
        };
        
        Object.freeze(configuration);
        window.rubicWidget.init(configuration);
      }
    };

  
    if (window.rubicWidget) {
      initWidget();
    } else {
      
      const checkWidget = setInterval(() => {
        if (window.rubicWidget) {
          clearInterval(checkWidget);
          initWidget();
        }
      }, 100);

      return () => clearInterval(checkWidget);
    }
  }, []);
};


declare global {
  interface Window {
    rubicWidget: {
      init: (config: any) => void;
    };
  }
}