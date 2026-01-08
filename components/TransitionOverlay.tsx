
import React, { useEffect, useState } from 'react';

const TransitionOverlay: React.FC = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 100 : prev + 1.5));
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-ff-dark flex flex-col items-center justify-center p-8 text-center">
      <div className="space-y-8 max-w-sm w-full animate-in zoom-in-95 duration-500">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-ff-orange blur-3xl opacity-20 animate-pulse"></div>
          <h2 className="text-5xl font-black font-gamer italic text-ff-gold tracking-widest relative z-10 uppercase drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
            LEVEL UP!
          </h2>
        </div>
        <p className="text-ff-orange font-bold font-hud tracking-[0.4em] text-[10px] uppercase animate-pulse">Sincronizando Mira Xitada...</p>
        <div className="w-full bg-ff-greyDark h-4 rounded-full border border-white/5 overflow-hidden relative shadow-inner slanted-tr">
          <div className="h-full bg-gradient-to-r from-ff-orange to-ff-gold transition-all duration-100 ease-linear shadow-[0_0_20px_rgba(255,152,0,0.5)]" style={{ width: `${progress}%` }} />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 opacity-60 font-hud text-ff-textMed">
           <div className="text-[9px] font-black uppercase text-left tracking-widest">VAULT: <span className="text-ff-success">ACTIVE</span></div>
           <div className="text-[9px] font-black uppercase text-right tracking-widest">CALIBRAÇÃO: <span className="text-ff-yellow">MAX</span></div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-[2px] bg-ff-orange/30 shadow-[0_0_15px_#ff5722] animate-scan opacity-50"></div>
      <style>{`
        @keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
        .animate-scan { animation: scan 2s linear infinite; }
      `}</style>
    </div>
  );
};

export default TransitionOverlay;
